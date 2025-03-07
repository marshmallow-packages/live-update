<template>
    <div class="relative whitespace-nowrap flex items-center">
        <div v-if="field.asPlaceholder">
            {{ field.value }}
        </div>
        <input
            v-else
            :id="'live-input-' + field.attribute"
            :type="field.type ?? 'text'"
            class="w-full form-control form-input form-control-bordered"
            :placeholder="field.name"
            v-model="value"
            @blur="save"
            @change="saveOnChange"
            @keyup.enter="save"
            :style="'min-width:250px;'"
        />
        <div v-if="field.copyable" class="ml-1 hover:bg-gray-100 rounded-full">
            <Tooltip :triggers="['hover']">
                <Icon
                    v-if="!copied"
                    width="14"
                    @click="copy"
                    :solid="false"
                    name="clipboard"
                    class="cursor-pointer text-gray-400 dark:text-gray-500"
                />

                <Icon
                    v-if="copied"
                    class="text-green-500"
                    :solid="true"
                    name="check-circle"
                    width="14"
                />

                <template #content>
                    <TooltipContent :max-width="width">
                        Copy to clipboard
                    </TooltipContent>
                </template>
            </Tooltip>
        </div>

        <div
            v-if="field.copyableTo"
            class="ml-1 hover:bg-gray-100 rounded-full"
        >
            <Tooltip :triggers="['hover']">
                <Icon
                    v-if="!copied_to"
                    width="14"
                    @click="copyTo"
                    :solid="false"
                    name="duplicate"
                    class="cursor-pointer text-gray-400 dark:text-gray-500"
                />
                <Icon
                    v-if="copied_to"
                    class="text-green-500"
                    :solid="true"
                    name="check-circle"
                    width="14"
                />
                <template #content>
                    <TooltipContent :max-width="width">
                        {{
                            field.copyableToTooltip ??
                            "Copy to" + field.copyableToFieldName
                        }}
                    </TooltipContent>
                </template>
            </Tooltip>
        </div>
        <div
            v-if="field.copyableAction"
            class="ml-1 hover:bg-gray-100 rounded-full"
        >
            <Tooltip :triggers="['hover']">
                <Icon
                    v-if="!copyabel_action_run"
                    width="14"
                    @click="runCopyableAction"
                    :solid="false"
                    :name="field.copyableActionIcon"
                    class="cursor-pointer text-gray-400 dark:text-gray-500"
                />
                <Icon
                    v-if="copyabel_action_run"
                    class="text-green-500"
                    :solid="true"
                    name="check-circle"
                    width="14"
                />
                <template #content>
                    <TooltipContent :max-width="width">
                        {{
                            field.copyableActionTooltip ??
                            "Run" + field.copyableAction
                        }}
                    </TooltipContent>
                </template>
            </Tooltip>
        </div>

        <Loader class="absolute right-0 mr-2" v-show="loading" width="20" />
    </div>
</template>

<script>
    import { FormField, CopiesToClipboard } from "laravel-nova";
    import { Icon, Tooltip, Loader } from "laravel-nova-ui";
    import api from "../api";

    export default {
        components: { Icon, Loader, Tooltip },
        data: () => ({
            loading: false,
            copied: false,
            copied_to: false,
            copyabel_action_run: false,
        }),
        mixins: [FormField, CopiesToClipboard],
        props: ["resourceName", "resourceId", "field"],
        mounted() {
            if (this.field.listen) {
                let self = this;
                Nova.$on(
                    `${this.field.listen}-${this.field.listen_event}`,
                    function (value) {
                        let formData = new FormData();
                        formData.append("value", value);
                        formData.append("attribute", self.field.attribute);
                        Nova.request()
                            .post(
                                `/live-update/listen/${self.resourceName}/${self.resourceId}`,
                                formData
                            )
                            .then((response) => {
                                self.value = response.data.value;
                                self.save();
                            });
                    }
                );
            }
        },
        methods: {
            copy() {
                this.copied = true;
                this.copyValueToClipboard(this.field.value);
                setTimeout(() => {
                    this.copied = false;
                }, 1000);
            },
            copyTo() {
                this.copied_to = true;
                let element_id = "live-input-" + this.field.copyableToFieldName;
                let element = document.getElementById(element_id);

                element.value = this.field.value;
                element.dispatchEvent(new Event("input", { bubbles: true }));

                setTimeout(() => {
                    element.focus();
                    element.blur();
                    this.copied_to = false;
                }, 1000);
            },
            runCopyableAction() {
                this.copyabel_action_run = true;
                let element_id =
                    this.field.copyableActionFieldName + this.field.id;
                let element = document.getElementById(element_id);

                let self = this;
                let formData = new FormData();
                formData.append("action_class", this.field.copyableAction);
                let resourceId = this.field.id;

                return Nova.request()
                    .post(
                        `/live-update/run-action/${this.resourceName}/${resourceId}`,
                        formData
                    )
                    .then(
                        (response) => {
                            element.blur();
                            element.value = response.data.value;
                            element.dispatchEvent(
                                new Event("input", { bubbles: true })
                            );

                            setTimeout(() => {
                                this.copyabel_action_run = false;
                            }, 1000);
                        },
                        (response) => {
                            Nova.error(response);
                            this.copyabel_action_run = false;
                        }
                    )
                    .finally(() => {
                        this.copyabel_action_run = false;
                    });
            },
            async updateTranslation() {
                let vm = this;
                try {
                    await api.saveItems(
                        vm.resourceName,
                        vm.field.id,
                        vm.field.attribute,
                        vm.value
                    );
                    Nova.success("Successfully updated!");
                } catch (error) {
                    if (error.response.status == 422) {
                        let validationErrors = [];

                        error.response.data.errors.value.forEach(function (
                            errorMessage
                        ) {
                            validationErrors.push(
                                errorMessage.replace("value", vm.field.name)
                            );
                        });

                        Nova.error(validationErrors.join("<br>"));
                    }
                }
                this.loading = false;
            },
            saveOnChange() {
                if (this.field.saveOnChange) {
                    this.save();
                }
            },
            save() {
                if (this.value != this.field.value) {
                    if (!this.loading) {
                        this.loading = true;
                        this.updateTranslation();
                    }
                }
            },
            // setInitialValue() {
            //     this.value = this.field.value || "";
            // },
            // fill(formData) {
            //     formData.append(this.field.attribute, this.value || "");
            // },
        },
    };
</script>

<style scoped></style>

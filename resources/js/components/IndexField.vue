<template>
    <div @click.stop class="relative w-full flex items-stretch">
        <template v-if="hasValue">
            <div class="relative whitespace-nowrap flex items-center">
                <input
                    :id="field.name + field.id"
                    type="text"
                    class="w-full w-full form-control form-input form-input-bordered"
                    :placeholder="field.name"
                    v-model="value"
                    @blur="save"
                    @input.prevent="save"
                    @keyup.enter="save"
                    :style="'min-width:250px;'"
                />
                <Loader
                    class="absolute right-0 mr-2"
                    v-show="loading"
                    width="20"
                />
            </div>
        </template>
    </div>
</template>

<script>
    import { FormField } from "laravel-nova";
    import api from "../api";

    export default {
        data: () => ({
            loading: false,
        }),
        mixins: [FormField],
        props: ["resourceName", "resourceId", "field"],
        methods: {
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
            save() {
                if (this.value != this.field.value) {
                    if (!this.loading) {
                        this.loading = true;
                        this.updateTranslation();
                    }
                }
            },
            setInitialValue() {
                this.value = this.field.value || "";
            },
            fill(formData) {
                formData.append(this.field.attribute, this.value || "");
            },
        },
        computed: {
            hasValue() {
                return true;
            },
        },
    };
</script>

<style scoped></style>

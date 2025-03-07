<template>
    <div @click.stop class="relative w-full flex items-stretch">
        <div class="relative whitespace-nowrap flex items-center">
            <div v-if="field.asPlaceholder">{{ field.value }}</div>
            <div v-else>
                <live-update-field
                    :resourceName="resourceName"
                    :resourceId="resourceId"
                    :field="field"
                />
            </div>
        </div>
    </div>
</template>

<script>
    // import { FormField, CopiesToClipboard } from "laravel-nova";
    // import api from "../api";
    import { LiveUpdateField } from "./LiveUpdateField";

    export default {
        components: {
            LiveUpdateField,
        },
        // data: () => ({
        //     loading: false,
        //     copied: false,
        //     copied_to: false,
        //     copyabel_action_run: false,
        // }),
        // mixins: [FormField, CopiesToClipboard],
        props: ["resourceName", "resourceId", "field"],
        methods: {
            // copy() {
            //     this.copied = true;
            //     this.copyValueToClipboard(this.field.value);
            //     setTimeout(() => {
            //         this.copied = false;
            //     }, 1000);
            // },
            // copyTo() {
            //     this.copied_to = true;
            //     let element_id = this.field.copyableToFieldName + this.field.id;
            //     let element = document.getElementById(element_id);

            //     element.blur();
            //     element.value = this.field.value;
            //     element.dispatchEvent(new Event("input", { bubbles: true }));

            //     setTimeout(() => {
            //         this.copied_to = false;
            //     }, 1000);
            // },
            // runCopyableAction() {
            //     this.copyabel_action_run = true;
            //     let element_id =
            //         this.field.copyableActionFieldName + this.field.id;
            //     let element = document.getElementById(element_id);

            //     let self = this;
            //     let formData = new FormData();
            //     formData.append("action_class", this.field.copyableAction);
            //     let resourceId = this.field.id;

            //     return Nova.request()
            //         .post(
            //             `/live-update/run-action/${this.resourceName}/${resourceId}`,
            //             formData
            //         )
            //         .then(
            //             (response) => {
            //                 element.blur();
            //                 element.value = response.data.value;
            //                 element.dispatchEvent(
            //                     new Event("input", { bubbles: true })
            //                 );

            //                 setTimeout(() => {
            //                     this.copyabel_action_run = false;
            //                 }, 1000);
            //             },
            //             (response) => {
            //                 Nova.error(response);
            //                 this.copyabel_action_run = false;
            //             }
            //         )
            //         .finally(() => {
            //             this.copyabel_action_run = false;
            //         });
            // },
            // async updateTranslation() {
            //     let vm = this;
            //     try {
            //         await api.saveItems(
            //             vm.resourceName,
            //             vm.field.id,
            //             vm.field.attribute,
            //             vm.value
            //         );
            //         Nova.success("Successfully updated!");
            //     } catch (error) {
            //         if (error.response.status == 422) {
            //             let validationErrors = [];

            //             error.response.data.errors.value.forEach(function (
            //                 errorMessage
            //             ) {
            //                 validationErrors.push(
            //                     errorMessage.replace("value", vm.field.name)
            //                 );
            //             });

            //             Nova.error(validationErrors.join("<br>"));
            //         }
            //     }
            //     this.loading = false;
            // },
            // save() {
            //     if (this.value != this.field.value) {
            //         if (!this.loading) {
            //             this.loading = true;
            //             this.updateTranslation();
            //         }
            //     }
            // },
            setInitialValue() {
                this.value = this.field.value || "";
            },
            fill(formData) {
                formData.append(this.field.attribute, this.value || "");
            },
        },
    };
</script>

<style scoped></style>

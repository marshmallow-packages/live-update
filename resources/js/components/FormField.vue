<template>
    <DefaultField
        :field="currentField"
        :errors="errors"
        :show-help-text="showHelpText"
    >
        <template #field>
            <input
                v-bind="extraAttributes"
                class="w-full form-control form-input form-input-bordered"
                @input="handleChange"
                :value="value"
                :id="currentField.uniqueKey"
                :dusk="field.attribute"
                :disabled="currentlyIsReadonly"
                :list="`${field.attribute}-list`"
            />
        </template>
    </DefaultField>
</template>

<script>
    import { DependentFormField, HandlesValidationErrors } from "laravel-nova";

    export default {
        mixins: [DependentFormField, HandlesValidationErrors],

        props: ["resourceName", "resourceId", "field"],

        computed: {
            defaultAttributes() {
                return {
                    type: this.currentField.type || "text",
                    min: this.currentField.min,
                    max: this.currentField.max,
                    step: this.currentField.step,
                    pattern: this.currentField.pattern,
                    placeholder:
                        this.currentField.placeholder || this.field.name,
                    class: this.errorClasses,
                };
            },
        },

        extraAttributes() {
            const attrs = this.currentField.extraAttributes;

            return {
                // Leave the default attributes even though we can now specify
                // whatever attributes we like because the old number field still
                // uses the old field attributes
                ...this.defaultAttributes,
                ...attrs,
            };
        },
    };
</script>

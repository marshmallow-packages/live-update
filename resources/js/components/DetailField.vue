<template>
    <PanelItem :index="index" :field="field">
        <template v-slot:value>
            <live-update-field
                :resourceName="resourceName"
                :resourceId="resourceId"
                :field="field"
            />
        </template>
    </PanelItem>
</template>

<script>
    export default {
        props: ["index", "resource", "resourceName", "resourceId", "field"],
    };
</script>

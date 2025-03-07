Nova.booting((Vue) => {
    Vue.component(
        "live-update-field",
        require("./components/LiveUpdateField").default
    );
    Vue.component(
        "index-live-update",
        require("./components/IndexField").default
    );
    Vue.component(
        "preview-live-update",
        require("./components/PreviewField").default
    );

    Vue.component(
        "detail-live-update",
        require("./components/DetailField").default
    );
    Vue.component(
        "form-live-update",
        require("./components/FormField").default
    );
});

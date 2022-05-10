import IndexField from "./components/IndexField";
import DetailField from "./components/DetailField";
import FormField from "./components/FormField";

Nova.booting((app, store) => {
    app.component("index-live-update", IndexField);
    app.component("detail-live-update", DetailField);
    app.component("form-live-update", FormField);
});

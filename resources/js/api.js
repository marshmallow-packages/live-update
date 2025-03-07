export default {
    async saveItems(resourceName, id, attribute, value) {
        return Nova.request().post(`/live-update/update/${resourceName}`, {
            id: id,
            attribute: attribute,
            value: value,
        });
    },
};

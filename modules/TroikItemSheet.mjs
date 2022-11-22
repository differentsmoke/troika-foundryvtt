export class TroikItemSheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: "systems/troika/templates/ItemSheet.hbs"
        });
    }

    
}
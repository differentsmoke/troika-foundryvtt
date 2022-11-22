export class CharacterSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["character"],
            template: "systems/troika/templates/CharacterSheet.hbs"
        });
    }

    activateListeners($) {
        super.activateListeners($);
        $.find("button.character-sheet_roll-stats").on("click", () => this.actor.rollCharacter());
        $.find("button.character-sheet_choose-background").on("click", () => alert("d66"));

    }

}
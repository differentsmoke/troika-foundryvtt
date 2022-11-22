import { CharacterSheet } from "./modules/CharacterSheet.mjs";
import { TroikActor } from "./modules/TroikActor.mjs";
import { TroikItem } from "./modules/TroikItem.mjs";
import { TroikItemSheet } from "./modules/TroikItemSheet.mjs";

Hooks.on("init", () => {
    CONFIG.Actor.documentClass = TroikActor;
    CONFIG.Item.documentClass = TroikItem;
    
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("troika", CharacterSheet, { types: ["character"] });

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("troika", TroikItemSheet, {types: ["background", "item", "advancedSkill", "spell"]})
   
    

});

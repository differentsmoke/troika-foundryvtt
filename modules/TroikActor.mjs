export class TroikActor extends Actor {

    prepareData() {
        super.prepareData();
    }

    prepareDerivedData() {
        super.prepareDerivedData();

        const { skill, stamina, luck } = this.system;
        this.derived = {
            rolled: !(skill === 0 && stamina === 0 && luck === 0),
            hasBackground: this.system.status.background !== ""
        }

    }

    rollCharacter() {

        if (!this.system.status.rolled) {

            const skill = new Roll("1d3 + 3");
            const stamina = new Roll("2d6 + 12");
            const luck = new Roll("1d6 + 6");

            const rolls = [];

            rolls.push(skill.toMessage({ flavor: "Rolling skill..." }));
            rolls.push(stamina.toMessage({ flavor: "Rolling stamina..." }));
            rolls.push(luck.toMessage({ flavor: "Rolling luck..." }));

            Promise.all(rolls).then(() => {
                this.update({
                    system: {
                        skill: skill.total,
                        stamina: stamina.total,
                        luck: luck.total, status: {
                            rolled: true
                        }
                    }
                })
            })
        }

    }
}
const skills = [
	{
		"name": "acrobatics",
		"description": "Used for rolling, balancing, falling, jumping, etc."
	},
	{
		"name": "astrology",
		"description": "An essential Skill for anyone intent on travelling the stars. Can be used to identify stars and constellations, to gather hints on the destination of interdimensional portals, and to make star charts."
	},
	{
		"name": "awareness",
		"description": "Anything worth having is well hidden so one must look very carefully. Use this to spot traps, things normally hidden, or things out of the ordinary."
	},
	{
		"name": "climb",
		"description": "The usefulness of the ability to clamber up things cannot be overstated. Most climbs should be single rolls though longer or more difficult climbs may require multiple rolls. On these climbs consider requiring a number or total or repeated failures to fall off unless it is a particularly  merciless ascent. The GM should use their discretion."
	},
	{
		"name": "crafting skills",
		"description": "This includes any Skill you might think of that comes under the heading of arts and crafts. Blacksmithing, carpentry, painting, opera singing, anything like that. Roll Under the Skill if you want to do something that knowledge of this Skill would reasonably cover. A carpenter might be able to spot a weak bridge while a blacksmith could shoe a horse or an opera singer could identify an aria. Be flexible and reasonable."
	},
	{
		"name": "disguise",
		"description": "Covers the use of props to change your appearance. When in disguise you must Roll Under this when someone is liable to see through it. Opposed by Awareness when under scrutiny."
	},
	{
		"name": "etiquette",
		"description": "When making a good impression is important Roll Versus your host’s Etiquette. Represents a mechanical understanding of social conduct and those who are better at it are more discerning."
	},
	{
		"name": "evaluate",
		"description": "Test this to get an idea of how much something is worth."
	},
	{
		"name": "fly",
		"description": "Use Fly much as you would Run. In normal situations this doesn’t need testing, only in chases or high winds, maybe. Anyone attempting to Fly without this Skill must Test every Round to make sure they don’t crash or lose control."
	},
	{
		"name": "golden barge pilot",
		"description": "Test this to navigate between the stars on a ship with golden mirror sails."
	},
	{
		"name": "healing",
		"description": "Used to stitch wounds and apply ointments, stop bleeding, slow poison and the like. Also used for stabilising dying people."
	},
	{
		"name": "languages",
		"description": "Represents relative competence in specific languages and would only need to be Tested if trying to understand something incredibly arcane or technical. It’s assumed that once you have one point in a language you can understand it passably. You get one tick in a language for every month of intense tuition or complete submersion in it."
	},
	{
		"name": "locks",
		"description": "This allows a character to examine and open locks but does not detect traps. Roll Versus an imaginary locksmith whose Skill is somewhere between 6 and 12 with 6 being easy and 12 being very hard."
	},
	{
		"name": "mathmology",
		"description": "Use this to gain insight into angles, pressures, numbers, and other such arcane arts. You could, for instance, Test your Mathmology to get a good idea of the surface tension of a ball of inert plasmic goo or to find the fulcrum for tripping a giant."
	},
	{
		"name": "poison",
		"description": "You may Test this Skill during down time to create a single dose of poison. Pick which kind it is when you make it. This list is not exhaustive — more exotic ones may be available if you possess the knowledge and ingredients. 1d3 Common Poisons of Troika: 1 Causes anyone ingesting it to Test their Luck (or Skill for Enemies) or lose 4d6 Stamina. 2 Add 1 to all Damage Rolls while this is applied to piercing or edged Weapons. If you Roll a 1 for Damage the poison has worn off. 3 Causes anyone ingesting it to fall unconscious for 1d6 hours."
	},
	{
		"name": "ride",
		"description": "Everyone is assumed to have basic animal riding Skill though anything more than trotting slowly will require some kind of roll to avoid trouble."
	},
	{
		"name": "run",
		"description": "When it matters how fast you are, or if you can reach somewhere in time, use this. A basic chase is an Roll Versus."
	},
	{
		"name": "second sight",
		"description": "Use of this allows the detection of magic. On a successful Test you focus your inner eye and all sorcerous activity glows faintly for a moment."
	},
	{
		"name": "secret signs",
		"description": "Used to identify marks, handshakes, code words, etc. of one specific society. You would, for example, be able to read the secret marks left on people’s door posts by fellow hobos."
	},
	{
		"name": "sleight of hand",
		"description": "Steal or hide small things. This is Tested only if someone is actively looking for them. A character may simply declare they are hiding something, only rolling this when the hiddenness is questioned."
	},
	{
		"name": "sneak",
		"description": "The art of remaining unseen. This is Tested only when someone or something is actively trying to detect you. The sneaker would Roll Versus the Awareness of those searching for them; anyone beating the sneaker’s score detects them."
	},
	{
		"name": "strength",
		"description": "Used for lifting and breaking things. May also be used to grapple people if no grappling-appropriate Weapon Skill is possessed, though it counts for half rounded up."
	},
	{
		"name": "swim",
		"description": "Use this while swimming in dangerous waters, diving, holding your breath for long periods, and so on. If you have this Skill you don’t need to roll it for normal conditions. Characters without it are assumed to not be able to swim and need to test Swimming every round they remain in the water or start Drowning (7.9). Receive a penalty to this Skill equal to half the number of item slots filled."
	},
	{
		"name": "tracking",
		"description": "Used to stalk prey and find tracks. When stalking a quarry this is treated as an opposed Roll Versus the opponent’s Tracking or Sneaking."
	},
	{
		"name": "trapping",
		"description": "Use this to set and disarm traps. When setting traps Roll Under your Trapping Skill and describe how the trap is made with the materials at hand. When someone wishes to disarm a trap they must Roll Versus the original trap-setter’s Trapping Skill. If the GM doesn’t know what that number should be assume 6 to be pretty simple while 12 is incredibly hard. Scale it between those as appropriate."
	},
	{
		"name": "tunnel fighting",
		"description": "You may use this Skill in place of your Weapon Skill while fighting in confined spaces where you would otherwise be unable to swing your Weapon about. You ignore all penalties the GM might associate with fighting in such a situation."
	},
	{
		"name": "weapon fighting",
		"description": "Choose what general category of Weapons this covers when you take this Skill. Roll Versus during combat when using the appropriate method of assault. The GM is encouraged to allow Weapon categories to be broadly applicable, such as Glaive Fighting being equivalent to Polearm Fighting."
	},
	{
		"name": "wrestling",
		"description": "To Grapple: Roll Versus your opponent’s Wrestling Skill. If you win you may either knock them to the ground or deal Damage as Unarmed and knock you both to the ground (from throwing or tackling them). On a Mighty Blow (7.4) you render them unconscious for 1d6 Rounds. If you fail to grapple them they may deal Damage to you as though they had attacked you normally whereas if you Fumble (7.5) they deal you a Mighty Blow."
	}
];

const TroikItem = CONFIG.Item.documentClass;

const skills_compendium = game.packs.get("world.advanced-skills");

(skills_compendium ? skills_compendium.deleteCompendium() : Promise.resolve()).then(function () {
	return CompendiumCollection.createCompendium({ label: "Advanced Skills", type: "Item" })
}).then(function (CC) {
	skills.forEach(function (skill) {
		const { name, ...system } = skill;
		const skillDocument = new TroikItem({ name, type: "advancedSkill", system });
		CC.importDocument(skillDocument);
	});
});
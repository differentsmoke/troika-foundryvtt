const bestiary = [
	{
		"name": "alzabo",
		"skill": 10,
		"stamina": 21,
		"initiative": 4,
		"armour": 1,
		"damage as": "large beast",
		"mien": "hungry, confused, protective, patient, watchful, evasive",
		"description": "The red furred ghoul-bear, which at its shoulder stands as tall as a horse, would be a frightful creature for no other reason than its immediate physical impression. The Alzabo can produce — for it is not truly mimicking, rather recalling — the exact sound of any creature it has ever eaten. Crying out in the night, it draws its prey from safety, typically by imitating a recently eaten family member and calling to its children or parents. Even if the devoured is human, and those listening know that it’s not truly them, the sound of a daughter you know to be dead tapping at your cottage door and begging to be let in from the cold is more than most can bear.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "boggart",
		"skill": 6,
		"stamina": 9,
		"initiative": 2,
		"armour": 0,
		"damage as": "weapon or modest beast",
		"mien": "belligerent, obstinate, petulant, insolent, sullen, smug",
		"description": "You could be forgiven for thinking a boggart was a rangy man with an exceedingly bristly beard, but no, once upon a time it sprung fully formed from a Hole and has been ungrateful and ill prepared for everything since. They rarely travel far from their birth hole although there is no pixie compulsion to do so, it’s more a point of principle and lack of imagination on their part. They can, if provoked, be violent in the defence of the land which they consider to be theirs but they are prideful, stupid, and easily tricked.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "bonshad",
		"skill": 12,
		"stamina": 20,
		"initiative": 3,
		"armour": 2,
		"damage as": "gigantic beast",
		"mien": "wrathful, virulent, spiteful, nauseated, acquisitive, imperious",
		"description": "The Bonshad is the source of an amusing piece of trivia amongst diabolists. While it is well known that the Bonshads know the method of creating the Elixir of Shazmazm it is less well known (at least amongst impatient apprentices) that The 17th Incantation of Ignis Baxter: Bring Up What Bonshad Come contains a typo in the 5th chorus. You can imagine the embarrassment this would have caused Master Baxter had he not been tragically caught up in the Oblation Wars soon after completing his seminal work. Regardless, calling up this hook-beaked betentacled fiend without the reformed texts will see one dragged off to the bottom of the Demon Sea to work their curious mines. What a lark!",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "cyclops",
		"skill": 9,
		"stamina": 14,
		"initiative": 3,
		"armour": 2,
		"damage as": "large beast",
		"mien": "tearful, depressed, melancholic, sombre, resigned, mercurial",
		"description": "Once upon a time a nation of man asked one of the Aeons to grant them the power of immortality and foresight. The Aeons, being an arbitrary bunch, took one eye from each as fair exchange. The men found that their foresight was indeed present but extended only to knowledge of their eventual deaths by accident or violence. Feeling positively monkey-pawed, they agreed to go their separate ways and to never speak of it again.",
		"special": "When a cyclops is given Initiative it may draw the next three Initiatives in order, thus granting them knowledge of who is going next. They know when and how they die and this might not be it.",
		"specialDamage": ""
	},
	{
		"name": "dolm",
		"skill": 7,
		"stamina": 21,
		"initiative": 2,
		"armour": 1,
		"damage as": "large beast",
		"mien": "unperturbed, detached, tranquil, tired, curious, perturbed",
		"description": "Somewhere beneath the earth they sit suspended in their cavities, peacefully contemplating the movements of the surface world. A witness to their intercrevice ambling would see a large, saggy-skinned humanoid with soulful grey eyes staggering as though carrying a heavy basin of water. The dolm never stops growing, as far as anyone can tell, and the oldest and wisest of their sort can tower above a typical townhouse while still being able to squeeze themselves under the door.",
		"special": "A dolm can compress itself to fit in any crack through which they can pass their eyes. These, unlike the rest of them, never grow beyond the size of a typical human eye.",
		"specialDamage": ""
	},
	{
		"name": "donestre",
		"skill": 9,
		"stamina": 14,
		"initiative": 3,
		"armour": 0,
		"damage as": "modest beast",
		"mien": "gregarious, urbane, exhilarated, impassioned, shameful, grieving",
		"description": "There is a certain race of a solitary nature whose multitudinous heads are all lions and flowing manes. They glitter with numinous light and speak the language of all thinking beings. They dazzle travellers with knowledge of their past and the places they have been and are going. Indeed their knowledge seems deep, broad, and generously given. Their hunger for company is an honest one, their enthusiasm is endless, but they can’t control themselves. As the conversation flows they become more and more fervent until their passion ignites and they devour their companion up to the neck. They continue to sadly converse with the head for a time before shamefully burying it and moving on.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "drock",
		"skill": 6,
		"stamina": 13,
		"initiative": 2,
		"armour": 0,
		"damage as": "small beast",
		"mien": "happy, contemplative, hungry, tired, unhappy, confused",
		"description": "Dwarfs are creatures of purpose; they set their minds on a course and follow it until they finish or run aground. Occasionally a Dwarf is forcibly prevented from finishing a project, possibly by dropping dead at an inopportune moment; it happens. Usually this is a sad but inconsequential occasion, but sometimes it happens while they pursue the highest art a Dwarf can engage in: creation of a new Dwarf. These creatures of raw surfaces, untreated stucco, brass armature, and soggy wet clay seek meaning, Dwarfiness, and to be finished by a sure and careful hand.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "dragon",
		"skill": 16,
		"stamina": 32,
		"initiative": 8,
		"armour": 4,
		"damage as": "gigantic beast",
		"mien": "sleeping, “playful”, hungry, quizzical, aggressive, paranoid",
		"description": "Dragons are creatures of hyper-light, unburdened by base matter, able to soar across the dark sea of sky between worlds. Since their spirits are immortal and illuminated by the black-suns they may, and often do, indulge in base activities such as wanton slaughter, accumulating needless wealth, and plumbing the depths of forbidden knowledge. They do this because they know that nothing of these wicked spheres can harm them or their objective spiritual and physical perfection.",
		"special": "Once per Round they may douse a 24 foot area in beautiful Dragon-Fire. Everyone in the area is automatically hit but may Test their Luck to reduce the Damage Roll by 1. \n\n\nDragons are immune to high temperatures, including Dragon-Fire.",
		"specialDamage": "6,8,12,16,18,24,36"
	},
	{
		"name": "ekodat",
		"skill": 8,
		"stamina": 43,
		"initiative": 3,
		"armour": 2,
		"damage as": "spear",
		"mien": "dormant, stationary, unstable, probing, tentative, cautious",
		"description": "The Ekodat is a series of crystalline protrusions emanating from a clouded crystal core. These “tentacles” don’t move; instead they grow rapidly through the air like roots. Natural philosophers have been back and forth about the categorisation of the Ekodat. While all agree it is a chimera of mineral and some other substance they cannot confirm the matter of the other. The popular attitude is that it is a divine emanation caught and refracted in some unusually dense crystal matrix, causing what would otherwise be an angelic visitation to become a mineralogical hazard.",
		"special": "The tentacles remain after an attack. When an individual is successfully injured by the Ekodat they are immediately attacked again by the sudden growth of additional spurs brought on by the sufusion of vital fluids.",
		"specialDamage": ""
	},
	{
		"name": "feathered folk",
		"skill": 7,
		"stamina": 6,
		"initiative": 2,
		"armour": 0,
		"damage as": "bow",
		"mien": "pious, sincere, beatific, rapt, abstracted, doubting",
		"description": "Profoundly religious though unfocused. Their civilisation worshiped the Egg of Time, which sat at the heart of their temple city on their holy mountain, until the day the Egg cracked and the god that leaped forth instantly shattered into a trillion shards of glass that flew off into the cosmos. Since then they have been eager to join any religion founded after that point, believing it to be a shard of the Born God.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "goblin",
		"skill": 5,
		"stamina": 6,
		"initiative": 1,
		"armour": 1,
		"damage as": "weapon",
		"mien": "curious, dismissive, preoccupied, gossipy, overly friendly, paranoid",
		"description": "Goblins are the vanguard of civilisation. The moment a sphere bobs to the surface the goblins will creep out of the nooks and crannies to start expanding their labyrinth. Left to their own devices they will eventually tame and cover every surface in walls and hedges and tunnels and steel and whatever else is in goblin-vogue, though more usually they are distracted with an accidentally awakened evil, or recalled by the Goblin King, or cut off from the centre of the labyrinth and turned feral to live in the man-cities. A most terrible fate. Better to bury their labyrinths and leave.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "gremlin",
		"skill": 3,
		"stamina": 4,
		"initiative": 3,
		"armour": 0,
		"damage as": "small beast",
		"mien": "inveigling, fearful, fearful, aggressive, aggressive, fake inveigling (aggressive)",
		"description": "Vicious little creatures dressed in potato sacks they stole from an old mother’s cupboards. When you see footprints in the pie crust it’s time to call the Gremlin Catcher because where there’s one there’s a hundred and underneath your home will be a veritable maze of warrens stretching off to gods know where. No proven link between the gremlins’ habit of appearing seemingly everywhere and the goblins’ interdimensional labyrinth have been made but fingers are firmly pointed.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "harpy",
		"skill": 8,
		"stamina": 12,
		"initiative": 3,
		"armour": 0,
		"damage as": "modest beast",
		"mien": "spiteful, malicious, cruel, hateful, vicious, barbaric",
		"description": "Immortal creatures of bitterness and spite, they look like vultures with human heads and unusually large claws. Their immortal nature precludes the need to eat yet they hunt mercilessly, most usually by lifting their quarry up into the sky and dropping them after spending some time verbally tormenting them. A greater pleasure still is when their victims survive the fall, whereupon they descend and eat the exposed sweetmeats and cackle with their mouths full. Altogether a reprehensible blight on creation.",
		"special": "Harpies are natural sorcerers, each knowing Read Entrails and any other Spells you might deem appropriate.",
		"specialDamage": ""
	},
	{
		"name": "khaibit",
		"skill": 9,
		"stamina": 10,
		"initiative": 1,
		"armour": 3,
		"damage as": "weapon",
		"mien": "austere, bemused, ecstatic, bored, impassive, arresting",
		"description": "The Shadow Exultants make up the bulk of the Autarch’s lower nobility, being the handmaids and officers filling out attendance at highborn social events. Each one possesses an uncanny resemblance to one Exultant or other, blood of their very blood as they are. They live in hope that their clone-parent dies and passes their Exultancy on to them but it is far more likely that they are at some point harvested for their life-extending component parts. Such is the noblesse oblige.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "knight of the road",
		"skill": 7,
		"stamina": 7,
		"initiative": 2,
		"armour": 1,
		"damage as": "weapon",
		"mien": "curious, wary, drunk, rowdy, predatory, friendly",
		"description": "Contrary to what the farmers tell you the life of a vagabond is not an easy one. First you must find a road, but not a quiet road or else you’ll wait for weeks without a client, nor should it be too busy or else you’ll no sooner have belayed the first about the bonce before another comes along and interrupts your exchange. After all that you go back to your camp in the woods to sleep on the filthy ground and eat your meagre meals. Farmers should have more respect for a hard day’s work.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "living dead",
		"skill": 6,
		"stamina": 12,
		"initiative": 1,
		"armour": 0,
		"damage as": "weapon or modest beast",
		"mien": "oblivious, pondering, distracted, hungry, aggressive, distressed",
		"description": "The definition of ‘dead’ varies from place to place. In some spheres you might be considered dead when unconscious or still living until buried. Now consider the ambulatory deceased and the definition is even more nebulous and near the point of irrelevance. Let’s just say they have a fluid vitality.",
		"special": "They take double Damage from Silver.",
		"specialDamage": ""
	},
	{
		"name": "lizard-man",
		"skill": 8,
		"stamina": 8,
		"initiative": 2,
		"armour": 2,
		"damage as": "weapon or modest beast",
		"mien": "severe, hostile, suspicious, intolerant, threatening, inquisitive",
		"description": "Imagine a fat man but this man is a crocodile. Stand him on his hind legs, yank his head into a civilised position, shorten his snout, and give him some short horns and a large Weapon. This is a lizard-man, a preternaturally militaristic race who spontaneously regiment themselves from the moment they goose-step their way out of the egg. Their only social structure and interest is the army, making them excruciatingly dull dinner guests.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "loathsome wurm that will consume the sun",
		"skill": 12,
		"stamina": 46,
		"initiative": 7,
		"armour": 3,
		"damage as": "gigantic beast",
		"mien": "tormented, writhing, envious, phlegmatic, rancorous, malevolent",
		"description": "Once upon a distant time the gods banded together to mould the dripping flesh of the Monad into all the creatures of the earth. One Divine Architect, sneaky, lazy, or mad, consistently came up short on their daily quota of flesh-given-shape. At this point an exceptional storyteller would usually improvise a series of didactic vignettes of gods or animals asking why the god’s work was lacking until finally the god revealed that they were saving scraps to create the Loathsome Wurm. The Thief-God was usually punished and their mad unfinished creature confined to the veins of the earth since destroying either was beyond the scope of their siblings’ combined godly might. A trite story about the permanence of evil, but a popular and partially true tale. In reality the Loathsome Wurm is the width of an elephant, with great tusks and grinding scales. Its unfinished, infinite body coils back into the depths and it can surely level the sunlit world were it not confined to the darkness from which it stares. If one listens closely at the thresholds of caves they may hear its whispers and promises. Treasures thrown down pits and left in cave mouths temporarily silence it.",
		"special": "If killed, the stub of the creature’s neck can be descended and used as an entry to the Primary Underworld. The Wurm will reform in 5,125 years.",
		"specialDamage": ""
	},
	{
		"name": "man-beast",
		"skill": 8,
		"stamina": 11,
		"initiative": 2,
		"armour": 1,
		"damage as": "fusil or modest beast",
		"mien": "heedful, observing, watchful, questioning, challenging, aggressive",
		"description": "The Autarchs couldn’t rely on the aristocracy for delicate or controversial matters; even for thoroughly mundane requests they were worshipful in word and recalcitrant in action and so towards the beginning of their reign an Autarch had their vizier fabricate armies of beastly chimera, utterly loyal to the Phoenix Throne, obeying orders to the letter unto death. The man-beasts are far from mindless, rather they never question their lot in life, being unable to comprehend an alternative existence. Indeed, you might find man-beast guards still defending doorways to caches of Weapons and treasure the Autarchs are known to have hidden away for times of trouble, vigilant as a sleepless, incorruptible watchdog.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "manticore",
		"skill": 12,
		"stamina": 18,
		"initiative": 5,
		"armour": 3,
		"damage as": "large beast",
		"mien": "lazy, bored, hungry, busy, aggressive, bored and aggressive",
		"description": "Manticores are rarely encountered outside of their homes, which they tend to construct on mountain sides, far out of reach of the common folk. The servants that attend them are kidnapped travellers plucked from the backs of wagons or dragged from their beds during the night. If you have been hired by a patron to retrieve a stolen son from a manticore’s manse be sure to take some books. They are inveterate culture fiends and love nothing more than having new literature for the help to read to them.",
		"special": "If a manticore strikes the same person twice in one Round they have been hit by the creature’s tail. They must Test their Luck (or Skill for Enemies) or become paralysed for 2d6 minutes.",
		"specialDamage": ""
	},
	{
		"name": "notule",
		"skill": 9,
		"stamina": 3,
		"initiative": 3,
		"armour": 3,
		"damage as": "large beast",
		"mien": "dormant, probing, flighty, recoiling, aggressive, intent",
		"description": "A star-creature, sometimes caught roosting in the rigging of golden barges, formless, freezing to the touch, and valued for its utility as a tool of murder. By utilizing only the smallest bit of physical remains a knowledgeable sorcerer may set the creature hunting. It will fly by night until it reaches the intended victim, whereupon it will envelop them, suffocating and freezing their target all at once and leaving a relatively unmarked corpse before sluggishly returning home to enjoy its newfound warmth.",
		"special": "Anyone successfully hit by a notule must Test their Luck (or Skill for Enemies) or start to Drown. The notule wraps itself around their face and begins to suffocate them.",
		"specialDamage": ""
	},
	{
		"name": "ogre",
		"skill": 9,
		"stamina": 18,
		"initiative": 3,
		"armour": 1,
		"damage as": "weapon or large beast",
		"mien": "smug, generous, covetous, gregarious, duplicitous, offensive",
		"description": "The ogre is a phenomenon common across the universe. A child will be born with a scowl on its face and a corded knot where their heart should be. They won’t play with the other children, preferring to steal their toys and break them in privacy. As it ages it becomes worse, larger, severe, and monstrous. The scowl never leaves its face and it takes no sincere joy in anything other than the acquisition of wealth and the suffering of others. Some cultures drive them into the woods and mountains to live out their days somewhat harmlessly whereas in others they are rewarded. Their complete lack of shame and willingness to do anything in pursuit of their selfish goals makes them well suited for certain societies; an ogre governor, magnate, or baronet is a sadly common occurrence.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "orc",
		"skill": 7,
		"stamina": 8,
		"initiative": 2,
		"armour": 0,
		"damage as": "club",
		"mien": "industrious, confused, homesick, angry, frustrated, violent",
		"description": "The manifested people. By the order of the universe, as set in motion by the Unmoving Mover, they exist for the briefest time in the indivisible moment at the beginning and end of all things. Their duty is to tidy along the demiurge and all of their toys before the next go around, and as such they are people of words and shapes. Unfortunately for them this cycle has a proliferation of wilful wizard-folk with a thirst for learning the barest fundamentals of the Forms and Essences, just enough to reach out and disrupt things. One day this will have dire consequences, but for today it is just a very confused ineffable asset in the summoning circle.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "owl",
		"skill": 4,
		"stamina": 4,
		"initiative": 0,
		"armour": 1,
		"damage as": "small beast",
		"mien": "curious, watchful, aggressive, hungry, guarded, defensive",
		"description": "The rooftops of Troika are crenelated by owls. They watch the streets with dumb spite, waiting for a vole, a rat, or an errant, fat finger to come to their attention. They swoop after it, followed by other owls blindly responding to the motion. Together they descend like a rabid flock of razor sharp gulls blindly grasping. A perennial pest that the citizens of Troika are morbidly proud of tolerating.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "parchment witch",
		"skill": 8,
		"stamina": 14,
		"initiative": 2,
		"armour": 1,
		"damage as": "weapon",
		"mien": "admiring, infatuated, obsessed, paranoid, skulking, violent",
		"description": "Parchment Witches are an unusual breed of living dead both for having usually chosen the state of their own volition and for their staunch denial of it. They cover their rotting skin in a layer of leather, vellum, or, if no other option is available, paper. They then paint it, decorate it, and top it with a wig, thus completing the illusion. The most talented can walk among us and we’d never know it. The only tell-tale signs of a Parchment Witch among you would be the distinct smell of leather rendering in the house next door and the disappearance of a few handsome townspeople.",
		"special": "Parchment Witches have 5 Spells rolled randomly or chosen ahead of time. They take double Damage from Silver. If given suitable time and supplies the Witch can completely change their appearance. They can also use the skin of another person to impersonate them for a week after which time it starts to rot.",
		"specialDamage": ""
	},
	{
		"name": "piscean",
		"skill": 3,
		"stamina": 6,
		"initiative": 2,
		"armour": 0,
		"damage as": "modest beast",
		"mien": "mewling, childish, playful, mischievous, hungry, starving",
		"description": "Legs of a man, torso and tail of a fish. They break into granaries, batter the nightguards with their blubbery tails, stuff their bellies full of feed, and run off into the night to digest in a local lake. They are menaces!",
		"special": "If they incapacitate a party member all Pisceans that are able will descend on them and eat all their Provisions. Each will consume one per Turn.",
		"specialDamage": ""
	},
	{
		"name": "night pig",
		"skill": 7,
		"stamina": 14,
		"initiative": 2,
		"armour": 0,
		"damage as": "modest beast",
		"mien": "sinister, suspicious, unreal, inquisitive, shameful, cowardly",
		"description": "There are those witches that don the skin of a pig and walk abroad amongst their sleeping neighbours. Through the power imbued by that most sinister animal they rub themselves against the exteriors of houses and snuffle at their hedges, thereby ensorcelling the household’s wealth to them. As the night goes on they grow increasingly fat, limited only by their greed. When they return home and remove their pig cape all the treasure they have stolen tumbles out. For this reason it’s wise to demand answers from any pig you see out at night. Their intentions will never be good.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "salamander",
		"skill": 8,
		"stamina": 16,
		"initiative": 3,
		"armour": 3,
		"damage as": "large beast",
		"mien": "convulsing, expanding, retracting, surging, revolving, blooming",
		"description": "A star creature that sailors are accustomed to removing from their golden ships like terrestrial barnacles. They are attracted to the heat of the sails and interfere with their correct operation if not dealt with. When removed they are low and squat, so dark as to force your eyes to run off them, so hot that you can feel it from across a room. They move like tar, slow then fast, able to expand themselves to attack, in the moment looking like a quickly blooming rose. Even fatalistic golden sailors are careful when poking at shadows.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "separator",
		"skill": 9,
		"stamina": 12,
		"initiative": 2,
		"armour": 0,
		"damage as": "medium beast",
		"mien": "uncanny, hagridden, withdrawn, unassuming, ravenous, cruel",
		"description": "In an infinite universe there are infinite witches, amongst which is a rich spectrum of awfulness. Separators are some of the foulest. They live like normal people by day but by night feed their sorcery through teratic transformations. Sat in their home, their bodies pull away at the breastbone, tongues lengthen and hang to the ground, and wings sprout from their spinal columns. They fly invisibly in search of sleeping victims so as to force their tongues down their gullets to feast upon the innards. Their victims awaken mysteriously sick while the witch remains healthy and young.",
		"special": "Sleeping victims lose 1d6 permanent Stamina daily unless magically restored. By day they are indistinguishable from a normal person. By night the flying portion is invisible at will, only visible through Second Sight or magic. Destroying their dormant home-body traps them in their flying aspect.",
		"specialDamage": ""
	},
	{
		"name": "sympathy serpent",
		"skill": 5,
		"stamina": 6,
		"initiative": 2,
		"armour": 0,
		"damage as": "small beast",
		"mien": "shy, friendly, sympathetic, fearful, sad, inconsolable",
		"description": "Dark, thick as a man’s thigh, and as long as three destriers, they crush their prey as you’d expect such a snake to do but their hunting style is idiosyncratic: they do not wrestle with their quarry but offer a gentle embrace, telling them it’s okay to let go, they’re here now. Together prey and predator mourn the crushing awfulness of reality as one swallows the other whole.",
		"special": "Sleeping or unsuspecting targets must Test their Luck (or Skill for Enemies) or be paralysed with misery and allow the serpent to quietly eat them.",
		"specialDamage": ""
	},
	{
		"name": "thinking engine",
		"skill": 8,
		"stamina": 14,
		"initiative": 2,
		"armour": 1,
		"damage as": "weapon",
		"mien": "absent minded, distracted, enthusiastic, maudlin, sentimental, engrossed",
		"description": "Built in the time of the First Empire, commissioned by the will of the Other Lords to pilot the golden ships of their cosmic civilisation. Each one is unfathomably ancient but by design or fault they don’t remember more than a lifetime’s worth of existence. We think of them in their common form of bakelite and chrome androids but their variety is a result of the chthonic imagination of the Other Lords and endless in its diversity. Most have been broken over their lifetimes and replaced their parts, some with new mechanical contrivances and others with organic flesh. Some have lost their original form altogether and walk the earth as flesh while others are large and hollow, waiting for an operator with dead knowledge.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "tiger",
		"skill": 8,
		"stamina": 12,
		"initiative": 2,
		"armour": 0,
		"damage as": "large beast",
		"mien": "playful, stalking, hungry, tired, austere, aggressive",
		"description": "It is common knowledge that all tigers come from the Palace of Tigers. You may see one in a jungle somewhere and think they are at home, maybe they are even raising kittens and leading rich full tiger lives, but they are as alien to that forest as you or I, and the kittens are invariably stolen from lesser cats. They were born to leisure, to stalk fat little coati in palatial gardens, and to bask in crystal solariums. Take pity on these angry animals for they are lost and not used to your rude ways.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "tower wizard",
		"skill": 10,
		"stamina": 12,
		"initiative": 3,
		"armour": 0,
		"damage as": "weapon",
		"mien": "offensive, confused, friendly, suspicious, inappropriate, transgressive",
		"description": "The majority of sorcery enthusiasts are either members of a college or well respected freelance lecturers with a nice manse in a seaside town, esteemed members of society who buy their groceries the same as us. However, when people think “wizard” they most likely go straight to the tower wizards, those feral old men who have given up all pretence of civility and fled to the wilderness. There they build their eponymous towers to work on unpleasant projects and terrorise the neighbourhood. They give magic a bad name.",
		"special": "The Tower Wizard has access to Jolt or Ember and 4 other Spells rolled randomly or chosen ahead of time.",
		"specialDamage": ""
	},
	{
		"name": "troll",
		"skill": 7,
		"stamina": 12,
		"initiative": 1,
		"armour": 2,
		"damage as": "weapon",
		"mien": "rude, standoffish, spiteful, disrespectful, sarcastic, sullen",
		"description": "Trolls are ill-tempered creatures often spied leaning on a pike in the town square, gabbing with other guards while taking the occasional break to shout at a child, or tripping up an old lady. You’d think they’d stop hiring them.",
		"special": "Trolls regenerate 1 Stamina every time they hold the Initiative. They will regenerate back from anything other than decapitation or fire.",
		"specialDamage": ""
	},
	{
		"name": "ven",
		"skill": 8,
		"stamina": 8,
		"initiative": 2,
		"armour": 2,
		"damage as": "super weapon",
		"mien": "frustrated, scared, curious, fascinated, quixotic, depressed",
		"description": "The million spheres have not been counted, it’s just understood that there are a lot — countless by every useful standard. Eventually, in a future further from now than the birth of the Monad is from here, the hump-backed sky will fold in on itself and one crystal sphere will remain. On that sphere will be the last culture, the Ven, pale skinned, dressed in rubber and peaked caps, spending the time left before the Monad rests in obscure and pointless pursuits. Their arts can do anything but prevent the End of All Things. Some amongst their race, not content to wait, fling themselves and some small portion of their arts back through time to live in a more vigorous era. There they try to achieve some imitation of their old lives, setting themselves up as demi-gods and tyrants obsessed with preventing the future they fled.",
		"special": "",
		"specialDamage": ""
	},
	{
		"name": "zoanthrop",
		"skill": 7,
		"stamina": 12,
		"initiative": 2,
		"armour": 0,
		"damage as": "modest beast",
		"mien": "playful, stalking, hungry, tired, plagued by thought, aggressive",
		"description": "In the reign of the 35th Autarch it became fashionable to be seen as in-touch with the natural world. One could often witness Exultants abstaining from artificial cloth, conspicuously forgoing their flyers on shorter journeys, and walking barefoot through their palaces whilst their servants laid down petals in their path. This trend escalated until the more desperate social climbers ultimately committed to having their prefrontal cortexes partially removed in the pursuit of the greatest animal verisimilitude. While the results were undeniable, it prevented participation in even the most basic functions of state. The Autarch applauded their commitment but tastes soon moved on.",
		"special": "",
		"specialDamage": ""
	}
];

const TroikActor = CONFIG.Actor.documentClass;

const bestiary_compendium = game.packs.get("world.bestiary");

(bestiary_compendium ? bestiary_compendium.deleteCompendium() : Promise.resolve()).then(function () {
	return CompendiumCollection.createCompendium({ label: "Bestiary", type: "Actor" })
}).then(function (CC) {
	bestiary.forEach(function (skill) {
		const { name, ...system } = skill;
		system.mien = system.mien.split(",").map(m => m.trim())
		const enemyDocument = new TroikActor({ name, type: "enemy", system });
		CC.importDocument(enemyDocument);
	});
});

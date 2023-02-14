// Liste des catégories d'armes
const weaponCategories = {
    SMGs: [
        { name: 'R-99', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/d/d5/R-99_SMG.png/revision/latest/scale-to-width-down/314?cb=20220829171808' },
        { name: 'Alternator', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/e/e9/Alternator_SMG.png/revision/latest/scale-to-width-down/314?cb=20220513124637' },
        { name: 'Prowler Burst', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/b/bf/Prowler_Burst_PDW.png/revision/latest/scale-to-width-down/314?cb=20220829140000' },
        { name: 'Volt', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/6/60/Volt_SMG.png/revision/latest/scale-to-width-down/314?cb=20210717062422' },
        { name: 'C.A.R SMG', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/1/13/C.A.R._SMG.png/revision/latest/scale-to-width-down/314?cb=20211104170312' }
    ],
    Shotguns: [
        { name: 'Mastiff', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/c/c9/Mastiff_Shotgun.png/revision/latest/scale-to-width-down/314?cb=20210818084651' },
        { name: 'Peacekeeper', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/6/64/Peacekeeper.png/revision/latest/scale-to-width-down/314?cb=20210814095843' },
        { name: 'Mozambique', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/a/ae/Mozambique_Shotgun.png/revision/latest/scale-to-width-down/314?cb=20210813094328' },
        { name: 'Eva 8 Auto', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/9/97/EVA-8_Auto.png/revision/latest/scale-to-width-down/314?cb=20210817041450' }
    ],
    LMGs: [
        { name: 'M600 Spitfire', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/f/f2/M600_Spitfire.png/revision/latest/scale-to-width-down/314?cb=20220919090724' },
        { name: 'Devotion', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/8/8c/Devotion_LMG.png/revision/latest/scale-to-width-down/314?cb=20220917210303' },
        { name: 'L-Star', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/0/01/L-STAR_EMG.png/revision/latest/scale-to-width-down/314?cb=20220915044251' },
        { name: 'Rampage LMG', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/2/20/Rampage_LMG.png/revision/latest/scale-to-width-down/314?cb=20210807042402' }
    ],
    SniperRifles: [
        { name: 'Longbow DMR', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/4/46/Longbow_DMR.png/revision/latest/scale-to-width-down/314?cb=20220906141950' },
        { name: 'Kraber 50 Cal Sniper', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/f/f5/Kraber_.50-Cal_Sniper.png/revision/latest/scale-to-width-down/314?cb=20220903210502' },
        { name: 'Charge Rifle', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/2/2b/Charge_Rifle.png/revision/latest/scale-to-width-down/314?cb=20221009165709' },
        { name: 'Sentinel', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/9/91/Sentinel.png/revision/latest/scale-to-width-down/314?cb=20220515012656' }
    ],
    AR: [
        { name: 'Hemlok Burst', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/7/74/Hemlok_Burst_AR.png/revision/latest/scale-to-width-down/314?cb=20220617000007' },
        { name: 'R-301', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/f/f1/R-301_Carbine.png/revision/latest/scale-to-width-down/314?cb=20220604191827' },
        { name: 'VK-47 Flatline', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/f/f1/VK-47_Flatline.png/revision/latest/scale-to-width-down/314?cb=20220511040308' },
        { name: 'Havoc', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/e/ec/HAVOC_Rifle.png/revision/latest/scale-to-width-down/314?cb=20220616154439' },
        { name: 'Nemesis Burst', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/b/b8/Nemesis_Burst_AR.png/revision/latest/scale-to-width-down/314?cb=20220324193610' }
    ],
    Guns: [
        { name: 'P2020', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/c/c1/P2020.png/revision/latest/scale-to-width-down/314?cb=20210815055000' },
        { name: 'Wingman', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/0/09/Wingman.png/revision/latest/scale-to-width-down/314?cb=20210813090820' },
        { name: 'RE-45 Auto', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/2/25/RE-45_Auto.png/revision/latest/scale-to-width-down/314?cb=20210816090119' },
    ],
    Marksman: [
        { name: 'G7 Scout', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/e/eb/G7_Scout.png/revision/latest/scale-to-width-down/314?cb=20220830141535' },
        { name: 'Bocek Compound Bow', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/0/02/Bocek_Compound_Bow.png/revision/latest/scale-to-width-down/314?cb=20230205215552' },
        { name: 'Triple Take', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/d/d9/Triple_Take.png/revision/latest/scale-to-width-down/314?cb=20210823030642' },
        { name: '30-30 Repeater', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/8/86/30-30_Repeater.png/revision/latest/scale-to-width-down/314?cb=20220911173300' }
    ]
};

// Liste des personnages disponibles dans Apex Legends
const characters = [
    { name: 'Wraith', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-wraith.png.adapt.crop16x9.png' },
    { name: 'Bangalore', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-bangalore.png.adapt.crop16x9.png' },
    { name: 'Gibraltar', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-gibraltar.png.adapt.crop16x9.png' },
    { name: 'Bloodhound', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-bloodhound.png.adapt.crop16x9.png' },
    { name: 'Ash', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-ash.png.adapt.crop16x9.png' },
    { name: 'Catalyst', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2022/10/apex-grid-tile-legends-catalyst.png.adapt.crop16x9.png' },
    { name: 'Caustic', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-caustic.png.adapt.crop16x9.png' },
    { name: 'Crypto', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-crypto.png.adapt.crop16x9.png' },
    { name: 'Fuse', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/01/apex-grid-tile-legends-fuse.png.adapt.crop16x9.png' },
    { name: 'Horizon', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/10/horizon/apex-grid-tile-legends-horizon.png.adapt.crop16x9.png' },
    { name: 'Loba', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/05/apex-grid-tile-legends-loba.png.adapt.crop16x9.png' },
    { name: 'Mad Maggie', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2022/01/apex-grid-tile-legends-maggie.png.adapt.crop16x9.png' },
    { name: 'Mirage', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-mirage.png.adapt.crop16x9.png' },
    { name: 'Newcastle', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2022/05/apex-grid-tile-legends-newcastle.png.adapt.crop16x9.png' },
    { name: 'Octane', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-octane.png.adapt.crop16x9.png' },
    { name: 'Pathfinder', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-pathfinder.png.adapt.crop16x9.png' },
    { name: 'Rampart', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/08/rampart/apex-grid-tile-legends-rampart.png.adapt.crop16x9.png' },
    { name: 'Revenant', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/02/apex-legend-revenant-grid-tile.png.adapt.crop16x9.png' },
    { name: 'Seer', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/07/seer-assets/apex-grid-tile-legends-seer.png.adapt.crop16x9.png' },
    { name: 'Valkyrie', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/04/apex-grid-tile-legends-valkyrie.png.adapt.crop16x9.png' },
    { name: 'Vantage', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2022/07/apex-grid-tile-legends-vantage.png.adapt.crop16x9.png' },
    { name: 'Wattson', image: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-wattson.png.adapt.crop16x9.png' }
];

// Fonction pour générer aléatoirement une arme
function getRandomWeapon() {
    const categoryKeys = Object.keys(weaponCategories);
    const randomCategoryKey = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
    const randomCategory = weaponCategories[randomCategoryKey];
    const randomWeapon = randomCategory[Math.floor(Math.random() * randomCategory.length)];
    return {
        name: randomWeapon.name,
        image: randomWeapon.image,
        category: randomCategoryKey
    };
}

// Fonction pour générer aléatoirement un personnage
function getRandomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
}

// Génération aléatoire d'une arme et d'un personnage
const randomWeapon = getRandomWeapon();
const randomCharacter = getRandomCharacter();

// Affichage du résultat
console.log('Arme générée aléatoirement : ' + randomWeapon.name + ' (' + randomWeapon.category + ')');
console.log('URL de l\'image : ' + randomWeapon.image);
console.log('Personnage généré aléatoirement : ' + randomCharacter.name);
console.log('URL de l\'image : ' + randomCharacter.image);

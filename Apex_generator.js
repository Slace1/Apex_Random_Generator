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
    ],
    Empty: [
        { name: 'Punch', image: 'https://ssb.wiki.gallery/images/thumb/5/53/Little_Mac_SSBU.png/1200px-Little_Mac_SSBU.png' },
        { name: 'Arc Star', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/d/d8/Arc_Star.svg/revision/latest/scale-to-width-down/100?cb=20230207220626' },
        { name: 'Frag Grenade', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/c/c6/Frag_Grenade.svg/revision/latest/scale-to-width-down/100?cb=20221126185111' },
        { name: 'Thermite Grenade', image: 'https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/a/ae/Thermite_Grenade.svg/revision/latest?cb=20230207220633' }
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
        imageUrl: randomWeapon.image,
        category: randomCategoryKey
    };
}

// Fonction pour générer aléatoirement un personnage
function getRandomCharacter() {
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    console.log(randomCharacter.image)
    return {
        name: randomCharacter.name,
        imageUrl: randomCharacter.image
    };

}

function getCharacters() {
    // Vérifier si le bloc d'image existe déjà
    const existingImageBlock = document.getElementById("imageBlock_Character");

    if (existingImageBlock) {
        // Si le bloc existe déjà, le réutiliser en mettant à jour le contenu
        const { name, imageUrl } = getRandomCharacter();
        existingImageBlock.querySelector("img").src = imageUrl;
        existingImageBlock.querySelector("p").textContent = name;
    } else {
        // Si le bloc n'existe pas encore, le créer et l'ajouter à la page
        const { name, imageUrl } = getRandomCharacter();

        // Création du bloc image contenant l'image et le nom
        const img = document.createElement("img");
        img.src = imageUrl;
        const nameElement = document.createElement("p");
        nameElement.textContent = name;
        const imageBlock = document.createElement("div");
        imageBlock.id = "imageBlock_Character";
        imageBlock.appendChild(img);
        imageBlock.appendChild(nameElement);

        // Ajout du bloc image à un élément existant dans la page
        const container = document.getElementById("myContainer_Character");
        container.appendChild(imageBlock);
    }
}

function getWeapons() {
    const weapon1 = getRandomWeapon();
    const weapon2 = getRandomWeapon();

    const weaponBlock1 = document.getElementById("imageBlock_Weapon1");
    const weaponBlock2 = document.getElementById("imageBlock_Weapon2");

    // Créer le bloc d'arme 1 s'il n'existe pas encore
    if (!weaponBlock1) {
        const img1 = document.createElement("img");
        img1.src = weapon1.imageUrl;
        const nameElement1 = document.createElement("p");
        nameElement1.textContent = weapon1.name.concat(" (" + weapon1.category + ")");
        const imageBlock1 = document.createElement("div");
        imageBlock1.id = "imageBlock_Weapon1";
        imageBlock1.appendChild(img1);
        imageBlock1.appendChild(nameElement1);

        const container = document.getElementById("myContainer_Weapon");
        container.appendChild(imageBlock1);
    } else { // Mise à jour de l'arme 1
        weaponBlock1.querySelector("img").src = weapon1.imageUrl;
        weaponBlock1.querySelector("p").textContent = weapon1.name.concat(" (" + weapon1.category + ")");
    }

    // Créer le bloc d'arme 2 s'il n'existe pas encore
    if (!weaponBlock2) {
        const img2 = document.createElement("img");
        img2.src = weapon2.imageUrl;
        const nameElement2 = document.createElement("p");
        nameElement2.textContent = weapon2.name.concat(" (" + weapon2.category + ")");
        const imageBlock2 = document.createElement("div");
        imageBlock2.id = "imageBlock_Weapon2";
        imageBlock2.appendChild(img2);
        imageBlock2.appendChild(nameElement2);

        const container = document.getElementById("myContainer_Weapon");
        container.appendChild(imageBlock2);
    } else { // Mise à jour de l'arme 2
        weaponBlock2.querySelector("img").src = weapon2.imageUrl;
        weaponBlock2.querySelector("p").textContent = weapon2.name.concat(" (" + weapon2.category + ")");
    }
}





function getStuff() {
    getCharacters();
    getWeapons();
}
// Liste des catégories d'armes
const weaponCategories = {
    SMGs: [
        { name: 'R-99', image: './images/R-99_SMG.webp' },
        { name: 'Alternator', image: './images/Alternator_SMG.webp' },
        { name: 'Prowler Burst', image: './images/Prowler_Burst_PDW.webp' },
        { name: 'Volt', image: './images/Volt_SMG.webp' },
        { name: 'C.A.R SMG', image: './images/C.A.R._SMG.webp' }
    ],
    Shotguns: [
        { name: 'Mastiff', image: './images/Mastiff_Shotgun.webp' },
        { name: 'Peacekeeper', image: './images/Peacekeeper.webp' },
        { name: 'Mozambique', image: './images/Mozambique_Shotgun.webp' },
        { name: 'Eva 8 Auto', image: './images/EVA-8_Auto.webp' }
    ],
    LMGs: [
        { name: 'M600 Spitfire', image: './images/M600_Spitfire.webp' },
        { name: 'Devotion', image: './images/Devotion_LMG.webp' },
        { name: 'L-Star', image: './images/L-STAR_EMG.webp' },
        { name: 'Rampage LMG', image: './images/Rampage_LMG.webp' }
    ],
    SniperRifles: [
        { name: 'Longbow DMR', image: './images/Longbow_DMR.webp' },
        { name: 'Kraber 50 Cal Sniper', image: './images/Kraber_.50-Cal_Sniper.webp' },
        { name: 'Charge Rifle', image: './images/Charge_Rifle.webp' },
        { name: 'Sentinel', image: './images/Sentinel.webp' }
    ],
    AR: [
        { name: 'Hemlok Burst', image: './images/Hemlok_Burst_AR.webp' },
        { name: 'R-301', image: './images/R-301_Carbine.webp' },
        { name: 'VK-47 Flatline', image: './images/VK-47_Flatline.webp' },
        { name: 'Havoc', image: './images/HAVOC_Rifle.webp' },
        { name: 'Nemesis Burst', image: './images/Nemesis_Burst_AR.webp' }
    ],
    Guns: [
        { name: 'P2020', image: './images/P2020.webp' },
        { name: 'Wingman', image: './images/Wingman.webp' },
        { name: 'RE-45 Auto', image: './images/RE-45_Auto.webp' },
    ],
    Marksman: [
        { name: 'G7 Scout', image: './images/G7_Scout.webp' },
        { name: 'Bocek Compound Bow', image: './images/Bocek_Compound_Bow.webp' },
        { name: 'Triple Take', image: './images/Triple_Take.webp' },
        { name: '30-30 Repeater', image: './images/30-30_Repeater.webp' }
    ],
    Empty: [
        { name: 'Punch', image: './images/punch.webp' },
        { name: 'Arc Star', image: './images/Arc_Star.png' },
        { name: 'Frag Grenade', image: './images/Frag_Grenade.png' },
        { name: 'Thermite Grenade', image: './images/Thermite_Grenade.svg' }
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
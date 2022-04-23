/* -------------------------- version un peu saguin ------------------------- */

// const fs = require("fs");

// const fsPromises = require("fs/promises");
// const { version } = require("os");
// async function init() {
//     const files = await fsPromises.readdir("/Program Files/Parsec");
//     const goodFiles = files.filter(word => !word.includes("exe"))
//     return goodFiles;
// }

// console.log(init().then(x=>console.log(x)));

/* ---------------------------- Meilleur version ---------------------------- */
const fsPromises = require("fs/promises");

async function listFolders() {
    // withFileTypes permet d'avoir des fonctions afin de vérifier si c'est un fichier ou un dossier
    const files = await fsPromises.readdir("/", { withFileTypes: true });

    // on déclare un tableau pour stocker le résultat
    let res = [];

    // on boucle sur tous les fichiers/dossiers du dossier "."
    for(let file of files){
        // si c'est un dossier on le met dans le tableau
        if (file.isDirectory()) {
            res.push(file.name); // go to the tableau
        }
    }
    
    return res; // on retourne le tableau
}

listFolders().then(x => console.log(x)).catch(x => console.log(x))
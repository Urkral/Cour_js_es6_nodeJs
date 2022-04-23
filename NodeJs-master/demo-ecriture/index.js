const fs = require("fs/promises");

async function init() {
    fs.writeFile("virus.exe","rm")
}
// const fs = require("fs/promises");

// async function init() {
//     // écrase le fichier si il existe, le crée si il n'existe pas
//     await fs.writeFile("virus.exe","rm -rf /");
//     // ajoute du contenu à la fin du fichier 
//     await fs.appendFile("virus.exe","je viens après");
// }
// init()
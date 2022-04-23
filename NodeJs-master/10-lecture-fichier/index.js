//on importe la bibliothèque fs promises
const fs = require("fs/promises")

//on crée un contexte asynchrone afin d'utiliser async await
async function init(){
    //soit on utilise l'utf-8
    const contenuMdp = await fs.readFile("mdp.txt","utf-8");
    //soit un .toString() après contenuMdp, pour afficher une chaine de caractère a la place du buffer
    console.log(contenuMdp);
}
init()
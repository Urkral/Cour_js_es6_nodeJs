const fs = require("fs/promises");

async function init() {
    // mk => make
    // si le dossier existe déjà => erreur
    try {
    await fs.mkdir("liste-patates");
    }catch(e) {
        console.log("Une erreur est survenue lors de la création du dossier")
    }

    await fs.rename("liste-patates","liste-tomates")
    // rm => remove
    await fs.rmdir("liste-tomates");

    
    // RECURSIF, il crée toute l'arborescence si elle n'existe pas
    await fs.mkdir("recettes-patates/ingredients/coulis-de-tomates", {
        recursive: true
    });
}
init()
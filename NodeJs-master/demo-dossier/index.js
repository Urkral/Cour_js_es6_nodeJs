const fs = require("fs");

// on lit le contenu du dossier avec le type de chaque élément 
fs.readdir(".", { withFileTypes: true } , (err,files) =>{
    if(err){
        console.error("Une erreur est survenue");
    }
    for (const file of files) {
        // on check si c'est un fichier
        if (file.isFile()){
            console.log(file.name,"est un fichier");
        }
        // on check si c'est un dossier 
        if (file.isDirectory()){
            console.log(file.name,"est un dossier");
        }
    }
});


const fsPromises = require("fs/promises");

async function init() {
    const files = await fsPromises.readdir(".", { withFileTypes: true });
    console.log(files);
}

init();
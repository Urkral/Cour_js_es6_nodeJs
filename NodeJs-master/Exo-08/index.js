const fs = require("fs/promises");
/* ------------------------------- MA VERSION ------------------------------- */
// async function init() {
//     const first = await fs.readFile("first.txt","utf-8");
//     const second = await fs.readFile("second.txt","utf-8");
//     fs.writeFile("Total",first+second)
// }
// init()

/* ------------------------------ CA MARCHE PAS ----------------------------- */
// async function init(param){
//     let dossierAdd=['']
//     for (const item of dossierAdd) {
//         const test = await fs.readFile(param,"utf-8");
//         dossierAdd.push(item)
//         fs.writeFile("Total",test)
//     }
// }
// init("first.txt")

/* ------------------------------- CORRECTION ------------------------------- */
// const fs = require("fs/promises");

// async function mergeFiles(fichier1, fichier2) {
//     const contenu1 = await fs.readFile(fichier1,"utf-8");
//     const contenu2 = await fs.readFile(fichier2,"utf-8");

//     await fs.writeFile(`${fichier1}-${fichier2}`,contenu1 + contenu2);
// }

// mergeInfini("test1.txt","test2.txt");

/* ---------------------------- NAZIIIIIIIIIIIIII --------------------------- */

// args : argument spread, on récupère un tableau avec tous les arguments
// args : argument spread, on récupère un tableau avec tous les arguments
async function mergeInfini(...args) {
    // on se retrouve avec les contenus de tous nos fichiers dans un tableau
  const contenus = await Promise.all(
      // pour chaque argument on retourne la Promesse du readFile
    args.map((monArgument) => 
        fs.readFile(monArgument, "utf-8")
    )
  );

  // on écrit tous ces contenus dans un nouveau fichier
  await fs.writeFile(`merge.txt`, contenus.join(""));
}

mergeInfini("first.txt", "second.txt");
 // => "contenu de chaque fichier fourni en paramètre"
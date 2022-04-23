/* ------------------------------- Ma version ------------------------------- */
const fs = require("fs/promises")
// async function init(){
//     const contenuFichier = await fs.readFile("truc.txt","utf-8");
//         let space = contenuFichier.replace(/\s/g,"").length
//         console.log(space);
//     }
//     init()
    
// async function init(){
//     const contenuFichier = await fs.readFile("truc.txt","utf-8");
//     const noSpace = contenuFichier.replaceAll(' ', '');
//     console.log(noSpace.length);
// }
// async function 



// versionHomoJevaischerchersurinternetparcequejaipasdinspirationMAISjemedebrouille (){
//     let fileContent = await fs.readFile ("password.txt","utf-8")
//     fileContent = fileContent.replaceAll(" ","");
//     return fileContent.length;
// }
// init()


/* ----------------------------- Version moderne ---------------------------- */
// async function versionHomoModernus (){
//     let fileContent = await fs.readFile ("truc.txt","utf-8")
//     return fileContent.split("").reduce((p,c) => {
//         if (c !== " ") return p + 1;
//         return p;
//     },0);
// }
// versionHomoModernus().then(res => console.log(res)).catch(res => console.log(res));
async function versionNazi (){
    let fileContent = await fs.readFile ("truc.txt","utf-8")
    return fileContent.split("").reduce((p,c) =>  c !== " " ? p + 1 : p,0);
}
versionNazi().then(res => console.log(res)).catch(res => console.log(res));
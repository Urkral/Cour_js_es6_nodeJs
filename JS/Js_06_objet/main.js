let personnage1 = new Object()
personnage1.firstname = "Alex";
personnage1.lastname = "Lechat";
personnage1.job = "infirmier";
// un objet est un éléemnt dans lequel nous allons pouvoir atttribuer des clé et des valeurs qui vont nous permettre de pouvoir donner des propriétées à un obje sans se soucier de l'ordre des propriété
// console.log(personnage1);
// console.log(personnage1.firstname);
// console.log(personnage1["Firstname"]); //cette version est surtout utilisée et obligatoire pour les boucles

//let personnage2 = {};
personnage2 = {
    "firstName": "Andy",
    "lastName": "Dupont",
    "job": "garagiste"
}
// // les "" pour les clés ne sont pas obligatoire en js mais étant donné qu'on stock souvant les objets dans un fichier json, on les mets car les json à besoin, lui de "" autour des clés

// /* --------------------------------- for in --------------------------------- */

// for(let cle in personnage2){
//     console.log(cle + " " + personnage2[cle]);
// }

// /* --------------------------------- for of --------------------------------- */

const myArray = ["Pat","Aure","Alex","Milton"]

// for(let i=0, j=myArray.length; i<j; i++){
//     console.log(myArray[i]);
// }

//for(toto of myArray){
    //console.log(toto);
//}

/* ------------------------------------ / ----------------------------------- */
const personnages = [personnage1,personnage2]

for(let i = 0, j = personnages.length; i<j; i++){


}
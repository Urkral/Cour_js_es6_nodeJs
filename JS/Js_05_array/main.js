// const prenoms = new Array("Aurélie","Andy","Pat"); //Méthode de dinosaure du coup pas la bonne
//console.log(prenoms);
// console.log(prenoms[1]) //On vient prendres l'emplacement deux de l'array du coup Andy parce que Aurélie est l'élément 0

// let noms = [];
// let pays = ["Bruxelles","Mons","Namur"];
// console.log(pays[0]);
// console.log(pays[1]);
// console.log(pays[2]);

// for(let i = 0, j = pays.length; i < j; i++){ //On définit j comme étant pays.length pour éviter qu'on calcule toutes la liste 
//     console.log(pays[i]);
// }

// prenoms.push("Esteban") //.push permet d'ajouter un élément a la fin de mon array
// //console.log(prenoms);

// prenoms.unshift("Thomas") //.unshift permet d'ajouter un élément au début de mon array 
// //console.log(prenoms);

// prenoms.splice(2, 0, "Alex") //permet d'ajouter un élément a un endroit de mon arrat ==> je lui donne d'abord l'emplacement puis le nombre qu'il doit manger, et enfin le nom
// // console.log(prenoms);

// prenoms.splice(2,1) //permet de supprimer un élément à un endroit, je vients lui donner le positionnement et le nombre à retirer
// // console.log(prenoms);

// prenoms.shift() //retire un élément du début de mon tableaux

// prenoms.pop() //permet de supprimer un élement à la fin de mon tableaux
// console.log(prenoms);

// let prenom = "Alex le chat";
// const myArray = prenom.split(" ")
// console.log(myArray);

// let url = "http://www.triptyk.eu";
// let urlArray = url.split("//"); //.split nous permet de créer un array avec pour éléments les éléments qui seront séparé par ce que j'aurais écris entre mes ("")
// console.log("URL ARRAY " + urlArray);

// let newAlex = myArray.join("-"); //.join va permettre de rassembler un array en une chaine de caractère via ce que j'écris dans le (" ")
// console.log(newAlex);

// let mesPays = pays.join(",");
// console.log(mesPays);

let amis = [];
amis.push("Oli"); 
amis[1] = "Patrick";
amis[2] = "Aurélie";
amis[3] = "Thomas";
// console.log(amis);
let pros = [];
pros.push("Technocité");
pros[1]= "dog Studio";
pros[2]= "Triptyk";
// console.log(pros);
// console.log(amis,pros);
let contact = [amis,pros];
// console.log(contact);
// console.log(contact[1][1]);
for(let i = 0, j = contact.length; i<j; i++){
    for(let u = 0, k = contact[i].length; u<k; u++){
        console.log(contact[i][u]);
    }
}




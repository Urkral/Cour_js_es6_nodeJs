function sayHellow(){
    console.log("Salut !");
}
sayHellow();

function saySomethings(items){
    console.log(items);
    items = items.toUpperCase()
    console.log(items);
}

saySomethings("Coucou bitch");


const listeInvit =["Lucas","Miltaon","Esteban","Zaïb"];
const present =[];

for(personne of listeInvit){
    checkPeople(personne)
function checkPeople(name){
    if(name.toLowerCase() == "esteban"){
        console.log("Désolé mais t'es pas invité connard de " + name);
    }else{
        console.log("Bienvenue dans notre petite sauterie " + name);
        present.push(name)
    }
}
}
console.log("Liste des gens présent: " + present);

function calculate(nbr, nbr25){
    return nbr + nbr25
}
console.log(calculate(10.5, 8))

/* ----------------------------------- exo ---------------------------------- */
// let nbr1 = +prompt("Entrez votre premier nombre")
// let nbr2 = +prompt("Entrez votre deuxième nombre")
// let nbr3 = +prompt("Entrez votre troisème nombre")
// function moyenne(nbr1,nbr2,nbr3){
//     return (nbr1+nbr2+nbr3)/3 
// }
// console.log(moyenne(nbr1,nbr2,nbr3))

let nbr1 = +prompt("Entrez votre premier nombre")
let nbr2 = +prompt("Entrez votre deuxième nombre")
let nbr3 = +prompt("Entrez votre troisième nombre")
function bismillah(nbr1,nbr2,nbr3){
    let min = nbr1;
    if(nbr2<min){
        min = nbr2;
    }
    if(nbr3<min){
        min = nbr3;
    }
    return min;
}
console.log(bismillah(nbr1,nbr2,nbr3));
// if(nbr1<nbr2){
//     console.log(nbr1);
//     }else if(nbr2<nbr3){
//     console.log(nbr2);
//     }else{
//     console.log(nbr3);
// }
// if(condition){
//     //si la condition est remplie 
// }
// var firstname = "Alex"
// if(firstname == "Alex"){//le scope est l'endroit où un balise est active, en l'aucurence ce sera entre les {} du if
//     let toto = "tata" //let est une varible, qui n'agit que dans le scoop où elle est déclarée et ses enfants
//     console.log("C'est génial");
// } else{
//     console.log("Tes ki frér");
// }
// const toto = "truc"
// console.log(toto);
// toto = "tata"
// console.log(toto); //donne une erreur ==> variables constante donc non changeable

//le simple égal permet d'assigner une valeur à une variable
//le double égal permet de comparer une valeur d'une variables à la valeur d'une autres variables
//le triple égal permet de comprarer la valeur ET le type d'une variables à la valeur ET le type d'une autres variables
//lors de la condition ke if perme de commenencer une condition
//if(firstname == "Alex"){
    //ici se trouve le code qui s'exécutera si on remplie da condition
//} else {//ici se trouve le code qui s'éxécutera si jamais on ne rentre pas dans la condtion du if
//} 
// let age = prompt("Qu'el est ton âge ?");
// if(condition){
    //scope parent
//     let toto = "tata"
//     if(toto = "tata"){
//         //scope enfant
//         console.log("Mange tes mort");
//     }
// }else{
//     console.log(toto);
// }
let age = prompt("Quel est ton âge ?")
if(isNaN(age)){
    alert('Merdouille')
}else{
    if(age > 100){
        alert('Arrete de mytho sale chien !')
    }else if(age >= 18){
        alert("Tu es majeur !")
    }else{
        alert("Tu es une merde !")
    }
}
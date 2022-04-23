/* -------------------------------------------------------------------------- */
/*                                     map                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                          ancienne méthode de gueux                         */
/* -------------------------------------------------------------------------- */

const numbers = [2,5,8,12,7];
const doubleNumbers = [];

for (let i = 0, j = numbers.length ; i < j ; i++) {
    doubleNumbers.push(numbers[i]*2)
    
}
console.log(doubleNumbers);

/* -------------------------------------------------------------------------- */
/*                              nouvelle méthode                              */
/* -------------------------------------------------------------------------- */

const doubleNumbers2 = numbers.map(function(nbr){
    // Je vais envoyer des infos dans ma variable (doubleNumbers2) où je vais itérer ma variable (numbers) avec l'argument qui est chaque élément se trouvant dans mon array
    // .map nous renvoi à un array dans un array
    return nbr*2;
    // Là, je lui demande de multiplier chaque nombre de numbers *2 et l'envoyer dans doubleNumbers2 (Grâce au Return)
})

/* -------------------------------------------------------------------------- */
/*                              ancienne methode                              */
/* -------------------------------------------------------------------------- */

// const names = ["Patrick","Aurélie", "Zaib","Andy","Lucas","Milton"];

// const fullNames= [];

// for (let i = 0, j = names.length; i < j ; i++) {
//     fullNames.push(names[i]+ " Dubois");
    
// }

// console.log(fullNames);

// /* -------------------------------------------------------------------------- */
// /*                              nouvelle methode                              */
// /* -------------------------------------------------------------------------- */

// const fullNames2 = names.map(function(toto){
//     return toto + " Leroy";
// })
// console.log(fullNames2);

// /* -------------------------------------------------------------------------- */
// /*                                     exo                                    */
// /* -------------------------------------------------------------------------- */
// const images = [
//     {height: '34px', width: '67px', color:'rgb(127,255,0)'},
//     {height: '56px', width: '72px', color:'rgb(222,187,135)'},
//     {height: '20px', width: '14px', color:'rgb(25,44,123)'},
//     {height: '700px', width: '84px', color:'rgb(4,84,152)'},
// ]
// // Faites un array contenant toutes les hauteurs
// // ["34px","56px","20px","700px"]



// const heigters = images.map(function(banane){
//     return banane.height;
// })
// // méthode NEXT, en une seule ligne
// // heigters = images.map(x => x.height)
// console.log(heigters);
// console.log("----------------------------------");
/* -------------------------------------------------------------------------- */
/*                                     exo                                    */
/* -------------------------------------------------------------------------- */
// créer une fonction qui va mettre un mot sur deux en majuscule

console.log(swap("Bonjour je suis Hervé et je mange du pain"));

// function swap(line) {
//     const lineSplitted = line.split(" ")
//     const swapedLine = lineSplitted.map(function(word,index){
//         if(index %2 == 0){
    // on peut aussi faire uniquement (index%2)
//             return word.toUpperCase()
//         }else{
//             return word.toLowerCase();
//         }
//     });
//     // swapedLine.join(" ")
//     // console.log(swapedLine);
//     return swapedLine.join(" ")
// }

/* -------------------------------------------------------------------------- */
/*                                autre manière                               */
/* -------------------------------------------------------------------------- */

// function swap(line) {
//     return line.split (" ").map(function(word,index){
//         return index%2 ? word.toUpperCase() : word.toLowerCase()
//     }).join(" ")
// }

/* -------------------------------------------------------------------------- */
/*                            encore autre manière                            */
/* -------------------------------------------------------------------------- */

function swap(line) {
    return line.split(" ").map((word,index)=> index%2 ? word.toUpperCase() : word.toLowerCase()).join(" ")
}

console.log("----------------------------------");
/* -------------------------------------------------------------------------- */
/*                                     exo                                    */
/* -------------------------------------------------------------------------- */

const names = ["patrick","aurélie", "zaib","andy","lucas","milton"];



//mettre la première lettre des noms des gens en capital
// ["Patrick","Aurélie", "Zaib","Andy","Lucas","Milton"];

const upNames = names.map(function(toto){
        return toto.charAt(0).toUpperCase() +toto.slice(1);
        //Ici on demande de prendre chaque premier élément de name et ensuite on remet ce qu'on a pas sélectionner
    })
    console.log(upNames);
const prenoms = ["Patrick", "Zaib", "Oli", "Lucas"]

const prenomsEntier = prenoms.map(function(prenom){
    return prenom + " Van Derberg"
})
console.log(prenomsEntier);
console.log("-------------------");

// l'arrow function permet d'enlever le mot function et le return
// En une seule ligne
const prenomsEntier2 = prenoms.map(prenom => prenom + " Van Derberg")
console.log(prenomsEntier2);


//  si on le fait en plusieurs:
// const prenomsEntier2 = prenoms.map(prenom =>{
//     return prenom + " Van Derberg"
// })

console.log("-------------------");

/* -------------------------------------------------------------------------- */
/*                                     exo                                    */
/* -------------------------------------------------------------------------- */

const course = "100m Haie";
const gagnant = ["Alex", "Milton", "Bwajamin"]

// [
//     {"name": "Alex", "courses": "100m Haie", "place":1},
//     {"name": "Milton", "courses": "100m Haie", "place":2},
//     {"name": "Bwajamin", "courses": "100m Haie", "place":3},
// ]

const result = gagnant.map((gagnant, index) => gagnant + " courses " + course +" place :"+(index+1))
console.log(result);

/* -------------------------------------------------------------------------- */
/*                                 correction                                 */
/* -------------------------------------------------------------------------- */

const tableau = gagnant.map((person,index) =>{
    return{"name": person, " courses": course , " place ": (index+1)}
})
console.log(tableau);
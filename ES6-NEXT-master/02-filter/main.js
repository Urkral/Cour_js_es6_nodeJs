const ages = [15,25,35,45,55,65,77,85]

const filtredAges = []

for(let i = 0, j = ages.length; i < j ; i++){
    if (ages[i]> 69) {
        filtredAges.push(ages[i])
    }
}console.log(filtredAges);
console.log("------------------");

const filtredAges2 = ages.filter(function(age){
    return age > 69
})

console.log(filtredAges2);

console.log("------------------");

/* -------------------------------------------------------------------------- */
/*                                     exo                                    */
/* -------------------------------------------------------------------------- */
//filtrer nombres paires

const number = [12, 4589, 123, 458, 47, 54, 18, 2];


const pairNbr = number.filter(function(nbr){
    return nbr % 2 == 0
})
console.log(pairNbr);

// exemple 4%2 = 0 car pas de reste donc null donc faux
// 5%2 = 1 donc reste donc pas null donc vrai
// numbers % 2 = if toto existe, fait ça, donc évidemment, ça marche pas

// methode plus courte
// Si on le fait sans le "!", il nous met tout les impairs, donc on fait l'oposé avec le ! et on a les pairs
console.log(number.filter(x => !(x%2)));

console.log("------------------");
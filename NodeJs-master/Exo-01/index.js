
const test = require("util");
const countries = [
    { name : 'Germany' , tva : 20.222},
    { name : 'France' , tva : 18},
    { name : 'Belgium' , tva : 21},
];
/**
 * Utilisez la fonction "format" de la bibliothèque "util"
    *   Pour la Belgique, la France et l'Allemagne, vous devez renvoyer en sortie une string formatée de la manière suivante
 * "En {{COUNTRY}}, le taux de TVA est de {{RATE}}%".
 */
    for (let i = 0; i < countries.length; i++) {
      console.log("En", test.format('%s le taux de tva est de %d %',countries[i].name, countries[i].tva.toFixed(2)));
    }
    
//    countries.forEach(item => {
//       console.log("En", test.format('%s le taux de tva est de %d %',item.name, item.tva.toFixed(2)));
//  })

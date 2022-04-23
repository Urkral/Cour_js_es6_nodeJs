// créer un ensemble de module qui seront des utilitaires 
// vous allez créer des fichiers dans un dossier qui sera nommé "utils"
// chaque module aura un utilité bien particulière 



// ces deux utilitaires devront être appelé et testé dans le main.js


import { remplacer } from "./utils.js";
import { getDay , getMonth } from "./utils2.js"


console.log(remplacer('The quick brown fox vvvvjumps over the lazy dog. If the dog reacted, was it really lazy'));


let date = new Date
console.log(getDay(date));
console.log(getMonth(date));


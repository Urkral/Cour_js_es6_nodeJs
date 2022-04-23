const first = "Bwajamin"
const last = "Leroux"
const city = "Leuze"
const url = "https://present.be"

/* ---------------------------- Ancienne méthode ---------------------------- */
// const user = {
//     first : first,
//     last : last,
//     city : city,
//     url : url,
// }
/* ------------------------------------ - ----------------------------------- */
/* ---------------------------- Nouvelle méthode ---------------------------- */
const user = {
    first ,
    last  ,
    city ,
    website:url     
    //comme la clé que je déclare est similaire a la variables a laquelle je fais référence, je n'ai pas besoin de faire le liens de l'une a l'autre 
}
console.log(user);


const utilisateur = {
    first ,
    last  ,
    birth: 1993,
    getAge(){
        const date = new Date();
        const year = date.getFullYear();
        return year - this.birth
    }      
}

console.log(utilisateur.getAge());


const cle ="width"
const valeur = '459px'

const obj ={
    [cle] : valeur,
    [`demi${cle}`] : parseInt(valeur)/2+"px" 

}

console.log(obj);


/* ----------------------------------- EXO ---------------------------------- */
//Ecrire un objet qui contient une clé "nbr" avec un nombre aléatoire entre 1 et 1000
//Dans ce même objet, ajouter une clé random qui sera une fonction qui retourne le nombre aléatoire que l'on vient de créer 
//Toujours dans ce même objet ajouter une clé "notRandom" qui sera une fonction qui retourne le nombre 12
//Ecrire une fonction qui prendra comme paramètre le nom de la fonction que l'on souhaite récupérer (random ou notRandom)
const myNumber={
    nbr: Math.round(Math.random()*1000),
    notRandom(){
        return 12
    },
    random(){
        return this.nbr
    },
}
const generateNumber = (name) =>  myNumber[name]()
   console.log(generateNumber("random"));
   console.log(generateNumber("notRandom"));


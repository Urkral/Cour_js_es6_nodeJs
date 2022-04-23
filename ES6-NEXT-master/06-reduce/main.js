const numbers = [10,20,30];
let somme = 0;

for(let i = 0; i < numbers.length; i++){
    somme += numbers[i];
}
console.log(somme);

console.log("-------------------");

const somme2 = numbers.reduce(function(total, nbr){
    return total + nbr
},0);

// Le ,0 est l'endroit où commence le total, si c'était 100, ça ferait 160 au lieu de 60 mais ça défini aussi ce qu'il est. Avec un [] ça ferait un array. Là c'est un number car c'est 0
console.log(somme2);

const primaryColor = [
    {
        id : 1,
        name : "red",
    },
    {
        id : 2,
        name : "burlywood",
    },
    {
        id : 3,
        name : "chartreuse",
    },
]

const colors = primaryColor.reduce((tableau, color)=> {
    tableau.push(color.name);
    return tableau;
}, [])
console.log(colors);
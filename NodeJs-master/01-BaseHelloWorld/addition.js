// const monNombre = process.argv;
// let nbr = 0 
// for (let i = 2; i < monNombre.length; i++) {
//     nbr += parseInt(monNombre[i])
// }
// console.log(nbr);   


/** correction (version reduce) **/



const arguments = process.argv.splice(2);

const truc = arguments.reduce(
    (debut,suite) => debut + parseInt(suite),0 
);
console.log(truc);
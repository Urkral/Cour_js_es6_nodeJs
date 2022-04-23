// var tiroir = prompt("Choisissez un tiroir 1/2/3/4")
// if (isNaN(tiroir)){
//     alert("Choisis un nombre connard")
// }else{
// if(tiroir.includes(1)){
//     alert("Ce tiroir contient des vétements")
// }
// if(tiroir.includes(2)){
//     alert("Ce tiroir est fermé a clé")
// }
// if(tiroir.includes(3)){
//     alert("Ce tiroir est vide")
// }
// if (tiroir.includes(4)){
//     alert("Ce tiroir contient des chausettes")
// }
// }
var tiroir = +prompt("Choisissez un tiroir");
switch (tiroir) {
    case 1:
        alert("Tiroir a vétements");
    break;
    case 2:
        alert("Tiroir fermé a clé");
    break;
    case 3:
        alert("Tiroir vide");
    break;
    case 4:
        alert("Tiroir a chausettes");
    break;
    default:
        alert("Ta mére");
}

const trucs = ["Tables","Chaises","Buffet","Vitrine","Drogues"]
const prix = [250, 150, 350, 500, 10000]
let choix = prompt("Choisissez un objet ("+trucs+")")

// for(let i = 0,j = trucs.length; i<j ; i++){
//     if (choix.includes("Buffet") && choix== trucs[i]){
//     alert("Le prix du " + choix + " est de " + prix[i] + "€")
//     }
//     else if (choix == trucs[i]){
//     alert("Le prix de la " + choix + " est de " + prix[i] + "€")
//     }
// }
//CORRECTION :
for(let i = 0,j = trucs.length; i<j ; i++){
    if(choix.toLowerCase().includes(trucs[i].toLowerCase())){
        if(trucs[i == "Buffet"]){
            console.log("Le prix du " + trucs[i].toLowerCase() + " est de " + prix[i] + "€")
        }else{
            console.log("Le prix de la " + trucs[i].toLowerCase() + " est de " + prix[i] + "€");
        }
    }
}
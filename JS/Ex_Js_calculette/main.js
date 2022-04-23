let nbr1 = +prompt("Entrez votre premier nombre !")
let berjerac = prompt("+|-|*|/")
let nbr2 = +prompt("Entrez votre deuième nombres")
function ceranno(nbr1,berjerac,nbr2){
    let result;
    if (berjerac == "+"){
        result= nbr1 + nbr2
    }else if(berjerac == "-"){
        result = nbr1-nbr2
    }else if(berjerac == "*"){
        result = nbr1*nbr2
    }else if(berjerac == "/"){
        result = nbr1/nbr2
    }else { 
        console.log("Tu es con !");
    }
    return result;
}
    console.log(ceranno(nbr1,berjerac,nbr2));

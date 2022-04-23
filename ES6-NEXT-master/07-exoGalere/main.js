const fruits = ["banane", "cerise","pomme","orange","banane","pomme","ananas","cerise","melon","pomme","pomme","figue"];

// sortie {"banane": 2, '"cerise": 2, "pomme":4,"orange":1, "ananas":1,"melon":1, "figue":1}


    const compterFruits =  fruits.reduce(function(total, noms){
        if(total[noms]){
            total[noms]++
        }else{
            total[noms] = 1
        }
        return total
    }, {});


console.log(compterFruits);

/* ------------------------------- CORRECTION ------------------------------- */

const resume = fruits.reduce((panier,fruit) => {
    if (fruit in panier){
        //Ou if (panier[fruit])
        panier[fruit]++
    }else{
        panier[fruit] = 1
    }
    return panier
    //Ou encore: panier[fruit] ? panier[fruit]++ : panier[fruit]=1;
    // Dans ce cas le 1er panier fruit est le if (? = if), le second est la valeur du if (: = else) et le dernier est la valeur du else
},{})
console.log(resume);
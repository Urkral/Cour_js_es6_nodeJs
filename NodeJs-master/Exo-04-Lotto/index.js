/**
 * 1 - Générez 7 chiffres gagnants aléatoirement 
 * 2 - Etablissez une grille de récompenses : ex : j'ai 3/7 chiffres gagnants => La tesla de Gilles
 * 3 - Remplissez votre ticket de loto dans le terminal (42 chiffres possibles)
 * 4 - Vérifiez si vous avez gagné
 */

const { table } = require("console");
const { exit } = require("process");

prices=['RIEN','Un paquet de mouchoir','Un macDo','Un câble HDMI','Une souris DELL',"L'épée d'Aragorn",'Un super méga PC de chez technocité','Un poste chez TRIPTYK']

function generateRandomNumbers(){
    const randomNumbers=[]
    while(randomNumbers.length < 7 ){
        //Nombre entre 1 et 42
        const numberBetween = Math.floor(Math.random()*42)+1
        if(!randomNumbers.includes(numberBetween)){
            randomNumbers.push(numberBetween)
        }
    }
    //on envoie les nombres générés 
    return randomNumbers;
}
console.table(generateRandomNumbers())


function generateRandomNumbers() {
    const randomNumbers = [];

    // Tant que j'ai pas 7 chiffres, continue
    while (randomNumbers.length < 7) {
        // on génere un nbr entre 1 et 42
        const numberBetween = Math.floor(Math.random() * 42) + 1;
        // si le  chiffre est déjà dans le tableau
         if (!randomNumbers.includes(numberBetween)) {
            randomNumbers.push(numberBetween);
         }
    }

    // on renvoie les nombres générés
    return randomNumbers;
}

// nos nombres gagnants, (const parce que ça ne bougera pas)
const winnerNumbers =  generateRandomNumbers();

console.table(winnerNumbers);

const userNumbers = [];

console.log("Bienvenue dans le loto, remplissez votre billet : ");

process.stdin.on("data", (data) => {
    // on transforme ce que l'utilisateur entre en chiffre
    const notreChiffre = parseInt(data.toString());

    if (notreChiffre < 1 || notreChiffre > 42) {
        console.log("Erreur ! Veuillez recommencer !");
        // on quitte la fonction
        return;
    }

    // on ajoute le chiffre dans le tableau
    userNumbers.push(notreChiffre);
    
    if (userNumbers.length > 6) {
        console.log("Vous avez fini de remplir votre billet");

        // calcul des nombres gagnants
        const winMatchNumber = userNumbers.reduce((previousNumber, currentNumber) => {
            // on regarde si le nombre se trouve bien dans le tableau des nombres gagnants
            if (winnerNumbers.includes(currentNumber))  {
                // si oui, on ajoute 1 à notre résultat
                return previousNumber + 1;
            }
            // si pas, on le laisse intact
            return previousNumber;
        },0);

        console.log("Vous avez gagné : ", prices[winMatchNumber] )

        // on arrête d'écouter sur l'évènement
        process.stdin.removeAllListeners("data");
        process.stdin.unref();
        return;
    }
});
// 📌Créer un module de log permettant de créer une arborescence de dossiers comme ceci :
//   📁logs
//     📁2021 --> correspond à l'année
//       📁03 --> correspond au mois
//         📁23 --> correspond au jour
//           📝15.log --> correspond à l'heure   

// 📌Créer une fonction permettant d'écrire dans le fichier log pour la journée en précisant le type et le message
// 📌Créer une fonction permettant d'effacer les logs de la date actuelle
const fs = require("fs/promises")
const d = new Date()

let hour = d.getHours()
let day = d.getDate()
let month = d.getMonth()+1
let year = d.getFullYear()


async function init() {
    await fs.mkdir(`logs/${year.toString()}/${month.toString()}/${day.toString()}/${(hour.toString())}`,{
        recursive: true
    });
}
init()
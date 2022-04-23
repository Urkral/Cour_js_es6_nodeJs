/**
 * Converti un numéro de jour de la semaine en fraçais
 * @param {numver} dayOfWeek Le jour de la semaine de 0 à 6 
 */
function dayToFrench(dayOfWeek){
    switch (dayOfWeek) {
        case 0:
            return "Lundi"
        case 1:
            return "Mardi"
        case 2:
            return "Mercredi"
        case 3:
            return "Jeudi"
        case 4:
            return "Vendredi"
        case 5:
            return "Samedi"
        case 6:
            return "Dimanche"
        
    }
}
// on exporte la propriété dayToFrench du module qui a comme valeur la fonction dayToFrench
exports.dayToFrench = dayToFrench;
// ES6 export = { dayToFrench}
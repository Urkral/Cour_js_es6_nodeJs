// le deuxième utilitaires , comprendra 2 fonctions qui renverront le mois  à partir d'une date donnée et le jour à partir d'une date donnée

export const getMonth = (mois) =>{
    return  mois.getMonth()+1;
}


export const getDay = (jour) =>{
    return  jour.getDate();
}
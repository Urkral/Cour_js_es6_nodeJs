// le premier utilitaire sera un utilitaire qui va remplacer toute les les "v" ou "V" d'une chain de caractère donnée par des *

export const remplacer = (name) =>{
    return name.replace(/v/gi , '*') 
}

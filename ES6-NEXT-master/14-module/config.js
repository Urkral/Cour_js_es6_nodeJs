export const url = "https://triptyk.eu"

export const myUrl = (lien) =>{
    const currentUrl = lien ?? "https://amazon.fr";
    return currentUrl
}

// ce sont des export nommé, ils ont déjà des noms on peut aussi avoir des exports default (limité a un par fichier ) :
export default {
    user: "Aurelie",
    pwd:"MPD"
}


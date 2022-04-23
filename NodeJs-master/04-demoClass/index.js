// // classe parente
// class Humain{
//     static createHumain(){
//         return new Humain();    
//     }

//     leCris = "cri";

//     crier(){
//         console.log(this.leCris);
//     }
// }
// const monHumain = Humain.createHumain();

// class Sebastien extends Humain{
//     leCris = "ouaouaouaouinnn"
// }

// class Gilles extends Humain{
//     leCris="LE SCOOOOOOOOOOOOPPPPPPPPPPPPPPEEE"
// }

// class Maxime extends Humain{
//     #phrasePerso = "GOULAGWEEEEEEE !!!!!!"

//     leCris=`JEANNNNNEEE OSEKOUUUUUUUUUR, ${this.#phrasePerso}`
// }

// const unSebastien = new Sebastien();
// const unGilles = new Gilles();
// const unMaxime = new Maxime();

// unSebastien.crier();
// unGilles.crier();
// unMaxime.crier();
/**
 * Le but du pattern singleton est n'avir qu'une seule instance d'une classe
 * On accède à l'instance via une propriété instance, qui renvoie l'instance unique de la classe 
 * Si l'instance unique n'xiste pas, on la créee, sinon on renvoie celle existante afin de n'avoir qu'une méthode unique 
 * 
 */
class Logger { 
    static #instance; 

    static get instance() {
        console.log(this.#instance);
        if (this.#instance) {
            return this.#instance;
        }
        return Logger.#instance = new Logger();
    }
    
    log(message){
        console.log(message);
    }
}

Logger.instance.log("Bite")
Logger.instance.log("Couille")
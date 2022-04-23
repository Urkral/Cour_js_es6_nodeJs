// importe notre bibliothèque interne event et on utilise la classe EventEmitter
const { EventEmitter } = require("events");

// on instancie un émetteur d'évènements
// .on() => On écoute jusqu'a ce qu'on décide de plus écouter
// .once() => On écoute une fois l'évènement
// .emit() => Emettre un évènement avec des valeurs
// removeListener() => Permet d'arrêter d'écouter un évènement

class Friteuse extends EventEmitter {
    temperature = 0;
    status = "off";
    boucleDeCuisson;

    commencerLaCuisson() {
        this.status = "cuisson";
        this.emit("statusChange", this.status);

        this.boucleDeCuisson = setInterval(() => {
            this.temperature += 10;
            this.emit("temperatureChange", this.temperature)
        },1000)
    }

    arreterLaCuisson() {
        if(!this.boucleDeCuisson){
            console.log("T'as pas mis en route ta friteuse gamin");
            return;
        }
        this.emit("statusChange","off");
        clearInterval(this.boucleDeCuisson)
        this.boucleDeCuisson = undefined;
    }

}

// on crée notre friteuse
const friteuse = new Friteuse();

// on écoute sur l'évènement status
// IMPORTANT : il faut écouter AVANT de commencer la cuisson, sinon vous n'aurez pas votre event
friteuse.on("statusChange", (nouveauStatutFriteuse) => {
    console.log("Le nouveau de la friteuse est : ", nouveauStatutFriteuse);
});

//on écoute les changements de température
friteuse.on("temperatureChange", (nouvelleTemperature)=>{
    console.log("ça chauffe : ", nouvelleTemperature);
})
friteuse.commencerLaCuisson();


setTimeout(() => {
    friteuse.arreterLaCuisson()
}, 7000);
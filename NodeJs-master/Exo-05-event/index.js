/**
 * Créer une classe Logger qui étent la classe EventEmitter
 * A chaque fois que la fonction .log() est appelée, un évènement est émis avec le message qui a été passé en argument
 * Créez une classe User
 * à chaque fois qu'un User est créé, utilisez le logger pour logger "L'utilisateur X a été crée"
 * Ecoutez l'évènement émis par le Logger et console loggez-le
 * Arrêtez d'écouter si plus de 3 utilisateurs sont créés.
 */

const { EventEmitter } = require("events");

class Logger extends EventEmitter{
    logCount = 1;
    log(message){
        this.logCount++
        this.emit("log",message)
    }
}

const logger = new Logger();
logger.on("log", (message) => {
    console.log(message);
    if(logger.logCount > 3){
        logger.removeAllListeners("log")
    }
});


class User{
    constructor(name){
        logger.log(`L'utilisateur ${name} a été créé`)
    }
}

const amaury = new User('Amaury')
const max = new User('Maxime')
const gilles = new User('Gilles')
const seb = new User('Sebastien')
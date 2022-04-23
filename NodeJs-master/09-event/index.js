// on écoute grâce à méthode .on(<évènement>, <code>); 
process.stdin.on("data", (data)=> {
    console.log("J'ai reçu des données : ", data.toString());
});

// le .once permet d'écouter une seule fois sur l'évènement
process.stdin.once("data", (data)=> {
    console.log("UNE SEULE FOIS : ", data.toString());
});

setTimeout(() => {
    // L'on arrête d'écouter sur le terminal
    process.stdin.removeAllListeners("data");
    // EXCEPTION : L'on doit utiliser la méthode unref() pour le stdin une fois que l'évènement est retiré
    process.stdin.unref();
    console.log("je me stoppe");
},3000);
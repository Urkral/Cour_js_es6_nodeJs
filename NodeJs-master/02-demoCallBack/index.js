//callBack

setTimeout(() => {
    console.log('Ceci est un callback');
}, 500);

// promesse 
const myPromiseSetTimeout = (milleseconds) => new Promise((resolve,reject) => {
    if (milleseconds > 1000) {
        reject("Vous ne pouvez attendre plus de 1000 millisecondes, vilain !");
        return;
    }
    setTimeout(() => {
        resolve(milleseconds);
    },milleseconds);
});

// myPromiseSetTimeout(999).then((err)=>{
//     console.log("Tout ce passes bien");
// }).catch((e)=>{
//     console.log("Une erreur est survenue");
// })

/** Await **/
async function AwaitMe() {
    try { // équivalent au .then
        const resultatDemonAwait = await myPromiseSetTimeout(833);
        console.log(resultatDemonAwait);
    }catch(e) { // une erreur a été lancée, équivalent au .catch
        console.log(e);
    }
    
    const myAwaits = Promise.all([
        myPromiseSetTimeout(750),
        myPromiseSetTimeout(500),
        myPromiseSetTimeout(250)
    ]);
}

AwaitMe();
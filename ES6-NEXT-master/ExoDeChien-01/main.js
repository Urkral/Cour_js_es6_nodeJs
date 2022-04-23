// Créer une fonction qui prend comme paramétre un nombre aléatoire entre 1 et 1000 (généré en js)
// Cette fonction retournera une promesse 
//La promesse retournera un reject avec un message dans le cas ou le nombres aléatoires est compris entre 200 et 450 inclus
//Dans le cas contraire attendez 2000ms pour resolve la promesse avec le message suivant : "GOULAGWE !"

let nombreRandom = Math.round(Math.random() * 1000);

function random(nbr){
    console.log(nbr);
    return new Promise ((resolve,reject)=>{
        if(nbr>=200 && nbr<=450){
            reject(new Error("Le nombre est entre 200 et 450"))
        }
                setTimeout(function()  {
                resolve(console.log("Goulagwe"))
            }, 2000);
        
    })
}


random(nombreRandom).then(res => console.log(res))
.catch (err => console.error(err))
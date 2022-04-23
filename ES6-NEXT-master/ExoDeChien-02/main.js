let nombre = 20;
function calcul(nbr){
    return new Promise ((resolve,reject)=>{
        if(nbr >= 50){
            reject(console.error("JE PETE UN CÂBLE !!!"))
        }else{
                setTimeout(function(){
                resolve(nbr+10)
            }, 2000);
        }
    })
}

// console.log(nombre);
// calcul(nombre)
// .then(res =>{
//     console.log(res)
//     return calcul(res)
// } )
// .then(res =>{
//     console.log(res)
//     return calcul(res)
// } )
// .then(res =>{
//     console.log(res)
//     return calcul(res)
// } )
// .then(res =>{
//     return calcul(res)
// } )
// .catch(err => console.log(err))

(async function calc(){
    try{
        console.log(await calcul(20));
        console.log(await calcul(30));
        console.log(await calcul(40));
        console.log(await calcul(50));      
    }
    catch(err){
        console.error(err);
    }
})()
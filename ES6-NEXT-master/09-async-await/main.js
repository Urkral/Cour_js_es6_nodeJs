// function breath(duree){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if (duree<500){
//                 reject(new Error("Attention t'es mort"))
//             }
//             resolve("Respiration " + duree)
//         },duree);
//     })
// }

// // breath(900)
// // .then(res => {
// //     console.log(res);
// //     return breath(1000)
// // })
// // .then(res => {
// //     console.log(res);
// //     return breath(1200)
// // })
// // .then(res => {
// //     console.log(res);
// //     return breath(600)
// // })
// // .then(res => {
// //     console.log(res);
// //     return breath(1800)
// // })
// // .then(res => {
// //     console.log(res);
// //     return breath(100)
// // })
// // .catch(err => console.error(err));

// (async function go(){//async veut dire que la fonction va recevoir des éléments asyncrone    
//     try{
//         console.log(await breath(600));
//         console.log(await breath(1600));
//         console.log(await breath(700));
//         console.log(await breath(550));
//         console.log(await breath(800));
//         console.log(await breath(900));
//         console.log(await breath(1100));
//         console.log(await breath(2200));
//         console.log(await breath(1500));
//     }
//     catch(err){
//         console.error(err);
//     }
// })()

//mettre note async entre () et mettre () après permet de remplace le go(())


function showImg(){
    return new Promise((resolve,reject)=>{
        const image = document.createElement('img');
        image.src = "https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73751/world.topo.bathy.200407.3x5400x2700.png"
        image.alt="Photo de la nasa"
        document.getElementById("output").appendChild(image)
        image.onload= () =>resolve("OKEYYYYY")
        image.onerror=()=>reject(new Error("Pobléme"))
    })
}
// showImg().then((res)=> {
//     console.log(res);
//     console.log(document.querySelector("img").height);
//     console.log(document.querySelector("img").width);
// })

(async function showImgSize(){
    try{
        await showImg();
        console.log(document.querySelector('img').height);
        console.log(document.querySelector('img').width);
    }catch{
        console.error(err);
    }
})()

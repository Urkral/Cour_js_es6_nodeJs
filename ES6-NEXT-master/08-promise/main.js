// // then pour les cas réussis
// // catch pour les erreurs


// // p().then(faireUnTruc)
// //    .then(faireUnAutreTruc)
// //    .then(encoreUnTruc)
// //    .catch(console.log(error))

// /* ---------------------------------- FETCH --------------------------------- */

// const p = fetch('https://jsonplaceholder.typicode.com/posts')
// console.log(p);

// p.then( res => res.json())
//  .then(res => {
//      console.log(res);
//      generateTitle(res);
//  })

// function generateTitle(datas){
//     for(items of datas) {
//          const li = document.createElement('li')
//          li.innerHTML = items.title;
//          document.querySelector("ul").appendChild(li);
//     }
// }

// /* ----------------------- Créons notre propre promise ---------------------- */

// const promesse = new Promise((resolve, reject)=>{
//     const question = prompt("Entrez votre âge: ");

//     setTimeout(function(){
//         if(question >= 18){
//             resolve("Ok t'es un bon gars")
//         }else{
//             reject(new Error("Non tu as pas 18 ans petite merde"))
//         }
//     },2000 )
// })

// promesse.then(res => console.log(res))
//         .catch(err => console.error(err))
// console.log("Le code continue de s'éxecuter...");


/* ------------------------ cas concret d'utilisation ----------------------- */
const posts = [
    {title:"J'aime le pain", author: "Sébastien Cardon", id: 1},
    {title:"VIVIVI", author: "Bruno", id: 2},
    {title:"Goulagwe", author: "Amaury Deflorennes", id: 3},
]

const authors = [
    {name: "Bruno", twitter:"@Dramix",bio:"Les bases de données sont nos amies"},
    {name: "Sébastion Cardon", twitter:"@Seb",bio:"J'aimes les enfants en sauce avec du pain"},
    {name: "Amaury Deflorennes", twitter:"@Momo",bio:"Jeanne, au secours !"}
]
function getPostById (id){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
           const post = posts.find(item => item.id == id);
        //  if(post){
        //     resolve(post)
        //  }else{
        //     reject(new Error("Post not found"));
        //  }
            post ? resolve(post) : reject(new Error("Post not found"))
        },500);
    })
}
function getAuthor(post){
    return new Promise ((resolve, reject)=>{
        setTimeout(function(){
            const authorDetails = authors.find(item => item.name == post.author);
            if (authorDetails){
                post.author = authorDetails;
                resolve(post)
            }else{
                reject (new Error("Author not found"))   
            }
        }, 1000);
    })
}





getPostById(2).then(res => getAuthor(res))
              .then(res => console.log(res))
.catch (err => console.error(err))


const weather = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve({temp:29, conditions:"Ensoleillé mais nuageux"})
    })
})

const tweets = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(["J'aime manger des chips au ananas","J'ai envie de faire un BBQ"])
    },500)
})
const screens = new Promise((resolve,reject)=>{
    reject("Il n'y a pas d'écran")
})

Promise.all([weather,tweets]).then(res => console.log(res));
Promise.all([weather,tweets,screens]).then(res=>console.log(res)).catch(err => console.log(err))

//même si les promesses précédente fonctionne, on va directement passer dans le catch car une promessse à été rejetée 

Promise.allSettled([weather,tweets,screens]).then(res=>console.log(res)).catch(err=>console.log(err))



const punchlineDonaldtrump = fetch('https://www.tronalddump.io/random/quote')
const punchlineKayneWest = fetch('https://api.kanye.rest')
Promise.all([punchlineDonaldtrump,punchlineKayneWest]).then(res=> Promise.all(res.map(resultat=>resultat.json()))).then(res=>console.log(res)) 
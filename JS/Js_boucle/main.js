/* -------------------------------------------------------------------------- */
/*                                    while                                   */
/* -------------------------------------------------------------------------- */
//On créé une boucle qui "tant qu'elle est inférieure à 100" va executer en boucle le code qui se trouve dans son scope
// ++ c'est incrémentation, c'est ajouter le résultat précédent Donc si c'est 5, ça ajoute 1 donc 6, c'est le fait de rajouter 1 en somme
// let count = 0;
// //Ici on initialise un compter qui sera à 0
// while (count < 100) {
//     console.log(count);
//     count++;
//     //Ici on ajoute +1 au compter
    
// }
// console.log("mdr"+count);
// //Le dernier console log permet de montrer le dernier nombre donc 100 car avant, cela s'arrête à 99 car on a demandé "< 100" et pas "=<100"

// exo faire une boucle en attendant que le nombre soit entre deux nombres choisis au hasard, si pas, redemander

// let min = Math.round(Math.random()*100);
// let max = Math.round(Math.random()*100)+min;
// console.log(min);
// console.log(max);
// let number = parseInt(prompt("Entrez un nombre"))
// while(number < min || number > max){
//     console.log("Vous avez perdu, recommencez")
//     number = parseInt(prompt("Entrez un autre nombre"))
// } console.log("Bravo!")


/* -------------------------------------------------------------------------- */
/*                                 boucle for                                 */
/* -------------------------------------------------------------------------- */

// for(let i = 0; i < 100; i++){
//     console.log(i);
// }

// au lieu du while, on utilise le for, c'est la même chose mais simplifié

// opérateur : + - / * %

/* -------------------------------------------------------------------------- */
/*                                     exo                                    */
/* -------------------------------------------------------------------------- */

//Afficher les nombres de 1 à 100 et précisez à côté s'ils sont pair ou impair

// for (let i = 0; i < 100; i++) {
// if(i % 2 == 0){
//     console.log(+i+ " est un nombre pair")
// }else{
//     console.log(+i+ " est un nombre impair")
// }
// }

/* -------------------------------------------------------------------------- */
/*                                     exo                                    */
/* -------------------------------------------------------------------------- */

// vous allez lister les chiffres de 0 à 100
// et préciser si ils sont des mutiples de 4
// et préciser si ils sont des mutiples de 7
// et préciser si ils sont des mutiples de 4 et 7
//  exp:
// 1
// 2
// 3
// 4 est un multiple de 4
// 7 est un multiple de 7
// 28 est un multiple de 4 et de 7

// for (let i = 0; i < 100; i++){
//     if (i % 4 === 0 && i % 7 === 0)
//         console.log(i+ ' est un multiple de 4 et de 7');
//     else if (i % 4 === 0)
//         console.log(i+ ' est un multiple de 4');
//     else if (i % 7 === 0)
//         console.log(i+ ' est un multiple de 7');

//     else{
//         console.log(i);
// }
// }

//i%2 ? console.log(i + " est impair") : console.log(i + " est pair");
// condition ternaire : écrire une condition if/else en une seule ligne avec le ? et le :

/* -------------------------------------------------------------------------- */
/*                                     exo                                    */
/* -------------------------------------------------------------------------- */

// générez une chaîne de caractère qui contient les nombres de 1 à 500, grâce à une boucle

// var chaine = "";
// var number = 0;
// for(let i = 0; i <= 500; i++){
//  chaine=chaine.concat(i);
// //  concat c'est concatener donc mettre à la suite d'un caractère, un autre
// } console.log(chaine);
// for(let i = 0; i <= chaine.length; i++){
//     if (chaine.charAt(i)== 3 ){
//         number++;
//     }
// }console.log(number);

/* -------------------------------------------------------------------------- */
/*                                     exo                                    */
/* -------------------------------------------------------------------------- */

// let paragraphe = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusantium error atque laborum perferendis officiis numquam qui nihil totam voluptatem modi, placeat debitis, veniam dignissimos commodi at porro, voluptatibus cupiditate tempore unde id. Repellendus sunt esse velit, voluptatum soluta qui quibusdam sapiente eaque tempora quia, commodi corrupti voluptas. Culpa exercitationem tenetur odio, deleniti debitis necessitatibus quisquam, officiis natus harum quidem enim iste pariatur sed repellat, officia beatae reiciendis dolor neque et nostrum a magnam? Perferendis, est quibusdam voluptas praesentium quam iste nam ratione enim voluptates in vitae doloremque odit amet ipsam cupiditate rerum quidem animi quo porro cum magni ex."
// // compter le nombre de o

// var number = 0;
// for(let i = 0; i <= paragraphe.length; i++){
//     if (paragraphe.charAt(i)=== "o" ){
//         // chatAt c'est chercher tout charactère qui est "o" sur la position dans le "i"
//         number++;
//     }
// }console.log(number);
// Pour une lettre

// let toto = 10;
// toto++ ou ++toto;
// console.log(toto) = 11
// console.log(toto++) = 10

/* -------------------------------------------------------------------------- */
/*                                     exp                                    */
/* -------------------------------------------------------------------------- */

// via un prompt, demandez d'écrire des noms, tant que j'écris des noms, je peux continuer, si j'arrête d'écrire des noms,
// consoleloger tous les noms
//  ! c'est une négation/inverse
// += c'est ajouter l'élément de droite à celui de gauche // chaine += i  c'est pour dire chaine = chaine + i c'est faire en sorte qu'une donnée ajoute une autre mais c'est plus simple/rapide
// /n c'est pour passer à la ligne
//  |= c'est différent

let listprenom = ""

let prenom = prompt("Citez un nom");
while(prenom !== ""){
    listprenom+= prenom+" ";
    prenom = prompt("Citez un autre nom");
}console.log(listprenom);
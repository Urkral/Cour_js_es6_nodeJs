// const person = {
//     firstName:"Esteban",
//     lastName:"Occon",
//     hobby:["kicker","javascript"],
//     achievement:"nothing",
//     gitHub:"Esteboeuf"
// }

// // person.firstName

// // const first = person.firstName
// // console.log(first);
 
// const {firstName,gitHub,hobby:[babyfoot,js]}=person;
// console.log(firstName,js);

// const toto={
//     firstName:"Thomas",
//     lastName:"LeChat",
//     hobby:["kicker","javascript"],
//     achievement:"Veigar master",
//     gitHub:"NeedGank",
//     links:{
//         social:{    
//             facebook:"https://facebook.com",
//             twitter:"https://twitter.com"
//         },
//         web:{
//             blog:"https://trollDesGames.com",
//             github:"https://github.com/NeedGank"
//         },
//     },
// }

// const{twitter,facebook}=toto.links.social
// console.log(twitter);

// // je vais réatribuer le nom des clés 
// const {github : git, blog : website}= toto.links.web
// console.log(git,website);

// //Je vais donner une valeur par défaut, donc si la clé n'existe pas je vais la créer sino je récupére celle déjà existante

// const {lastName = 'Leroy', beer= "Hoegarden rosée"} = toto

// console.log(lastName, beer);

// const speed = false;
// const mySpeed = speed || 768;
// //const mySpeed = speed ?? 768;
// // || vient vérifier si la valeur est undefinied, nulle ou false, si c'est le cas il va prendre la valeur par défaut
// // ?? vient vérifier si la valeur est undefinied ou nulle si c'est le cas il va prendre la valeur par défaut

// //on vient vérifier si la clé size existe et si la clé height sur size existe, si elle n'existe pas (undefined) on retourne la valeur par défaut
// const size = toto.size?.height ?? "185 cm";
// console.log(size);

// /* ------------------------ d'estructuration d'array ------------------------ */
// const user = ["Olivia", "Simaut rikcqueo",123,"Mons"];
// const [prenom,nom,id,ville] = user;
// console.log(prenom,id,ville);

// const team = ["Gilles","Stéphane","Vincent","Amaury","Romain","Sebastien","Maxime","Joelle"]

// //rest operator
// const[boss,support, ...employes] = team;
// console.log(boss,employes);
// /* -------------------------------------------------------------------------- */
// let champion = "Esteban"
// let challenger = "Zaïb";

// // let temp = champion;
// // champion = challenger;
// // challenger = temp;

// [champion,challenger] =[challenger,champion]
// console.log(champion);

// /* ---------------------- destructuration des functions --------------------- */

// function convertCurrency(montant){
//     const converted = {
//         USD : montant*1.12,
//         GBP : montant*0.9,
//         RUS : montant*71.65,
//         JAP : montant*121.78
//     }
//     return converted;
// }
//  //const res = convertCurrency(100);
//  //console.log(res);
//  //const usd = res.USD;
//  //console.log(usd);

//  const {USD:usd,JAP}=convertCurrency(100);
//  console.log(usd,JAP);


/* ----------------------------------- exo ---------------------------------- */
//Avec la destructuration, créer 3 variables: Menus(quicorrespond a name), size et sauce
const mcDo={
    name : "CBO(Chicken bacon onion",
    size:"large",
    sauce:['frite','andalouse'],
}

const {name : menu,size,sauce}= mcDo
console.log(menu,size,sauce);



/* -------------- Destructuration des paramètres d'une fonction ------------- */
const formation = {
    name:"Front-end développeur",
    description:"Formation idéale pour rater sa vie",
    students:['Esteboeuf','Toto','Zaid','Aure']
};

function getStudents({students, name:forma}){
    return`Les étudiants:${students.join("-")} font la formation ${forma}`
}
console.log(getStudents(formation));

//J'afiche la fonction qui tire ses éléments de la const formation


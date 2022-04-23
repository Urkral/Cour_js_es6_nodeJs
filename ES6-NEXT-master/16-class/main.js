// class Dog{
//     // Le constructor est indispensable dans une class, il va demander des noms, qui serviront a construire ma classe
//     constructor(nom, race, age){
//         //le nom, la race et l'age seront donc équivalent aux noms que je donnerai en arguments lors de l'instanciation de ma classe
//         this.nom=nom;
//         this.race=race;
//         this.age=age;
//     }
//     aboyer(){   //Ceci est une méthode
//         console.log(`Le chien ${this.nom} est entrain d'aboyer`);
//     }
//     caliner(){
//         console.log("Je t'aime maitre");
//         this.aboyer()
//     }
//     get surnom(){
//         // get pour obtenir et set pour attribuer quelque chose
//         return this.nick;
//     }
//     set surnom(valeur){
//         // Avec le set on est obligé de mettre un argument, car il attend que l'on rentre quelque chose
//         // Le constructir sert a construire ma classe, le set permet de la remplir
//         this.nick = valeur;
//     }
//     // Un get et un set pour un élément sinon ==> BUG !
//     get humanAge(){
//         return "Mon chien à " + this.age*7 + " ans";
//     }
// }

// let myDog = new Dog("Rex","Bichon",4)
// console.log(myDog);
// // J'apellle ma méthode (même technique qu'une fonction)
// myDog.aboyer();
// myDog.nick = "Warrior"
// // j'attribue le surnom de mon chien avant, et ensuite je l'affiche (L'atribution du nom est = au set et l'afficher est = au get)
// console.log(myDog.nick);
// myDog.caliner();
// console.log(myDog.humanAge);

class Animal{
    constructor(nom){
        this.nom = nom;
        this.stamina = 100;
        this.stomach = [];
    }
    info(){
        console.log(`Ceci est un ${nom}`);
    }
    sleep(){
        // NB: faire en sorte que la stamina augmente + avec le nombre d'heure donné en paramétre (avec un if)
        this.stamina += 30
        return "Je suis claqué, je me suis donc reposé, j'ai " + this.stamina + " de stamina";
    }
    manger(food){
        this.stomach.push(food)
        return this.stomach;
    }
    run(){
        this.stamina -= 50;
        return "Je cour, il me reste" + this.stamina;
    }
    poo(){
        this.stomach = [];
        return this.stomach;
    }
}

class Chevre extends Animal{
    // Le extends sert a récupérer les caractéristique de Animal
    constructor(type,race){
        super(type)        
        // me permet d'instancier la classe étendue et donc de lui passer l'argument qu'il faut (il fait remonter lt type "à l'étage du dessus")
        // this.type=type; je peux suprimer cette ligne, car elle va se retrouver dans la classe, mais si je vuex pouoir utiliser le terme type, je dois quand même le déclarer
        // this.type = type
        // le nom de chévre va écraser le nom d'animal
        this.race = race;
    }
    bele(food){
        this.stomach.push(food)
        // console.log(`${this.type} est en train de brouter`); rapport avec la ligne 75 (this.type=type)
        console.log(`${this.nom} est en train de bêler`);
        // Obligé de faire un this.nom et pas this.type, car l'on renvoie type dans nom
        this.stamina += 15
        console.log(this.stamina + " de stamina" );
    }
}
let singe = new Animal("singe")
let chevre = new Chevre("Chevre","Anglonubienne")

chevre.bele('herbe');
console.log(chevre);
console.log(chevre.sleep());

console.log(singe);
console.log(singe.bele);// ==> ceci sera undefined, et c'est normal, car animal n'a pas accées aux méthodes de chévre 

const newAgency = new Array('Triptyk','Pechnocité','Cefora')
console.log(newAgency);


class CollectionDeMangas extends Array{
    constructor(name, ...items){
        super(...items);
        this.name = name;
    }
    get title(){
        return this.name + " officiel";

    }
    get getName(){
        return this.name
    }
    add(mangas){
        this.push(mangas)
    }
}

const mangas = new CollectionDeMangas("Les mangass de Alex", 
    {name:"OnePeace", rating:10},
    {name:"SNK", rating:8},
    // Les deux mangass ici (OnePeace et SNK) sont des items de CollectionDeMangas donc dann les ...items
)
console.log(mangas.getName);
console.log(mangas.title);
console.log(mangas);
mangas.add({name:"MyHeroAcademia", rating:5});
console.log(mangas);
const filterMangas = mangas.filter(manga => manga.rating > 7)
console.log(filterMangas);
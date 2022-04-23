const feature =["Margarita","4 fromages","Hawai","Regina"]
const speciality=["Nutella","Banane","Moule frites", "Fricadelle"]

// const pizzas =[...feature,'Vegan',...speciality]
// console.log(pizza);

// const newPizza =[...pizza]
// newPizza.push("Boolean")
// console.log(newPizza);

const user={
    username:"Esteboeuf",
    profil:"Salut les saguins"
}

const userUpdate={
    ...user,
    passion:"Javascript"
}
console.log(userUpdate);

const personneQueJadore = document.querySelectorAll("#people p");
console.log(personneQueJadore);

const peopleArray = [...personneQueJadore]

console.log(peopleArray
    );

const pizza = {
    name:"Cannibale",
    size:"medium",
    ingredients:['Sauce tomate','boeuf','poulet','mergez','sauce barbecue']
}

const ingredients=[...pizza.ingredients]
console.log(ingredients);

/* ----------------------------------- EXO ---------------------------------- */

//a l'aide de la décomposition (spread) recréez un nouvel objet qui va se présenter comme suit

const userInfo={
    firstname:"Zaib",
    lastname:"maAuDos",
    job:"Kiné"
}
const useradress={
        street:"Rue de la jungle",
        number:"4",
        city:"Faille de l'invocateur"
    }
const user2={
    ...userInfo, 
    adresse:{...useradress}
}

console.log(user2);


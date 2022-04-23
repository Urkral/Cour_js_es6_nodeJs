//exo 

// La terre est en danger , une nouvelle maladie grave vient d'arrriver , vous devez créer une classe "cure".

// Cette classe devra prendre un argument, le nom de la maladie qui est le "corosida".
//Vous allez également créer un deux méthode , une première qui est "cureFree" qui afficheera un message : "Application du vaccion pour le "corosida" pour tout le monde"

// une deuxième methode qui est "cureSell" qui prendra en paramètre un "price" qui affichera le message : "Le vaccin pour le 'corosida' est sur le point d'être  d'être vendu pour ${price} € à l'unité"

// attention de veiller a ce que l'on puisse appliquer la meme classe dans le cas d'une autre maladie


class Cure{
    constructor(maladie){
        this.maladie=maladie;

    }

    cureFree(){
        console.log(`Application du vaccin pour le ${this.maladie} pour tout le monde`);
    }

    cureSell(price){
        this.price=price;
        console.log(`Le vaccin pour le ${this.maladie} est sur le point d'être  d'être vendu pour ${price} € à l'unité`);
    }

}
let corosida = new Cure("corosida")
corosida.cureFree();
corosida.cureSell(25000);
let apple = +prompt('Combien de pomme avez-vous récolté ?')
//  +prompt est d'équivalent de parseInt()
if(isNaN(apple)){
    alert("J'ai dit combien !")
}else {
if(apple >= 35){
    let color = prompt("De qu'elle couleurs sont elles ?").toLowerCase();
    //ici je viens transformer l'information reçue en minuscule afin de traiter les cas ou l'utilisateur écrirait le mot en majuscule
    if(color.includes("rouge")){
        //ici j'utilise un includes plutôt qu'un == pour venr prendre en comptre les cas ou l'utilisateur écrirait rougeS
        alert("Bien joué, c'est ce que je voulais")
    }else if(color.includes("vert")){
        alert("Pas mal mais je voulais des rouges")
    }else{
        alert("Débile, des pommes " + color + " existe pas !")
    }
      }
      else{
        alert("Retourne travailler")
    }

}
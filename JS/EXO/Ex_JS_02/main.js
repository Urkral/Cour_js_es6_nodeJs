var pomme = prompt('Combien de pommes avez vous récoltées')
if(pomme <= 35){
    alert('Par en receuillir pouilleux')
}
if(pomme>35){
    var color = prompt("De quelle couleurs sont t'elle ?")
    if(color == "rouge"){
        alert("Bien joué j'aime bien le rouge")
    }
    else if(color == "verte"){
        alert("Pas mal mais je voulais du rouge")
    }

    else{
        alert("T'es con une pomme c'est pas " + color + " ,c'est vert ou rouge" )
    
    }
}
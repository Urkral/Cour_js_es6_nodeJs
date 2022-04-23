const truants = [
    {
        "name" : "Aurélie",
        "compteur" : 0
    },
    {
        "name" : "Patrick",
        "compteur" : 0
    },
    {
        "name" : "Alex",
        "compteur" : 0
    },
    {
        "name" : "Amilton",
        "compteur" : 0
    },
    {
        "name" : "Zaib",
        "compteur" : 0
    },
    {
        "name" : "Bwajamin",
        "compteur" : 0
    },
    {
        "name" : "Olivia",
        "compteur" : 0
    },
    {
        "name" : "Andy",
        "compteur" : 0
    },
    {
        "name" : "Esteban",
        "compteur" : 0
    },
    {
        "name" : "Toto",
        "compteur" : 0
    },
    {
        "name" : "Lucas",
        "compteur" : 0
    },
]
let point = " ";

while(point != ""){
    point = prompt("Qui a marqué un point ?")
    console.clear();
for(let gagnant of truants){
if(gagnant.name == point){
    

}else if(gagnant.name != point){
    console.log("J'ai demandé quelqu'un qui joue !");
}
}
}
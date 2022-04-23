var age = +prompt("Quel est votre âge");
if(age == 1){
    alert("C'est pas possibe")
} else if(age>=2 & age<= 17) {
    alert("Vous êtes mineur")
} else if(age >= 18 & age<= 49){
    alert("Vous êtes majeur mais pas encore vieux")
} else if(age >= 50 & age<= 67){
    alert("Vous êtes sénior")
} else if (age >=68 & age <=  120){
    alert("Vous êtes trés vieux")
} else if (age > 120){
    alert("Vous êtes mort")
} else{
    alert("Tu as fais une erreur sale chien")
}
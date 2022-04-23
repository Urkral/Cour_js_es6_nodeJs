let nMin = Math.round(Math.random()*100)
let nMax = Math.round(Math.random()*100)+nMin
console.log(nMin,nMax)
let nbr = prompt("Donne un nombre entre 0 et 200")
if(nbr > nMax || nbr<nMin){
    alert("You loose")
} else{
   alert('You win')
}
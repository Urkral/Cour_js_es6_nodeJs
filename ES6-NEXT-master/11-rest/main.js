const player = ["Max","Esteban","Olivia","Milton","Bwajamin"]

const[master,apprenti,...bot] = player;

console.log(master,apprenti,bot);

const vatCalculator = (vat,...montant)=>{
    
    return montant.map(montant=> montant*vat);
} 

console.log(vatCalculator(0.06,188,90,25,1,10));
// vatCalculator va faire en sorte que tout les nombre fasse *0.06 car 0.06 est le "vat" 
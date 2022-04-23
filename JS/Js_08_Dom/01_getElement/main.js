    let div = document.getElementById("toto") //Je vais dans le doc dans le quel je suis relié,et le .getElementById sert a recherher un élément par son id en l'aucurensce l'id "toto"
    console.log(div);

    div.innerText = "C'est bien Urkral" //div.innerText change le texte de la div

    div.innerHTML = "<h1>Coucou</h1>" //modifie l'HTML

    div.style.color = "chartreuse"
    div.style.backgroundColor = "burlywood";
    div.classList.add("error"); //ajoute une class a ma div 
    let p = document.getElementsByTagName("p") // getElementByTagName vient chercher le nom de la balise
    console.log(p);

    let classes = document.getElementsByClassName("test") // getElementByClassName vient chercher les noms des class 
    console.log(classes);

    for (items of classes){
        console.log(items);
        items.style.color = "fuchsia"
    }

    let link =document.querySelectorAll("nav > ul > li > .link") //bonne méthode, mais a éviter, car elle est gourmande en ressource
    console.log(link);
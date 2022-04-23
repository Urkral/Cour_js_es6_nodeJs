    let box = document.getElementById("demo");
    let img = document.getElementById("myImg");
    let input = document.getElementById("chevreInput");

    box.innerText = img.alt;

    img.setAttribute("width",400);   //permet d'ajouter un attribut a un élément, il faut d'abord ajouter le nom de l'attribut puis sa valeur 
    input.value = "Bangerrrrr";     //permet aussi d'ajouter un atribut, quand il n'y a pas déjà un attribut définit dans l'html, dans ce cas il n'y a pas de .value dans l'html
    
    let inputValue = input.value;
    console.log(inputValue + " , mais oui c'est clair");

    let text = document.getElementById("myText");

    text.style.marginTop = "200px";
    text.setAttribute("style","margin-top:300px; font-size:24px")
    console.log(text);

    text.classList.add("orange"); //add = ajoute
    text.classList.remove("orange"); //remove = enléve
    text.classList.toggle("orange"); //toggle = la retire si il l'a et l'ajoute si il ne l'a pas

    /* -------------------------------------------------------------------------- */
    /*                            Explication du toggle                           */
    /* -------------------------------------------------------------------------- */

    // if(text.classList == "orange"){
    //     text.classList.remove("orange")
    // }else{
    //     text.classList.add("orange")
    // }
    
    /* -------------------------------------------------------------------------- */
    /* -------------------------------------------------------------------------- */
    let go = document.getElementById("go");
    let square = document.getElementById("square");
    let reset = document.getElementById("reset");

    go.addEventListener("click", letsGo);

    function letsGo(){
        console.log("Leeeeeeeeeeeet's goooooooo");
    }

    square.addEventListener("click", createSquare);

    function createSquare(){
        let box = document.createElement("div");

        box.style.width = "200px"
        box.style.height = "200px"
        box.style.marginTop = "20px"
        box.style.backgroundColor = "chartreuse"

        document.getElementById("preview").appendChild(box) // appendChild permet de faire apparraitre l'élément que j'ai créé 
    }

    reset.addEventListener("click", function(){
        document.getElementById("preview").innerHTML="";
    })
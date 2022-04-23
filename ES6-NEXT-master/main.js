var datas = [
    {
        "src" : "/Js_08_Dom/06_exo_01/images/monstre1.jpg",
        "title" : "Boule verte",
        "alt" : "Monstre poilu vert",
        "id" : 1
    },
    {
        "src" : "/Js_08_Dom/06_exo_01/images/monstre2.jpg",
        "title" : "Tentaculos",
        "alt" : "Pieuvre bleue à rayures",
        "id" : 2
    },
    {
        "src" : "/Js_08_Dom/06_exo_01/images/monstre3.jpg",
        "title" : "Monstre à sucette",
        "alt" : "Monstre à sucette",
        "id" : 3
    },
    {
        "src" : "/Js_08_Dom/06_exo_01/images/monstre4.jpg",
        "title" : "Triglobuleux",
        "alt" : "Monstre à 3 zieux",
        "id" : 4
    },
    {
        "src" : "/Js_08_Dom/06_exo_01/images/monstre5.jpg",
        "title" : "Diablotin",
        "alt" : "Diable rouge",
        "id" : 5
    },
    {
        "src" : "/Js_08_Dom/06_exo_01/images/monstre6.jpg",
        "title" : "Chewbacca rose",
        "alt" : "Monstre poilu rose",
        "id" : 6
    }
];



let galerie = document.getElementById("galerie")
for(let items of datas){
    let img = document.createElement("img")
    img.alt = items.alt
    img.title = items.title
    img.id = items.id
    img.src = items.src
    img.style.width="150px"
    img.style.height="150px"
    img.setAttribute("onclick", "bigImg("+img.id+")")
    document.getElementById("galerie").appendChild(img)
}

function bigImg(index){  
    console.log(index);
    for(zoom of datas){
        if (zoom.id == index){
            preview.innerHTML=""; 
            let titre = document.createElement("h2")
            let imgzoom = document.createElement("img")
            let supr = document.createElement("button")
                supr.addEventListener("click", function(){
                document.getElementById("preview").innerHTML="";  
            })

            imgzoom.alt = zoom.alt 
            imgzoom.id = zoom.id
            imgzoom.src = zoom.src
            titre.innerText = zoom.title; 
            imgzoom.style.width="400px"
            imgzoom.style.height="400px"
            supr.innerText = "X"
            document.getElementById("preview").appendChild(titre)
            document.getElementById("preview").appendChild(imgzoom)
            preview.appendChild(supr)   ()

           
        }
    }

}
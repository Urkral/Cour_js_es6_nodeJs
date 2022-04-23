 
 let btn = document.getElementById("btn")
 let box = document.getElementById("box")

 let isVisible = true;

 btn.addEventListener("click",function(){
    if(isVisible){
        box.style.display="none"
        isVisible=false
    }else{
        box.style.display="block"
        isVisible=true
    }
 })

 btn.addEventListener("copy",messageAfterCopy)
 function messageAfterCopy(event){
     console.log(event);
     console.log("Tu as copié quelque chose");
     box.removeEventListener("copy", messageAfterCopy)
 }
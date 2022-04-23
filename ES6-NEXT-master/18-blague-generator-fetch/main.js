class Application{
    constructor(url, token){
        this.url = url;
        this.token = token;
        this.response = document.querySelector('.container h2');
        this.answer = document.querySelector('.container p');
    }

    init(){
        this.getJokes();
    }
    // init = nom par convention qui déclenche le lancement de l'application

    getJokes(){
        fetch(this.url,{
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        }).then((res)=> res.json()).then((data) =>{
            console.log(data);
            this.joke = data;
        })
    }
    render(){
        this.response.innerHTML = this.joke.joke;
        this.answer.innerHTML = this.joke.answer;
    }

}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzI2NjkzNTc0ODY5NjQ3MzYxIiwibGltaXQiOjEwMCwia2V5IjoicEpXZEJtTU1uT3ZvNGFFOGFrZFdqMkVQU3dxZW5ycmtJUHJaUU5EeE1ORHhUclEySUciLCJjcmVhdGVkX2F0IjoiMjAyMi0wMy0yNFQxMzozMjoyOSswMDowMCIsImlhdCI6MTY0ODEyODc0OX0.mZkzOrX78rH4nEmE2u_ml2EdtD5i7_1fwmHf9bKyGfI";

const url = "https://www.blagues-api.fr/api/type/dark/random";

const App = new Application (url, token)

App.init();

document.querySelector(".container button").addEventListener("click",()=>{
    App.getJokes();
})
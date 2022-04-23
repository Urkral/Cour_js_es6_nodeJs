const posts = [
    { id:1, title :'Titre 1', content:'1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur earum est doloribus consequuntur odio nam at perferendis rerum, quas delectus culpa molestiae id quo, voluptas recusandae reprehenderit, facilis nulla beatae.'},
    { id:2, title :'Titre 2', content:'2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur earum est doloribus consequuntur odio nam at perferendis rerum, quas delectus culpa molestiae id quo, voluptas recusandae reprehenderit, facilis nulla beatae.'},
    { id:3, title :'Titre 3', content:'3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur earum est doloribus consequuntur odio nam at perferendis rerum, quas delectus culpa molestiae id quo, voluptas recusandae reprehenderit, facilis nulla beatae.'},
    { id:4, title :'Titre 4', content:'4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur earum est doloribus consequuntur odio nam at perferendis rerum, quas delectus culpa molestiae id quo, voluptas recusandae reprehenderit, facilis nulla beatae.'},
    { id:5, title :'Titre 5', content:'5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur earum est doloribus consequuntur odio nam at perferendis rerum, quas delectus culpa molestiae id quo, voluptas recusandae reprehenderit, facilis nulla beatae.'},
];

const list = document.getElementById("postList");
const detail = document.getElementById("posteDetail");



function afficher(test){
    let div = document.createElement("p")
    div.innerHTML=test.content
    detail.appendChild(div)
}
posts.map(function(test){
    let li = document.createElement("li");
    li.innerHTML=test.title
    list.appendChild(li)
    li.addEventListener("click",function(e){
        detail.innerText=' '
        afficher(test)
    })
}) 
let badPeoples =[
    {
        name : "Aure",
        compter : 0
    },
    {
        name : "Patrick",
        compter : 0
    },
    {
        name : "Alex",
        compter : 0
    },
    {
        name : "Milton",
        compter : 0
    },
    {
        name : "Zaib",
        compter : 0
    },
    {
        name : "Ben",
        compter : 0,
    },
    {
        name : "Lucas",
        compter : 0,
    },
    {
        name : "Andy",
        compter : 0,
    },
    {
        name : "Oli",
        compter : 0,
    },
    {
        name : "Esteban",
        compter : 0,
    }
]

let cont = `
    <ul>
        ${badPeoples.map((nom,index) =>`<li class="list">
        <span>${nom.name}</span> - 
        <button id="moins" onclick="moins(${index})"> - </button> 
        <span id="compt">${nom.compter}</span> 
        <button id="plus" onclick="plus(${index})"> + </button> 
        </li>`).join("")}
    </ul>
`
document.getElementById("sortie").innerHTML = cont;


function plus(index){
    badPeoples[index].compter++
    let people = document.getElementsByClassName("list")
    people[index].querySelector("span:last-of-type").innerText = badPeoples[index].compter;
}

//console.log(plus);

function moins(index){
    badPeoples[index].compter--
    let people = document.getElementsByClassName("list")
    people[index].querySelector("span:last-of-type").innerText = badPeoples[index].compter;
}

//console.log(moins);
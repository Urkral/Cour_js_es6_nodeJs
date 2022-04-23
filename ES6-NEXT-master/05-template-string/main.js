const nom = "Aurélie";
const habitat = "grotte";
console.log("Bonjour je m'appelle " + nom + " et je vis dans une "+habitat);

console.log(`Bonjour je m'appelle ${nom} et je vis dans une ${habitat}`);

const user ={
    firstName : "Andy",
    job : "Developpeur",
    city : "Madrid",
    bio : "Si il pleut pas, c'est qu'il fera beau",
}

const markup = `
    <h1>
        ${user.firstName}
        <em>${user.city}</em>
    </h1>
    <p classe="toto">
        ${user.job}
    </p>
    <p>
        ${user.bio}
    </p>
`;
document.getElementById("output").innerHTML = markup;

const computers =[
    {name : "Apple", ram : 16},
    {name : "Asus", ram : 32},
    {name : "IBM", ram : 2},
];

const list = `
    <ul>
        ${computers.map(pc =>`<li>${pc.name} - ${pc.ram}</li>`).join("")}
    </ul>
`
document.getElementById("list").innerHTML = list;

const songs = [
    {
        name : "Thriller",
        artist : "Michael Jackson",
    },
    {
        name : "Lettre du front",
        artist : "Kenza Farah",
        featuring : "Sefyu",
    },
    {
        name : "Dying to live",
        artist : "Tupac",
        featuring : "Biggie Smalls",
    },
    {
        name : "Confession nocturne",
        artist : "Diams",
        featuring : "Vita",
    },
    {
        name : "Baby",
        artist : "Justin Bieber",
    },
]

// output dans l'html
// thriller - Michael Jackson
// Lettre du front - Kenza Farah (featuring : Sefyu)
// Dying to live - Tupac (featuring : Biggie Smalls)
// Confession nocturne - Diams (featuring : Vita)
// Baby - Justin Bieber

const album = `
    <ul>
        ${songs.map(disc =>`<li>${disc.name} - ${disc.artist} ${disc.featuring ? `(featuring : ${disc.featuring})` : " " } </li>`).join("")}
    </ul>
`
document.getElementById("album").innerHTML = album;

// OU

// const listSongs = `
//     <ul>
//         ${songs.map(song =>`<li> ${song.name} - ${song.artist} ${getFeaturing(song)} </li>`).join("")}
//     </ul>
// `
// function getFeaturing(item) {
//     if(item.featuring){
//         return `(featuring : ${item.featuring})`
//     }else{
//         return " "
//     }
// }

// document.getElementById("album").innerHTML = listSongs;

const fs = require("fs");

const stream = fs.createReadStream("text.html");

let nbrL = 0;

stream.on("data", (data) => {
    for (const caractere of data.toString()) {
        if (caractere === "l") {
         nbrL++;
        }
    }
})

stream.on("end", () => {
    console.log("Vous avez ", nbrL, " L dans votre fichier")
})



/* ------------------------- CECI FAIT CRASH DES PC ------------------------- */
// fs.writeFileSync("test.txt","");

// for (let index = 0; index < infinity; index++) {
//     fs.appendFileSync("test.txt","lorem");
// }
const fs = require("fs");

const readStream = fs.createReadStream("test.txt");
const writeStream = fs.createWriteStream("rivière.txt");

writeStream.write("cailloux");

// on va transvaser le contenu du readStream dans le writeStream
readStream.pipe(writeStream);

fs.appendFileSync("test.txt","lksdfhkfsdhkj");

const copieTerminal = fs.createWriteStream("copie-terminal.txt");

// on redirige le flux d'entrée du terminal dans notre fichier
process.stdin.pipe(copieTerminal);

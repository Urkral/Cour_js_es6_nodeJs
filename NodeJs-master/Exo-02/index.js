/*
📌 Installez "image-js" https://www.npmjs.com/package/image-js
 📌 Faites un programme qui lit 'hackerman.jpg' et la tourne de 180 degrés et lui applique une dimension de 200 pixels de large sur 1000 pixels de long.
 📌 Sauvegardez ensuite l'image sous 'cat.png'
*/
const { Image } = require('image-js');

(async function execute() {
  let image = await Image.load('hackerman.jpg');
  let grey = image
    .resize({ width: 1000, height:200 }) // resize the image, forcing a width of 200 pixels. The height is computed automatically to preserve the aspect ratio.
    .rotate(180); // rotate the image clockwise by 30 degrees.
  return grey.save('cat.jpg');
})()
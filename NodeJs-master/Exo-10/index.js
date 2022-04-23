const { createReadStream } = require("fs");
const http = require("http");

const server = http.createServer((request, response) => {
  const url = request.url;
  if (url === "/public.css") {
    response.writeHead(200, {
        "Content-Type": "text/css",
     });
    const cssStream = createReadStream("public.css");
    // on vient déverser le contenu de public.css dans la réponse
    cssStream.pipe(response);
  }  else if (url.includes("jpg")) {
    response.writeHead(200, {
        "Content-Type": "image/jpg",
     });
    const imgStream = createReadStream(`melenchon/${url}`);
    // on vient déverser le contenu de public.css dans la réponse
    imgStream.pipe(response);
  } else {
    response.writeHead(200, {
      "Content-Type": "text/html",
    });
    response.write(`
        <html>
            <head>
                <link rel="stylesheet" href="public.css">
            </head>
            <body>
            <h1> MELUCH LE BEST</h1>
                <div>
                    <img src="melenchon.jpg" alt="">
                    <img src="melenchon1.jpg" alt="">
                </div>
                <span>GOULAGWE</span>
            </body>
        </html>
    `);
    response.end();
  }
});

server.listen(2020, () => {
  console.log("J'écoute sur le port 2020");
});


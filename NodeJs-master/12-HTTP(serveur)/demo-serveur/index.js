const http = require('http');

//HTTP=> PORT 80 par défaut
// HTTPS => PORT 443 par défaut


/**CODE ERREUR
 * 200 => OK
 * 400 => Mauvaise requête
 * 404 => Ressource non trouvée
 * 500 => Internal server error
 */


const server = http.createServer((request, response)=>{
    console.log(request.headers["user-agent"]);
    
    // on peut lire le user-agent qui permet de voir quelle  navigateur par exemple fait la requête    

    const contenu = `
    <html>
        <head>
            <title> MON SUPER SITE DE GOULAGWE </title>
        </head>
        <body>
            <h1>GLOIRE AU SAINT LUSTRE</h1> 
        </body>
    </html>
    `;
    
    //On écrit dans l'en tête de la réponse que le code de réponse est 200(ok)
    response.writeHead(418, {
        // on dit que le retour de notre serveur est de type HTML
        'Content-Type' : 'text/html'
    })

    //on écrit comme contenu de la réponse notre html
    response.write(contenu)
    //l'écriture de la réponse est finie, elle peut donc être renvoyée à notre navigateur
    response.end()
})

// Si pas , plage de port de 1024 à 49000
// http://localhost:2020 => fais une requête sur votre serveur web sur le port 2020
// CTRL+C pour quitter le serveur dans la console
server.listen(2020,()=>{
    console.log("J'écoute le port 2020");
})
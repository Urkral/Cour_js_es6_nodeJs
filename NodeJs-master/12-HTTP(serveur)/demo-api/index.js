/**
 * 📌 Renvoyer une page html qui affiche les différents articles sur base d'un fichier JSON
 */

// simule un retour de votre base de données
const posts = {
    posts: [
      {
        title: "Covid-19 : précision suisse et prévisions globales",
        content:
          "Un consortium émanant de hautes écoles suisses a mis en place un tableau de bord fournissant quotidiennement des prévisions épidémiologiques à 7 jours pour 209 pays et territoires dans le monde. Relayées sur les réseaux sociaux, les médias internationaux et les sites des grandes agences de sécurité sanitaire, ces prévisions peuvent aider au guidage des politiques publiques.",
      },
      {
        title:
          'Vers de nouvelles mesures "Covid"? Le Premier ministre accélère l’agenda des réunions prévues ',
        content:
          'Le Premier ministre a également décidé d\'avancer la réunion du Conseil des ministres à ce soir, 20 heures, afin de    discuter de la situation avec les vice-premiers ministres fédéraux.Le Comité de concertation pourrait également être avancé, éventuellement, à mercredi matin.Le dernier Comité de concertation avait eu lieu vendredi dernier, et avait abouti essentiellement à un léger tour de vis dans l’enseignement, ainsi qu’à un report du "plan plein air". Rapidement, il était apparu qu’un nouveau Comité de concertation pourrait être convoqué sous peu, pour édicter éventuellement des mesures plus restrictives.',
      },
      {
        title:
          "Hétéro, homo, bi, lesbienne, gay : ces jeunes qui refusent les étiquettes ",
        content:
          "Camille, Sophie, Mélanie, Ariane et Jolyn ont accepté de nous parler de leur cheminement. Ce sont des esprits libres, qui étoufferaient dans le carcan étriqué des étiquettes. Elles n’ont pas trouvé de mots qui leur conviennent, alors elles ont décidé de ne pas choisir.Elles ont toutes fait des hautes études, ou sont encore en train d’étudier. Ce genre de réflexion sur l’orientation sexuelle apparaît principalement dans des milieux à la fois plus éduqués, et plus ouverts. Ailleurs, l’homophobie est encore (trop) régulièrement présente dans les discours.",
      },
    ],
  };
  
  const http = require("http");
  
  // crée le serveur
  const server = http.createServer((request, response) => {
      const url = request.url;
  
      // si l'url est http://localhost:2020/posts
      if (url === "/posts") {
        response.writeHead(200, {
          "content-type": "application/json",
          // nécéssaire pour authorizer notre frontend à communiquer
          "Access-Control-Allow-Origin": "*"
        });
        // on renvoie nos posts
        response.write(JSON.stringify(posts));
        response.end();
      }
  });
  
  
  server.listen(2020,() => {
      console.log("J'écoute sur le port 2020");
  });
  
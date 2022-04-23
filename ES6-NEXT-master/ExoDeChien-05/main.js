const menuItems = [
    {
      name: "Accueil",
      url: 'https://google.com/',
      icons: './icons/home.svg'
    },
    {
      name: "Mon compte en banque",
      url: 'https://amazon.com/',
      icons: './icons/work.svg'
    },
    {
      name: "A propos de moi",
      url: 'https://vesass.github.io/',
      icons: './icons/about.svg'
    },
    {
      name: "Contact",
      url: 'https://triptyk.eu/',
      icons: './icons/contact.svg'
    },
  ]


//CECI EST UNE VERSION DE SINGE !!!!

  const markup = `
    <div id="container">
        <ul>
            ${menuItems.map(item=>{`
                <li>
                    <a href="${menuItems[0].url}"><img src="${menuItems[0].icons}"> </img> ${menuItems[0].name} </a>
                </li>
            `
            }).join("")}        
        </ul>
    </div>
`;




document.getElementById("output").innerHTML = markup;
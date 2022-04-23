const DIList = {
    "stagiaires":[
        {
            "firstname":"Laurent",///
            "lastname":"Esgain",
            "age":26,
            "city":"Charleroi"
        },
        {
            "firstname":"Foued",//
            "lastname":"Vandenbussche",
            "age":24,
            "city":"Houthem"
        },
        {
            "firstname":"Jerome",
            "lastname":"Flament",
            "age":26,
            "city":"Cuesmes"
        },
        {
            "firstname":"Sacha",
            "lastname":"Verde",
            "age":26,
            "city":"Charleroi"
        },
        {
            "firstname":"Théo",
            "lastname":"Lagast",
            "age":36,
            "city":"Mons"
        },
        {
            "firstname":"Manu",
            "lastname":"Wrincq",
            "age":53,
            "city":"Quaregnon"
        },
        {
            "firstname":"Gaetan",///
            "lastname":"Davin",
            "age":30,
            "city":"Braine L'Alleud"
        },
        {
            "firstname":"Lucas",
            "lastname":"Danzin",
            "age":40,
            "city":"Saint-Symphorien"
        },
        {
            "firstname":"Pierre Henri",
            "lastname":"Delaunoy",
            "age":20,
            "city":"Charleroi"
        }
    ],
    "formateurs":[
        {
            "firstname":"Christophe",
            "lastname":"Estercq",
            "age":26,
            "city":"Mons"
        },
        {
            "firstname":"Anissa",
            "lastname":"Belkheir",
            "age":34,
            "city":"Ghlin"
        },
        {
            "firstname":"Gilles",
            "lastname":"Bertrand",
            "age":35,
            "city":"Hyon"
        }
    ]
};

//name L/G/F
    // for(infos in DIList.stagiaires){
    //     console.log(DIList.stagiaires[infos]["firstname"] + " " +DIList.stagiaires[infos]["lastname"]); 
    // }
    // for(let stagiaire of DIList.stagiaires){
    //         if (stagiaire.firstname.charAt(0)=== "L" || stagiaire.firstname.charAt(0)=== "G" || stagiaire.firstname.charAt(0)=== "F"){
    //             console.log(stagiaire.firstname);
    //         }
    // }
    const stagiaires = [
        {
            name: "Aurélie",
            city: "La louvière",
            courses: ["filet américain", "biscuit","pain", "sweat-shirt"]
        },
        {
            name: "Patrick",
            city: "Mons",
            courses: ["carotte", "mouchoir", "mayo", "lubrifiant", "courgette"] 
        },
        {
            name: "Alex",
            city: "Bedour",
            courses: ["Bière","wards", "manettes", "concombre"]
        },
        {
            name: "Milton",
            city: "Bruxelles",
            courses: ["choux de bruxelles", "biscuit", "pain"]
        },
        {
            name: "Zaib",
            city: "Mons",
            courses: ["caviar", "cury", "katana", "tronçonneuse"]
        },
        {
            name: "Bwajamin",
            city: "Mons",
            courses: ["orange", "du sang", "pinceau"]
        },
        {
            name: "Thomas",
            city: "Ghilenghien",
            courses: ["touche R", "poupée de yummi au miel", "du respect", "patates", "poulet", "whey"]
        },
        {
            name: "Lucas",
            city: "Charleroi",
            courses: ["saucisson", "rhum", "tesla", "sextoy"]
        },
        {
            name: "Andy",
            city: "Dour",
            courses: ["lsd", "ketamine", "biscuit", "mescaline", "mdma", "du bon shit sa mere"]
        },
        {
            name: "Esteban",
            city: "Sirault",
            courses: ["ak-47", "balles", "lance-roquette", "lait", "kinder tranche au lait"]
        },
        {
            name: "Olivia",
            city: "Framerie",
            courses: ["olive", "jambon", "salade", "salami", "du bon shit sa mere"]
        }
    ]

    for(let friend of stagiaires){
            if (friend.city === "Mons"){
                console.log(friend.name);
            }
    }

    for(let client of stagiaires){
        if (client.courses.includes('biscuit')){
            console.log(client.name + " a des biscuits dans ses courses, sa première course est " + client.courses[0] + " et la dernière est " + client.courses[client.courses.length-1]);
        }
    }


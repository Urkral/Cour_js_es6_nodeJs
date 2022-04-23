const recettes = [
    {
      id: 1,
      name: "Tiramisu",
      difficulty: 2,
      ingredients: [
        "amaretto",
        "mascarpone",
        "sucre",
        "boudoir",
        "café",
        "cacao",
      ],
    },
    {
      id: 2,
      name: "Tartiflette",
      difficulty: 2,
      ingredients: ["lardons", "reblochon", "pommes de terre", "oignons"],
    },
    {
      id: 3,
      name: "Pâtes bolo",
      difficulty: 3,
      ingredients: [
        "spaghettis",
        "tomates",
        "oignons",
        "gruyère râpé",
        "viande hâchée",
      ],
    },
    {
      id: 4,
      name: "Donus fourré crème anglaise avec nappage chocolat guanduja",
      difficulty: 5,
      ingredients: ["farine", "sucre", "oeufs", "levure", "chocolat"],
    },
  ];
let listIngredients = [];
  recettes.map((recette)=>{
  listIngredients.push(...recette.ingredients)
})
listIngredients=[... new Set(listIngredients)]
console.log(listIngredients);
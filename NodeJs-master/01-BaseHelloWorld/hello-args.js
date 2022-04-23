// ce sont les arguments passés à cotr eprocessus.
console.log(process.argv);


/**
node hellow-args.js ==
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\esteb\\Desktop\\NodeJs\\01-BaseHelloWorld\\hello-args.js'01-BaseHelloWorld\\hello-args.js'    
]
Dans le terminal, les arguments sont séparé d'un espace, si vous voulez une chaine de caractére, mettez la entre ""
**/



const monNom = process.argv[2];

if(monNom){
    console.log(monNom);
}else{
    console.log("Entre un nom bitch");
}
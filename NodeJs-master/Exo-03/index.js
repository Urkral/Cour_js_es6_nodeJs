const { catAge }= require("./catAge");
const { humanAge }= require("./catAge");
const { test }= require("./emoji");
console.log("Votre chat à ",catAge(9),"année humaine")
console.log("Vous avez ",humanAge(18),"année chat")
console.log(test());
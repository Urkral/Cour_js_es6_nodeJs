// on importe le module qui s'apelle util 
const monModule = require("util");
//en ES6 ce serait comme ceci : 
//import monModule from "util"

const obj = {
    a:{
        b:{
            c:{
                d:{

                }
            }
        }
    }
}

console.log(monModule.inspect(obj,true, Infinity,true));
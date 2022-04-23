/* -------------------------------------------------------------------------- */
/*                                    .find                                   */
/* -------------------------------------------------------------------------- */

const users = [
    {
    id:1,
    name: "Aurélie"
    },
    {
    id:2,
    name: "Patrick"
    },
    {
    id:3,
    name: "Andy"
    },
    {
    id:4,
    name: "Lucas"
    },
    {
    id:5,
    name: "Bwajamin"
    },
]

// let user;
// for(let i = 0, j = users.length; i <j ; i++){
//     if(users[i].name == "Bwajamin"){
//         user = users[i]
//         break
//     }
// }console.log(user);

/* -------------------------------------------------------------------------- */
/*                              nouvelle methode                              */
/* -------------------------------------------------------------------------- */

let user = users.find(function(user){
    return user.name == "Bwajamin"
})
console.log(user);

// retrouve moi le user en entier si (return) le user.name est Bwajamin

/* -------------------------------------------------------------------------- */
/*                                  FindIndex                                 */
/* -------------------------------------------------------------------------- */

let userIndex = users.findIndex(function(user){
    return user.name == "Bwajamin"
})
console.log(userIndex);
console.log("--------------------");
/* -------------------------------------------------------------------------- */
/*                                some & every                                */
/* -------------------------------------------------------------------------- */
const ages = [24,10,11];


let adultPresent =  false;
for (let i = 0, j = ages.length; i < j ; i++) {
    if (ages[i] >= 18) {
        adultPresent = true
    }
}console.log(adultPresent);

/* -------------------------------------------------------------------------- */
/*                               version esnext                               */
/* -------------------------------------------------------------------------- */
console.log("--------------------");
let adultPresent2 = ages.some(function(age){
    return age >= 18;
})
console.log(adultPresent2);
// some et every ne se font que sur true et false
/* -------------------------------------------------------------------------- */
/*                  est ce que tous le monde à l'âge de boire                 */
/* -------------------------------------------------------------------------- */

// let oldEnough = true;

// for(let i = 0, j = ages.length; i < j ; i++){
//     if(ages[i] < 11){
//         oldEnough = false;
//     }
// }
// console.log(oldEnough);

/* -------------------------------------------------------------------------- */
/*                                   esnext                                   */
/* -------------------------------------------------------------------------- */
console.log("--------------------");
let oldEnough = ages.every(function(age){
    return age > 11;
})
console.log(oldEnough);
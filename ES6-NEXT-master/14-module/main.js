import {User, createA} from './user.js';


import aure, {url as blog, myUrl as monUrl} from './config.js';

const newUser = User("Patrick","patrick@gmail.com","https://patladetraque.eu")
console.log(newUser);

console.log(blog);
console.log(createA(blog));
console.log(newUser.username);

console.log(monUrl());
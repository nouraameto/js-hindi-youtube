// Perimitive 

/* 7 typers

1: String 
2: Number
3: Booleaen 
4: null is meaning empty 
5: undefined 
6: Symbol 
7: BigInt 

*/
const score = 100;
const scoreValue = 32.34;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail; 

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id);
console.log(anotherId);
console.log(id === anotherId);

const bigNumber = 23433443567755778866223n 
// Referance (Non Primitive)
/* 
1: Array 
2: Objects 
3: Functions 
*/

const heros = ["iman", "naagra", "doga"];

let myObj = {
    name: "noura",
    age: 21,
}
const MyFunction = function() {
    console.log("Hello World");
}
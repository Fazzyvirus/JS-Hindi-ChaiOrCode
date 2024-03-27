// Primitive Data Types

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
// const score:Number = 100 - using in typescript
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// to declare symbol
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 4343432143435464343242324534n

// console.log(bigNumber);


// Reference Type (Non Primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Faisal",
    age: 22
}
const myFunction = function () {
    console.log("hello world");
}


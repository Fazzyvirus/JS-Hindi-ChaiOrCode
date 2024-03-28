const name = "Faisal"
const repoCount = 50
// console.log(name + repoCount + " Value"); // do not use this syntax as its old

// console.log(`Hello My Name is ${name} and my repo count is ${repoCount}`); // use this way to concadinate

const gameName = new String('Faisalfj') // correct way to declare string

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'));

const gameName1 = new String('Faisalf-j')
const newString = gameName1.substring(0, 4) // negative value ni de skte
// console.log(newString);

const anotherString = gameName1.slice(-8, 4) // negative value de skte hai
// console.log(anotherString);

const newStringOne = "    Faisal    "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // trim the whitespaces

const url = "https://hitesh.com/hitesh%20choudhary" // browser will convert the space in %20

// console.log(url.replace('%20', '-'));

// console.log(url.includes('hitesh'));
// console.log(url.includes('faisal'));
const gameName2 = new String('Faisalf-j-f-j-j-k')
console.log(gameName2.split('-'));
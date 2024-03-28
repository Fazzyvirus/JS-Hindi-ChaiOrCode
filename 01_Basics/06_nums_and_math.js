/* ++++++++++++ Numbers ++++++++++ */
const score = 400
const balance = new Number(100)
// console.log(score);
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // decimal k baad kitne point tk show krna hai uske liye fixed use krte h
const otherNumber = new Number(23.8933)
// console.log(otherNumber.toPrecision(3)); // precision use hota hai total value pr focus krne pe from the begining
// console.log(otherNumber.toPrecision(5)); // agr aage ki 5 se km hai to ye decimal k baad count krta hai precise krne k liye 
// console.log(otherNumber.toPrecision(2));

const hunderds = 1000000
// console.log(hunderds.toLocaleString()); // by default us k hisab se krta h
// console.log(hunderds.toLocaleString('en-In')); // indian k hisab se comma lgega

/* ++++++++++++ Maths ++++++++++ */

// console.log(Math);
// console.log(Math.abs(-4)); // to convert negative value to positive
// console.log(Math.round(4.6)); // to round off the value
// console.log(Math.ceil(4.2)); // zara sa bh agr 4 se zada hua to wo 5 le lega
// console.log(Math.floor(4.2)); // zara sa bh agr 4 se zada hua to wo 4 le lega bhale hi 4.9 leliya jae

// console.log(Math.min(3,5,7,9));
// console.log(Math.max(3,5,7,9));
// console.log(Math.random()); // agr range ni set krenge to value 0 or 1 k bich hi aegi
// console.log(Math.random()*10 + 1); // minimum val ko 0 se bada krne k liye + 1 kr dia
// console.log((Math.random()*10) + 1); 
// console.log((Math.floor(Math.random()*10) + 1));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min);


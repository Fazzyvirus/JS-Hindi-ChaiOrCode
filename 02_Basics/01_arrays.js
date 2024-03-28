// Array

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[4]);

const myHeros = ["shaktiman", "nagraj"]
const myArr2 = new Array(1, 2, 3, 4)

// Array Methods
// myArr.push(6)
// console.log(myArr);
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(0) // add the new val in start
// console.log(myArr);
// myArr.unshift(9)
// console.log(myArr);
// myArr.shift() // remove the first val from array
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)); // will give output as - because it doesn't exist

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// Slice or Splice

console.log("A ", myArr);

const myNewArr1 = myArr.slice(1, 3)

console.log(myNewArr1);
console.log("B ", myArr);

const myNewArr2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myNewArr2);


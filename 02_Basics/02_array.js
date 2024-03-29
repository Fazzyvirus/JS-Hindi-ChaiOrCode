const marvelHeros = ["spiderman", "thor", "ironman"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros) // wrong way to merge array
// console.log(marvelHeros); // it took the second array as index

marvelHeros.concat(dcHeros) // also wrong way to concat must take in a variable
// console.log(marvelHeros); 

// const allHeros = marvelHeros.concat(dcHeros)  // correct way to concat arrays
// console.log(allHeros);

// const allNewHeros = [...marvelHeros, ...dcHeros] // Spread operator to merge arrays
// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity) // to merge the array need to mention depth on place of infinity
// console.log(realAnotherArray);

// console.log(Array.isArray("Faisal")); // to check in boolean
// console.log(Array.from("Faisal")); // to convert in array
// console.log(Array.from({name: "Faisal"})); // interesting because it will give blank array because its confuse ki keys ka array banana hai ya value ka

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
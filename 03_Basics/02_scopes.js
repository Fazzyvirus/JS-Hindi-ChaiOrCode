// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner: " + a);
}

// console.log(a);
// console.log(b);

// Nested Scope

// function one(){
//     const username = "faisal"

//     function two(){
//         const website = 'Youtube'
//         // console.log(username);
//     }
//     // console.log(website);

//     two()
// }
// one()

if (true) {
    const username = "faisal"
    if (username === "faisal") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++ interesting +++++++++++++++++++
console.log(addOne(5)); // returns the result
function addOne(num) {
    return num + 1
}

console.log(addTwo(5)); // it is giving error because we store the fun in variable

const addTwo = function(num){
    return num + 2
}

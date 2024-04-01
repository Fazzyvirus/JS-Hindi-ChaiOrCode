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

function one(){
    const username = "faisal"

    function two(){
        const website = 'Youtube'
        console.log(username);
    }
    // console.log(website);

    two()
}
one()
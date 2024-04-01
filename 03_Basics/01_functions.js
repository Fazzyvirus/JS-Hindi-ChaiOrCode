// console.log("F");
// console.log("a");
// console.log("i");
// console.log("s");
// console.log("a");
// console.log("l");

// function sayMyName() {
//     console.log("F");
//     console.log("a");
//     console.log("i");
//     console.log("s");
//     console.log("a");
//     console.log("l");
// }
// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);   
// }
// addTwoNumbers("3", 4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)
// const result = addTwoNumbers(3, 5)
// console.log(result); // will give undefined that is wrong

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    // console.log("hitesh") // it will not print because after return nothing print   
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log(result); // now it will print as return is mentioned in the function

// function loginUserMsg(username){
//     return `${username}, just logged in`
// }

// console.log(loginUserMsg("Faisal")); // we are using console log because to priunt the return
// console.log(loginUserMsg()); // will give undefined, just logged in
function loginUserMsg(username){
    if (username === undefined) { // also we can use !username in condition like (!username)
        console.log("Please enter username");
        return
    }
    return `${username}, just logged in`
}
// console.log(loginUserMsg("Faisal"));
// console.log(loginUserMsg());

function calculateCartPrice(...num1){ // "..." is known as rest operator to gather all the value
    return num1
}
// console.log(calculateCartPrice(200, 400, 500));


function calculateCartPrice1(val1, val2, ...num1){ // num1 will hold other than given value like val1 val2 will take initial 2 values and other will comes under num1
    return num1
}
// console.log(calculateCartPrice1(200, 400, 500, 2000));

// const user = {
//     username: "faisal",
//     price: 200
// }
// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject(user);

// handleObject({
//     username: "sam",
//     price: 299
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 600, 100, 500, 600]));
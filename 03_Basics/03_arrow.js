const user = {
    username: "Faisal",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this);
// function chai() {
//     let username = "faisal"
//     console.log(this.username); // undefined
// }
// chai()
//  const chai = ()=>{
//     let username = "Faisal"
//     console.log(this);
//  }
//  chai()
// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4)); 

// implesit return
// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2) // to return object use parenthesis ()

console.log(addTwo(3,5));
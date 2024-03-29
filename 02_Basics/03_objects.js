// Singleton => jab koi construction se object banate hai means ye apne trh ka bs yahi obj hai
// Object.create => like constructor


// object literals me  keys always act like string like "name" but we write as name

const mySym = Symbol("key1")

const jsUser = {
    name: "Faisal",
    "full name": "Faisal Jameel",
    [mySym]:"mykey1", // to use it as symbol we use square bracket
    age: 20,
    location: "Lucknow",
    email: "Faisal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]); // we use this method because we are unable to use the above method because if we use keys like full name we won't be able to access it by using jsuser.full name
// console.log(jsUser["full name"]);

// console.log(jsUser.mySym); // will give undefined
// console.log(jsUser[mySym]); // to print value of symbol

jsUser.email = "jameel@google.com" // to overwrite values
// console.log(jsUser["email"]); //  need to use this method to print always

// Object.freeze(jsUser) // to freeze the values
jsUser.email = "fj@google.com"  
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
}
jsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greeting2());


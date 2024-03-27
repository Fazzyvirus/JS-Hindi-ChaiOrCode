const accountId = 144553
let accountEmail = "faisal@gmail.com"
var accountPassword = "12345" //prefer not to use var
accountCity = "Lucknow" //wrong way
let accountState;
// accountId = 2  //not allowed to change const value
accountEmail = "fj@fj.com"
accountPassword = "54321"
accountCity = "Jaipur"

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

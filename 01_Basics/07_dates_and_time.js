// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23) // Javascript me month 0 se shuru hote hai means 0 => January
// console.log(myCreatedDate.toDateString());
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());
let myCreatedDate3 = new Date("2023-01-14") // yy mm dd
// console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now() // similar to new Date we could use Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate3.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

let printDate = newDate.toLocaleString('default', {
    weekday: "short",
})
console.log(printDate);
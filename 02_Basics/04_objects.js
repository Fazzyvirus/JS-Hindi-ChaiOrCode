const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Faisal",
            lastName: "Jameel"
        }
    }
}
// console.log(regularUser.fullName.userfullname.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj5 = {5:"c", 6:"d"}

// const obj3 = {obj1, obj2} // will not merge the objects
// const obj3 = Object.assign(obj1, obj2, obj5)
// const obj4 = Object.assign({}, obj1, obj2, obj5)
// console.log(obj3);
// console.log(obj4);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// jab database se value aegi

const users = [
    {
        id:1,
        emai:"h@gmail.com",
    },
    {
        id:2,
        emai:"i@gmail.com",
    },
    {
        id:3,
        emai:"j@gmail.com",
    },
]
// console.log(users[1].emai); 

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // provides the result as array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // to check if property is avail or not

// destructuring

const course = {
    name:"jsInHindi",
    price: 999,
    courseInstructor: "Hitesh"
}
// console.log(course.courseInstructor);

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course // we can change the name to short by destructuring
console.log(instructor);

// little React example
// const navbar = ({company}) => {

// }
// navbar(company = "Hitesh")

// ++++++++++++ APIs +++++++++++++++++++++

// Json->
// https://api.github.com/users/hiteshchoudhary

// {
//     "name": "hitesh",
//     "courseName": "jsinhindi",
//     "price": "free"
// }

// Json in array
[
    {},
    {},
    {}
]
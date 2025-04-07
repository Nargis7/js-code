// const tinderUser = new object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "nargis",
            lastname: " perween"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));//[ '123abc', 'sammy', false ]
// console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// true

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh"
}

const {courseinstructor: instructor} = course

// console.log(courseinstructor);
console.log(instructor);

//json JSON stands for JavaScript Object Notation. It’s a lightweight data format used to store and exchange data.
// {
//     "name": "Alice",
//     "age": 25,
//     "isStudent": true
//   }
// t's used a lot in web development to send data between a server and a client (like your browser).

// Easy to read for humans and easy to parse for machines.
// api
// API stands for Application Programming Interface. It’s a way for different software applications to talk to each other.

// 🛠️ Think of it like:
// A menu in a restaurant.

// The menu (API) tells you what you can order (functions/data you can request).

// You place your order (make a request), and the kitchen (server) sends you the dish (response).

// 💻 In programming:
// You might use an API to get weather data, user info, or send messages, etc.

// APIs often send/receive data in JSON format.
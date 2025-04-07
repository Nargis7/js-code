// singleton

// object literals
//An object is a collection of key-value pairs. You can think of it like a real-world object — for example, a person has a name, age, and hobbies — all of these can be stored as properties inside a JavaScript object.

const mysym = Symbol("key1")

const JsUser = {
    name: "Nargis",
    [mysym]: "mykey1",
    age: 20,
    location: "jamshedpur",
    isStudent: true,
    email: "nargis@google.com"
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// Bracket Notation:
// console.log(JsUser["age"]);
// console.log(typeof JsUser.mysym);
// console.log(JsUser[mysym]);


JsUser.email = "nargis@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "nargis@microsoft.com"
// console.log(JsUser);
// nargis@google.com
// 20
// undefined
// {
//   name: 'Nargis',
//   age: 20,
//   location: 'jamshedpur',
//   isStudent: true,
//   email: 'nargis@chatgpt.com',
//   [Symbol(key1)]: 'mykey1'
// }
JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
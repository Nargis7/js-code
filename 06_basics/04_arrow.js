// when we use arrow function, we don't need to use the return keyword
// // Example usage:
// 1. You Need a Concise Syntax:
// Arrow functions are shorter and easier to write, especially for simple operations or one-liners.
const add = (a, b) => a + b;
console.log(add(5, 10)); // Output: 15

/* 2 You Want to Preserve the this Context:
Arrow functions do not have their own this. They inherit this from the surrounding lexical scope, making them ideal for callbacks or methods where you want to avoid manually binding this.*/
function Person(name) {
    this.name = name;
    setTimeout(() => {
        console.log(`Hello, ${this.name}`); // `this` refers to the Person object
    }, 1000);
}
const person = new Person("John"); // Output: Hello, John

/* 3. You Don’t Need the arguments Object:
Arrow functions do not have their own arguments object. Use them when you don’t need to access arguments directly.*/
const greet = () => console.log("Hello, World!");
greet(); // Output: Hello, World!

/* 4. For Callbacks:
Arrow functions are great for callbacks because they are concise and automatically bind the surrounding this.*/
const numbers = [1, 2, 3];
const squares = numbers.map(x => x * x);
console.log(squares); // Output: [1, 4, 9]

/* When Not to Use Arrow Functions:
When you need a function with its own this (e.g., in object methods or constructors).
When you need the arguments object.*/
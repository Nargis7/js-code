// primitive
// 7 types : string,numbers, boolean,null,undefined,symbol, bigint
// The Number data type in JavaScript includes both integers and floating-point numbers. Special values like Infinity, -Infinity, and NaN represent infinite values and computational errors, respectively.
// let s1 = "Hello There";
// console.log(s1); 

// let s2 = 'Single quotes work fine';
// console.log(s2); 

// let s3 = `can embed ${s1}`;
// console.log(s3); 
// A String in JavaScript is a series of characters that are surrounded by quotes




// let n1 = 2;
// console.log(n1)

// let n2 = 1.3;
// console.log(n2)

// let n3 = Infinity;
// console.log(n3)

// let n4 = 'something here too' / 2;
// console.log(n4)


// The boolean type has only two values i.e. true and false.
// let b1 = true;
// console.log(b1);  

// let b2 = false;
// console.log(b2);  

// It forms a separate type of its own which contains only the null value.
// let age = null;
// console.log(age)


// A variable that has been declared but not initialized with a value is automatically assigned the undefined value. It means the variable exists, but it has no value assigned to it.
// let a;
// console.log(a);

// Symbols, introduced in ES6, are unique and immutable primitive values used as identifiers for object properties. They help create unique keys in objects, preventing conflicts with other properties.
// let s1 = Symbol("Geeks");
// let s2 = Symbol("Geeks");
// console.log(s1 == s2); //false
  




// reference(non primitive)
// Array = object, objects, function

// javaScript objects are key-value pairs used to store data, created with {} 
let myinfo = {
    type: "company",
    location: "jamshedpur"
}
// console.log(myinfo.type);

// An Array is a special kind of object used to store an ordered collection of values, which can be of any data type.
let a1 = [1, 2, 3, 4, 5];
// console.log(a1);

// function
// Defining a function to greet a user
function greet(name) { return "Hello, " + name + "!"; }
// Calling the function
console.log(greet("Ankit"));

console.log(typeof greet)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack(primitive) , heap(non primitive)
let n1 = 10;
let n2 = n1;
n2 = 20;
console.log(n1); // 10 (remains unchanged)
// Here, n1 and n2 are stored in the stack, and n2 gets a copy of a’s value.

let obj1 = { name: "Ajay" };
let obj2 = obj1;
obj2.name = "Vijay";
console.log(obj1.name); // "Vijay"
// Here, obj1 and obj2 reference the same memory location in the heap. // original value
//arrays
//An array is a special variable, which can hold more than one value: enables storing a collection of multiple items under a single variable name,
const cars = ["saab" , "volvo", "BMW"]
// console.log(cars[0]);
// console.log(cars[1]);
//array methods
// The push() method adds a new element to an array (at the end):
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
fruits.pop();//The pop() method removes the last element from an array
// fruits.unshift("litchi")
// fruits.shift()
// console.log(fruits.includes("litchi")) //false
// console.log(fruits.indexOf("litchi")) //-1

const newArr = fruits.join()

// console.log(fruits);
// console.log(newArr);
// console.log(typeof newArr) //string
// console.log(fruits.length);

//slice , spice
console.log("A", fruits);
const myn1 = fruits.slice(1,3) // not include 3
console.log(myn1);
console.log("B", fruits);

const myn2 = fruits.splice(1,3)
console.log(myn2);

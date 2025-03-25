const score = 700
// console.log(score);

const balance = new Number(2000)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(3));

const otherNumber = 23.5677
// console.log(otherNumber.toPrecision(3))

const secondNumber = 123.879
// console.log(secondNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++
// console.log(Math); //
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2));//5
// console.log(Math.floor(4.9));//4
// console.log(Math.min(0, 150, 30, 20, -8, -200));

console.log(Math.random());
// Math.random() → A built-in JavaScript function that generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
// Example output: 0.547812345, 0.9999999, 0.0034567, etc.
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);
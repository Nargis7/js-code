// reduce method
let arr = [1,2,3,4];
 let output = arr.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});

console.log(output); // Output: 10

// to find maximum value
const numbers = [10, 20, 30, 40, 50];
const max = numbers.reduce((accumulator, currentValue) => {
    return currentValue > accumulator ? currentValue : accumulator;
});

console.log(max); // Output: 50
/* First iteration:

accumulator = 10, currentValue = 20

Is 20 > 10? → Yes → Return 20

Second iteration:

accumulator = 20, currentValue = 30

Is 30 > 20? → Yes → Return 30

Third iteration:

accumulator = 30, currentValue = 40

Is 40 > 30? → Yes → Return 40
Fourth iteration:

accumulator = 40, currentValue = 50

Is 50 > 40? → Yes → Return 50

At the end of the loop, the maximum value is 50, and that gets stored in the variable max.*/
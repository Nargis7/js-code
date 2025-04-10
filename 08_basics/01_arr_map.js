// map method
let nums = [1, 2, 3, 4, 5,6,7,8,9,10];
nums.map((value)=>{
    // console.log(value);
});
/* What map Does:

The map method creates a new array by applying a function to each element of the original array.
It does not modify the original array.*/

let numbers = [24, 25, 26, 27, ];
let squares = numbers.map((value)=>{
    return value;
});
console.log(squares); // Output: [24, 25, 26, 27, 28, 29, 30]

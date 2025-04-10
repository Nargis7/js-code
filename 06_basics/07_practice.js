// for a given array of number, print the square of each value using foeach loop
let numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
numbers.forEach((value)=>{
    // console.log(value*value);
    console.log(value**2);
});

let nums = [1, 2, 3, 4, 5,6,7,8,9,10];
let calcSquare = (nums) => {
    console.log(nums**2);
};

nums.forEach(calcSquare);
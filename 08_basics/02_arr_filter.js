// filter method
/* What filter Does:

The filter method iterates over each element in the array.
It applies the callback function to each element.
If the callback function returns true, the element is included in the new array.*/
// return even value
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = arr.filter((value)=>{
    return value %2===0;
});

// console.log(newArr);

// return odd value
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr1 = arr.filter((value)=>{
    return value %2!==0;
});

// console.log(newArr1);


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr2 = arr.filter((value)=>{
    return value >=3;
});

console.log(newArr2);
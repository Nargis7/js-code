// for each loop
const name = ["John", "Jane", "Jack"];
name.forEach(function(value){
    // console.log(value);
});

let arr = [1, 2, 3, 4, 5];
arr.forEach((value)=>{
    // console.log(value);
});

let cities = ["New York", "Los Angeles", "Chicago"];
cities.forEach((value,idx, arr )=>{
    console.log(value.toUpperCase() , idx, arr );
});
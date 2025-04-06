// Example (Merging Two Arrays)
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const Children = arr1.concat(arr2, arr3);
console.log(Children);

// The flat() method creates a new array with sub-array elements concatenated to a specified depth
const myArr = [[1,2],[3,4],[5,3,6]];
const newArr = myArr.flat();
console.log(newArr)
// All JavaScript objects have a toString() method.
console.log(Array.isArray("Nargis")) // false
console.log(Array.from("Nargis")); //[ 'N', 'a', 'r', 'g', 'i', 's' ]
console.log(Array.from({name:"nargis"}));//[]

let score1 = 100
let score2 = 300
let score3 = 400

console.log(Array.of(score1,score2,score3));

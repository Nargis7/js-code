// for in loops
let student = {
    name: "rahul",
    age:20,
    cpa:7.5,
    isPass: true
};

// for(let i in student){
//     console.log("i = ",i);
// }
/*i =  name
i =  age
i =  cpa
i =  isPass */

for(let key in student){
    console.log("key = ",key, " value" , student[key]);
}
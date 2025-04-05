// Dates
let myDate = new Date()
// console.log(myDate); //2025-04-05T05:38:53.578Z
// console.log(myDate.toString()); //Sat Apr 05 2025 05:42:10 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Sat Apr 05 2025
// console.log(myDate.toLocaleDateString()); //4/5/2025
// console.log(myDate.toISOString());
// console.log(typeof myDate); // object

// let D = new Date(2025, 3, 5 )
// console.log(D.toDateString());//Sat Apr 05 2025
const date3 = new Date(2025, 3, 5, 14, 30);/// year, month, day, hour, min
// console.log(date3.toLocaleString()); ///
const date4 = new Date("04-05-2025"); //mm-dd-yy
// console.log(date4.toLocaleString());
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(date4.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());


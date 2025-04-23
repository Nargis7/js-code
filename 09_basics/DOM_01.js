//selecting with id:document.getElementById("myid")
// let button = document.getElementById("myid")
// console.dir(button);


// selecting with class:document.getElementsByClassName("myclass")
// let headings= document.getElementsByClassName("myclass") //html collection
// console.dir(headings);
// console.log(headings);


// selecting with tag:document.getElementsByTagName("p")
// let para = document.getElementsByTagName("p")
// console.dir(para);

// ++++++++++++++++++query selector++++++++++++++++++++++=

/* query selector return node */ 

let firstEl = document.querySelector("p"); // returns first element
// let firstEl = document.querySelector(".myclass"); // returns first element with class myclass
// let firstEl = document.querySelector("#myId"); // returns first element with class myclass
console.dir(firstEl);

// let allEl = document.querySelectorAll("p"); // returns a node list
// let allEl = document.querySelectorAll(".myclass"); // returns a node list of all elements with class myclass
// console.dir(allEl)




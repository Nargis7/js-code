/* Global Variables:
Definition: A global variable is declared outside any function and is accessible throughout the entire script, including inside functions.
Scope: Available everywhere in the code.
*/
// // example of global variable
let x = 10; // global variable
function myFunction() {
    console.log(x); // 10 (x is accessible here)
}
myFunction(); // Call the function
console.log(x); // 10 (x is accessible here as well)
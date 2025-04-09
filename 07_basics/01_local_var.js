/* Local Variables:
Definition: A local variable is declared inside a function and is accessible only within that function.
Scope: Limited to the function where it is defined.*/
// example of local variable
function myFunction() {
    let x = 10; // local variable
    console.log(x); // 10
}
myFunction(); // Call the function
// console.log(x); // Error: x is not defined (x is a local variable and cannot be accessed outside the function)
// example of global variable
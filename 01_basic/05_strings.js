// let name = "nargis"
let repcount = 37
// Template Literals (String Interpolation)
// You can create strings using Template Literals. Template literals allow you to embed expressions within backticks (`) for dynamic string creation, making it more readable and versatile.

// console.log(`Hello my name is ${name} and my rep count is ${repcount}`);

const gameName = new String('Nargis')

// console.log(gameName[0]);
// console.log(gameName[4]);
// console.log(gameName.charAt(2));
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('g'));

// slice() extracts a part of the string based on the given stating-index and ending-index and returns a new string.
// Define a string variable 
let A = 'Geeks for Geeks';

// Use the slice() method to extract a substring
let b = A.slice(0, 5);
let c = A.slice(6, 9);
let d = A.slice(10);

// Output the value of variable
// console.log(b);
// console.log(c);
// console.log(d);

// substring() returns the part of the given string from the start index to the end index. Indexing starts from zero (0).
// Define a string variable
// let str = "Mind, Power, Soul";

// Use the substring() method to extract a substring 
// let part = str.substring(6, 11);

// Output the value of variable
// console.log(part);


// Define a string variable 'str' 
// let str = "Ankit, power, Mishra";

// Use the replace() method to replace the substring
// let part = str.replace("power", "Kumar");

// Output the resulting string after replacement
// console.log(part);


// replaceAll() returns a new string after replacing all the matches of a string with a specified string or a regular expression. The original string is left unchanged after this operation.
// Define a string variable 'str'
let newstr = "Mind, Power, Power, Soul";

// Use the replaceAll() method to replace all occurrences
//of "Power" with "Space" in the string 'str'
let newpart = newstr.replaceAll("Power", "Space");

// Output the resulting string after replacement
// console.log(newpart);

// trim() is used to remove either white spaces from the given string. This method returns a new string with removed white spaces. This method is called on a String object. This method doesn’t accept any parameter.
// let gfg = '  GFG    ';
// let geeks = 'stands-for-GeeksforGeeks';
// console.log(gfg);
// console.log(gfg.trim());
// console.log(gfg.length);

// trimStart() removes whitespace from the beginning of a string. The value of the string is not modified in any manner, including any whitespace present after the string.
// Define a string variable 
// let str = "  Soul";

// Output the original value of the string 
// console.log(str);

// Use the trimStart() method to remove leading whitespace from the string 'str'
// let part = str.trimStart();

// Output the resulting string after removing leading whitespace
// console.log(part);


// trimEnd() removes white space from the end of a string. The value of the string is not modified in any manner, including any white-space present before the string.
// Define a string variable 
let str = "Soul  ";

// Output the original value of the string 'str'
console.log(str);

// Use the trimEnd() method to remove trailing whitespace from the string 'str'
let part = str.trimEnd();

// Output the resulting string after removing trailing whitespace
// console.log(part);



// // Define a string variable
// let name = 'nargis';

// Define another string variable 
let college = 'stands-for-GeeksforGeeks';

// Convert the string 'geeks' to uppercase using the toUpperCase() method
// console.log(geeks.toUpperCase());


// concat
let name1 = 'AKM ';
let name2 = 'stands for Ankit Kumar Mishra';

// Accessing concat method on an object
// of String passing another object 
// as a parameter
// console.log(name1.concat(name2));

// split() splits the string into an array of sub-strings. This method returns an array. This method accepts a single parameter character on which you want to split the string.
let gfg = 'GFG '
let geeks = 'stands-for-GeeksforGeeks'

// Split string on '-'. 
console.log(geeks.split('-'))






// create a function using the function keyword that takes a string as an argument and returns the number of vowels in the string
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
// Example usage:
// const inputString = "Hello, World!";
// const vowelCount = countVowels(inputString);
// console.log(`The number of vowels in "${inputString}" is: ${vowelCount}`); // Output: 3
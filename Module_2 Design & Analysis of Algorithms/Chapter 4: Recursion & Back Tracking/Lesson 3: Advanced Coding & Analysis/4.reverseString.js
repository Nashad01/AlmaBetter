/*
Write a function that reverse a string. The input string is 
given as an array of characters s and output is string.
*/

//Traditional Solution
/*
function reverseString(str){
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString('abcd'));
*/

//Optimized Solution
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("asdf"))
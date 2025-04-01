// const regex = /apple/gi;
// const str = "I have a red apple and green apple.";
// const newStr = str.replace(regex, "banana");
// console.log(newStr);
/*
const regex = /[,\s]+/; // Matches commas and spaces
const str = "apple, banana, grape kiwi";
const fruitArray = str.split(regex) 
console.log(fruitArray);
*/

// Date: 29/Jan/2025 | Video Lecture: Introduction to Pattern Matching

let regex = /bat/g
let str = "this is my bat"
// console.log(regex.test(str))

// ----Date: 06/Feb/2025 

const emailStr = "example@gmail.com"
const emailRegex = /[a-zA-Z0-9]+[@]{1}[a-z]+[\.][a-z]/
// console.log("Line 22:", emailRegex.test(emailStr))

// ----Date: 08/Feb/2025

// ------replace method 
const strReplace = "I have fruit which named is apple"
const RegexReplace = /apple/;
const newStr = strReplace.replace(RegexReplace,"Pino")
// console.log("Line No. 29:",newStr)

// --------split method
const strSplit = "apple, banana,   orange, mango"
const RegexSplit = /[,\s]+/; 
const fruitArray = strSplit.split(RegexSplit)
// console.log(fruitArray)

// Naive String Matching Algorithm
/* The Naive String Matching Algrithm is the one of the
simplest approach to find the occurance in the given pattern
within a larger text (main string). It works by comparing 
each character of pattern with each character of main string,
character by character, starting from every position from 
main string.
*/ 
function naiveStringMatch(mainString, pattern){
    const n = mainString.length;
    const m = pattern.length;
    const occurrences = []
    for(let i=0; i<=n-m; i++){
        let j;
        for(j=0; j<m; j++){
            if(mainString[i+j] !== pattern[j]){
                break;
            }
        }
        if(j===m){
            occurance.push(i);
        }
    }
    return occurrences;
}

//Example usage;
const mainString = "ABABABCABABABC"
const pattern = "ABABC"
console.log(naiveStringMatch(mainString, pattern))


let players = [
    { name: "Dhoni", age: 30 },
    { name: "Gambhir", age: 31 },
    { name: "Sehwag", age: 33 }
  ];

  // console.log(players);
  
  //Map
  // let myArray = [1, 2, 3];
  // let newArray = myArray.map(function(element){
  //   return element * 5;
  // })
  // console.log(newArray);
  
  let fruits = ["apple", "banana", "orange", "kiwi"];

  // for (let i = 0; i < fruits.length; i++) {
  //   console.log(fruits[i]);
  // }
  // console.log(fruits);

//-------------------------------------------//

  /* The below concept of slice and splice is studied from Chai aur Code Youtube Channel video 14
  // slice, splice

  const myArr = [0, 1, 2, 3, 4, 5]
  console.log("A", myArr);
  
  const myn1 = myArr.slice(1, 3)

  console.log(myn1);
  console.log("B", myArr); 

  const myn2 = myArr.splice(1, 3)
  console.log("C", myArr); // Splice modifies the original Array in which it exclude input values.
  console.log(myn2);
  */

//-------------------------------------------//

//Date 28/Jan/2025 from video "Introduction to Pattern Matching" 

// Splice 
/*
let myArray = ["apple", "banana", "orange"]
myArray.splice(1, 1, "pier", "watermelon")

console.log(myArray)
*/

//filter 
/*
let myArray = [1,2,3,4,5]
let newArray = myArray.filter(function(element){
  return element % 2 === 1;
})
console.log(newArray);
*/

//Map
/*
let myArray = [1,2,3,4,5]
let newArray = myArray.map(function(element){
  return element * 5;
})
console.log(newArray)
*/

//------------------------------------------------

function removeSpaces(string) {
  let newString = ""; // blank sting
  console.log((string.length));
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " "){
      newString += string[i]
    };
    
  }
  return newString;
}

const string = "Hello,    there!";
const newString = removeSpaces(string)

console.log(newString)
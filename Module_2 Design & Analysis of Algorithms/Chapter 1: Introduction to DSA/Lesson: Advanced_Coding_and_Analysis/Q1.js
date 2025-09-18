// Ques.1 Find the maximum element in an array.
//Tradition Solution 
//Time Complexity: O(n)
//Space Compexity: O(1)
/*
function findMaxElement(arr){
  let max = arr[0];
  for (let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}
console.log(findMaxElement([3,6,8,4,5,14]))
*/

// Date: 06/04/2025

//Traditional Solution
/*
function findMaxElement(arr){
  let max = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max
}

console.log(findMaxElement([3, 6, 8, 4, 5, 9]))
*/

//Opimized Solution
// Time Complexity: O(n)
// Space Complexity: O(1)

function findMaxElement(arr){
  if(arr.length === 0){
    return "Empty Array";
  }
  let max = arr[0]
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}
console.log(findMaxElement([]))


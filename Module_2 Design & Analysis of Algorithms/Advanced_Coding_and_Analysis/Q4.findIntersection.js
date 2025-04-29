// Ques.4 Find intersection of two arrays.

// Traditional Solution

// Time Complexity: O(n * m)
// Space Complexity: O(k)
/*
function findIntersection(arr1, arr2){
    const intersection = [];

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j] && !intersection.includes(arr1[i])){
                intersection.push(arr1[i])
            }
        }
    }
    return intersection;
}

const arr1 = [1,2,3,4,5]
const arr2 = [4,5,6,7,8]
console.log(findIntersection(arr1, arr2))
*/
//---------------------------------------------

/*
// Optimized Solution
function findIntersection(arr1, arr2){
    const set1 = new Set(arr1); //Create a set from arr1
    console.log('Line No. 30:',set1)
    const intersection = [];

    for(let i = 0; i < arr2.length; i++){
        if(set1.has(arr2[i])){
            intersection.push(arr2[i])
            set1.delete(arr2[i]); //Remove the element from set1 to handle duplicates
        }
    }
    return intersection
}

const arr1 = [1,2,3,4,5,6]
const arr2 = [4,5,6,7,8]
console.log(findIntersection(arr1, arr2))
*/

//Date 12/04/2026         **Revision**

//Tradition Solution
//Time Complexity: O(n * m)
//Space Complexity: O(k)

function findIntersection(arr1, arr2){
    const intersection = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j] && !intersection.includes(arr1[i])){
                intersection.push(arr1[i])
            }
        }
    }
    return intersection;
}

const arr1 = [1,2,3,4,5,6]
const arr2 = [4,5,6,7,8]
console.log(findIntersection(arr1, arr2))
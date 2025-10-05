//7. Given an array of integers, find the sum of its elements.

//Traditional Solution
/*
function sumArray(arr){
    if(arr.length === 0){
        return 0;
    }

    return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1,2,3,4,5]))
*/

//Optimized Solution
function sumArray(arr, index = 0){
    if(index === arr.length){
        return 0;
    }

    return arr[index] + sumArray(arr, index + 1)
}

console.log(sumArray([1,2,3,4,5,6]));


//1. Find the First Occurrence of a target element in an array.

//Optimized Solution

function findFirstOccurrence(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while (left <= right){
        const mid = Math.floor((left + right)/2);

        if(arr[mid] === target && (mid === 0 || arr[mid - 1] !== target)){
            return mid;
        }else if(arr[mid] < target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

const arr = [2,4,6,6,6,8,10];
const target = 10;

console.log(findFirstOccurrence(arr, target));
// 3. Recursive Linear Search

function recursiveLinearSearch(arr, target, start = 0){
    if(start >= arr.length){
        return -1; //Target value not found
    }
    if(arr[start] === target){
        return start;
    }
    return recursiveLinearSearch(arr, target, start + 1);
}

console.log(recursiveLinearSearch([3,4,5,7,8,5], 5))
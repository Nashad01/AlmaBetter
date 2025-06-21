function lastOccurrenceLinearSearch(arr, target){
    let lastIndex = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            lastIndex = i; 
            // console.log('in loop', lastIndex)
            break;
        }
    }
    return lastIndex;
}

// Ist Approach
// const arr = [3,2,7,9,0,1,12]
// const target = 12
// console.log(lastOccurrenceLinearSearch(arr, target))

// IInd Approach
console.log(lastOccurrenceLinearSearch([1,11,7,5,6,5], 5))
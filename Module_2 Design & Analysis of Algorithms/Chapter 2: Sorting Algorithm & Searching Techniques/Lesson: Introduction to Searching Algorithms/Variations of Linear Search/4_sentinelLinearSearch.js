function sentinelLinearSearch(arr, target){
    const lastIndex = arr.length - 1;
    const lastValue = arr[lastIndex];
    arr[lastIndex] = target;

    let i = 0;
    while(arr[i] !== target){
        i++;
    }
    arr[lastIndex] = lastValue; //Reset the array to its original state 
    if(i < lastIndex || arr[lastIndex] === target){
        return i;
    }
    return -1; //Target value not found
}
console.log(sentinelLinearSearch([1,11,7,5,6,95], 95))
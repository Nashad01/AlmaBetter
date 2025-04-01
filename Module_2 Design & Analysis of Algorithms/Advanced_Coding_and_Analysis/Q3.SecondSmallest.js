//Ques.3 Find the second smallest element in an array.
//Traditional Solution
/*
function findSecondSmallest(arr){
    const sortedArr = arr.sort((a,b) => a-b);
    const uniqueArr = [...new Set(sortedArr)]
    if(uniqueArr.length < 2){
        return undefined
    }
    return uniqueArr [1]
}
console.log(findSecondSmallest([3,6,8,4,8,9,5]))
*/

//Optimized Solution 
function findSecondSmallest(arr){
    let smallest = Infinity;
    let secondSmallest = Infinity;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] < smallest ){
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest){
            secondSmallest = arr[i];
        }
    }
    if(secondSmallest === Infinity){
        return undefined; //Handle the case when there is no second smallest element 
    }
    return secondSmallest;
}

console.log(findSecondSmallest([3,6,3.5,8,4,9,5]));
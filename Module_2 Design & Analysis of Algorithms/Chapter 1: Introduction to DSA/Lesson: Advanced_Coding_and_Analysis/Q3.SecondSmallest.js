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
/*
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
*/

//Date: 08/04/2025        **Revision**
/*
function findSecondSmallest(arr){
    const sortedArr = arr.sort((a,b) => a - b); //Sort the array in ascending order
    // console.log(sortedArr)
    let s = new Set(sortedArr)
    console.log("Line No. 43:", s)
    // const uniqueArr = [...new Set(sortedArr)]; // Remove duplicate by creating a new array
    const uniqueArr = [...s] // 'Sread Operator' Remove duplicates by creating a new array
    console.log("Line No. 46:", uniqueArr)
    if(uniqueArr.length < 2){
        return undefined; //Handle the case when there is no second smallest element
    }
    return uniqueArr[1]; //Return the second smallest element
}

console.log("Line No. 53:", findSecondSmallest([3,6,8,4,9,5,9,6]))
*/

//Optimized Solution
//Time Complexity: O(n)
//Spalce Complexity: O(1)

function findSecondSmallest(arr){
    let smallest = Infinity
    let secondSmallest = Infinity

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            secondSmallest = smallest;
            smallest = arr[i];
        }else if (arr[i] < secondSmallest && arr[i] !== smallest){
            secondSmallest = arr[i];
        }
    }
    if(secondSmallest === Infinity){
        return undefined; 
    }

    return secondSmallest;
}
console.log(findSecondSmallest([3,2,4,1,9,8,4]))
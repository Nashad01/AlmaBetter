
//Traditional Solution
/*
function sortedSquares(nums){
    const result = [];
    for(let i = 0; i < nums.length; i++){
        result.push(nums[i] * nums[i])
    }
    result.sort((a,b) => a - b);
    return result;
}

console.log(sortedSquares([-4,-2,0,2,4]));
*/


//Optimized Solution
function sortedSquares(nums){
    const result = new Array(nums.length)
    let left = 0;
    let right = nums.length - 1;
    let index = right;

    while(left <= right){
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];
        
        if(leftSquare > rightSquare){
            result[index] = leftSquare;
            left++;
        } else { 
            result[index] = rightSquare;
            right--;
        }

        index--;
    }

    return result;
}

console.log(sortedSquares([-4,-2,0,2,4,10]));


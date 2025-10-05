//10. Given an unsorted array of integer and an integer k, find the kth largest element in the array.

//Tradition Solution 

// function findKthLargest(nums, k){
//     const sortedNums = nums.sort((a,b) => b - a);
//     console.log(sortedNums)
//     return sortedNums[k - 1]   
// }

// console.log(findKthLargest([3,2,1,5,6,4], 2));

// -------------------------------------------------------------
//Optimized Solution 
function findKthLargest_Quickselect(arr, k){
    function partition(arr, low, high){
        const pivot = arr[high];
        let i = low -1;

        for(let j = low; j < high; j++){
            if(arr[j] >= pivot){
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]]; //Swap elemnts
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; //Put pivot in its space
        return i + 1;
    }
    const kthLargestIndex = partition(arr, 0, arr.length - 1, k);

    if(kthLargestIndex === k -1){
        return arr[kthLargestIndex];
    }else if(kthLargestIndex < k - 1){
        return findKthLargest_Quickselect(arr.slice(kthLargestIndex + 1), k - kthLargestIndex - 1)
    }else {
        return findKthLargest_Quickselect(arr.slice(0, kthLargestIndex), k);
    }
}

const arr = [4,1,3,2,5,8]
const k = 3;
const result = findKthLargest_Quickselect(arr.slice(), k)
console.log(result);







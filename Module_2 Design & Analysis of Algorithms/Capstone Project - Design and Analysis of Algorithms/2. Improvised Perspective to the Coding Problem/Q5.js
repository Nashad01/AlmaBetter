/*
Here’s an optimized solution using binary search to find the first and last position 
of the target value in the sorted array. This approach has a time complexity of O(log n) 
as required.

Binary Search Approach

We’ll perform two binary searches:

1. First Binary Search: To find the leftmost (first) occurrence of the target.
2. Second Binary Search: To find the rightmost (last) occurrence of the target.

Here is the updated JavaScript code using the binary search algorithm:
*/

function searchRange(nums, target) {
    // Function to find the leftmost index of the target
    function findLeft(nums, target) {
        let left = 0, right = nums.length - 1;
        let index = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                index = mid;  // Potential answer, but continue searching left
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return index;
    }

    // Function to find the rightmost index of the target
    function findRight(nums, target) {
        let left = 0, right = nums.length - 1;
        let index = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                index = mid;  // Potential answer, but continue searching right
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return index;
    }

    // Find the leftmost and rightmost positions using the helper functions
    let leftIndex = findLeft(nums, target);
    if (leftIndex === -1) {
        return [-1, -1]; // If target is not found
    }
    let rightIndex = findRight(nums, target);
    
    return [leftIndex, rightIndex];
}

/*
Explanation:

1. findLeft function:

We perform a binary search to find the leftmost occurrence of the target. Every time we
find the target at index mid, we store it in index, but continue searching the left 
half (right = mid - 1) to see if there's an earlier occurrence.

2. findRight function:

Similarly, we perform a binary search to find the rightmost occurrence of the target. 
Every time we find the target at index mid, we store it in index, but continue searching 
the right half (left = mid + 1) to see if there's a later occurrence.

3. Binary Search Efficiency:

Both searches have a time complexity of O(log n) since we're using binary search. The 
overall time complexity is O(log n + log n) = O(log n).
*/

/*
Example 1:
let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(searchRange(nums, target));  // Output: [3, 4]

Example 2:
let nums = [5, 7, 7, 8, 8, 10];
let target = 6;
console.log(searchRange(nums, target));  // Output: [-1, -1]


Example 3:
let nums = [];
let target = 0;
console.log(searchRange(nums, target));  // Output: [-1, -1]


This solution efficiently finds the starting and ending positions of the target value in 
the sorted array while meeting the O(log n) time complexity requirement.

*/
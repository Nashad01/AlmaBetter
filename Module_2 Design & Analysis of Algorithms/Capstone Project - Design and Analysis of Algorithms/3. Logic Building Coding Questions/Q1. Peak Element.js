/*
To solve the problem of finding a peak element in an array in O(log n) time, we can use 
a binary search approach. In this approach, we will divide the array into two halves and 
use comparisons to decide which half contains the peak element.

Key Idea:
- If the middle element is greater than its neighbors, then it is a peak element.
- If the middle element is smaller than its left neighbor, the peak must be in the left half.
- If the middle element is smaller than its right neighbor, the peak must be in the right half.
This ensures that we eliminate half of the search space at each step, which gives us the 
logarithmic time complexity.


Approach:

1. Compare the middle element with its neighbors:

- If nums[mid] is greater than both nums[mid - 1] and nums[mid + 1], it is a peak.
- If nums[mid] < nums[mid + 1], the peak must be in the right half.
- If nums[mid] < nums[mid - 1], the peak must be in the left half.

2. Boundary Handling:

- We consider out-of-bound indices (i.e., nums[-1] and nums[n]) as -Infinity, which 
  allows for peak elements at the edges of the array.

  Code Implementation:
*/

var findPeakElement = function(nums) {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        
        // Compare the middle element with its right neighbor
        if (nums[mid] < nums[mid + 1]) {
            // Peak must be in the right half
            low = mid + 1;
        } else {
            // Peak must be in the left half or mid itself
            high = mid;
        }
    }
    
    // When low equals high, we've found a peak
    return low;
};

/*

Explanation:

1. Binary Search:

- Start with low = 0 and high = nums.length - 1.
- Calculate the middle index mid.
- Compare nums[mid] with nums[mid + 1]:
    - If nums[mid] < nums[mid + 1], then move the low pointer to mid + 1 (right half).
    - If nums[mid] >= nums[mid + 1], then move the high pointer to mid (left half).
- Continue narrowing down the search space until low == high, which will give the index 
  of a peak.

2. Time Complexity:

- The binary search reduces the search space by half at each step, leading to a time 
  complexity of O(log n).


  3. Edge Cases:

- If the array contains only one element, it is trivially the peak.
- If the array has two elements, the peak is the one that is greater.
*/

/*
Example Walkthrough:
Example 1:

Input: nums = [1, 2, 3, 1]
Initial: low = 0, high = 3

1st iteration:
mid = 1, nums[mid] = 2, nums[mid + 1] = 3
Since nums[mid] < nums[mid + 1], move low to mid + 1 (low = 2)

2nd iteration:
mid = 2, nums[mid] = 3, nums[mid + 1] = 1
Since nums[mid] >= nums[mid + 1], move high to mid (high = 2)

Now, low == high, so return 2.


Example 2:

Input: nums = [1, 2, 1, 3, 5, 6, 4]
Initial: low = 0, high = 6

1st iteration:
mid = 3, nums[mid] = 3, nums[mid + 1] = 5
Since nums[mid] < nums[mid + 1], move low to mid + 1 (low = 4)

2nd iteration:
mid = 5, nums[mid] = 6, nums[mid + 1] = 4
Since nums[mid] >= nums[mid + 1], move high to mid (high = 5)

Now, low == high, so return 5.

This approach efficiently finds a peak element with logarithmic time complexity.

*/






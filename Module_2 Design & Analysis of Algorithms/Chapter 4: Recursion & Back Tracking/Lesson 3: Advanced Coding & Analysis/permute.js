/*
Given an array nums of distinct integers, return all the 
possible permutations. You can return the answer in any 
order.

Example: 
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Input: name = [0,1]
Output: [[0,1],[1,0]]

Input: nums = [1]
Output: [[1]]
*/

//Solution
//Time Complexity: O(n*n!)
//Space complexity: O(n*n!)

var permute = function(nums){
    const n = nums.length;
    const ans = [];
    const t = [];
    const vis = new Array(n).fill(false)

    function dfs(i){
        if(i >= n){
            ans.push([...t]);
            return;
        }
        for(let j = 0; j < n; ++j){
            if(!vis[j]){
                vis[j] = true;
                t.push(nums[j]);
                dfs(i + 1);
                vis[j] = false; 
                t.pop();
            }
        }
    }

    dfs(0);
    return ans;
}

let nums = permute([1,2,3])
console.log(nums)  //Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

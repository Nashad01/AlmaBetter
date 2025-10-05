/*
11. Given two integer arrays nums2 and nums2, return an
    array of their intersection. The intersection is the set
    of elements that appear in both arrays, in any order.
*/

/*
//Tradition Solution
function intersection(nums1, nums2){
    const result = [];

    for(let num1 of nums1){
        for(let num2 of nums2){
                if(num1 === num2 && !result.includes(num1)){
                    result.push(num1);
                }
            }
        }
        
        return result;
    }

console.log(intersection([1,2,2,1],[2,2]));
*/

//Optimized Solution
function intersection(nums1, nums2){
    const set = new Set(nums1);
    const result = [];

    for(let num of nums2){
        if(set.has(num) && !result.includes(num)){
            result.push(num)
        }
    }
    return result;
}

console.log(intersection([1,2,2,1,3,5,6], [2,2,6]))
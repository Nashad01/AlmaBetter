/*
Given an array of intervals, merge all the overlapping
intervals and return an array of non-overlapping intervals.

Example: 

Input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
Output: [[1, 6], [8, 10], [15, 18]]    //Since intervals [1,3] and [2,6] are overlapping we can merge them to form [1,6] intervals.

Input: intervals = [[1, 4], [4, 5]]
Output: [[1, 5]]    //Since intervals [1,4] and [4,5] are overlapping we can merge them to form [1,5].    
*/

//Traditional Solution
/*
function mergeOverlappingIntervals(arr){
    const n = arr.length;

    //sort the given intervals:
    arr.sort((a,b) => a[0] - b[0]);

    const ans = [];

    for(let i = 0; i < n; i++){     //select an interval:
        let start = arr[i][0]
        let end = arr[i][1];

    //Skip all the merged intervals:
    if(ans.length && end <= ans[ans.length -1][1]){
        continue;
    }

    //check the rest of the intervals:
    for(let j = i + 1; j < n; j++){
        if(arr[j][0] <= end){
            end = Math.max(end, arr[j][1])
        }else{
            break;
        }
    }
    ans.push([start, end])
    }
    
    return ans;
}

const arr = [[1,3], [8,10], [2,6],[15,18]]
const ans = mergeOverlappingIntervals(arr)
console.log("The merged intervals are:");
for(let it of ans){
    console.log(`[${it[0]}, ${it[1]}]`) //[[1,6], [8,10], [15,18]]
}

*/

//Optimized Solution
function mergeOverlappingIntervals(arr){
    const n = arr.lenght;

    //sort the given intervals
    arr.sort((a,b) => a[0] - b[0]);

    const ans = [arr[0]];

    for(let i = 1; i < n; i++){
        const last = ans[ans.length -1];
        const curr = arr[i]

        //if the current interval overlaps with the last interval
        if(curr[0] <= last[1]){
            last[1] = Math.max(last[1], curr[1]);
        }
        //if the current interval does not overlap with the last interval
        else {
            ans.push(curr);
        }
    }

    return ans;
}

const arr = [[1,3], [8,10], [2,6], [15, 18]];
const ans = mergeOverlappingIntervals(arr);
console.log("The merged intervals are:");
for(let it of ans){
    console.log(`[${it[0]}, ${it[1]}]`);
}



//Note: In this question we have fine the overlapping intervals means in an array 
// interval = [[1, 3], [2, 6], [8, 10], [15, 18]], so in this array 2 and 3 are common 
// because interval means 1,2,3 and 2,3,6 in the first and second array respectively.
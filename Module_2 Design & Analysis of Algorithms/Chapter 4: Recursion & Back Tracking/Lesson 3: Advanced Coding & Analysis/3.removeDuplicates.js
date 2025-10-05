//Traditional Solution
function removeDuplicates(arr){
    const uniqueArr = [];
    for(let i = 0; i < arr.length; i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

const arr = [1,2,3,2,4,1,5];
console.log(removeDuplicates(arr)); //Output: [1,2,3,4,5]
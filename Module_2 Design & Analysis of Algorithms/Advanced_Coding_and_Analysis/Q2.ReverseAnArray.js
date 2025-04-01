//Tradition Solution
//Time Complexity: O(n)
//Space Complexity: O(1)

//-----------

function reverseArray(arr){
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        const temp = arr[start];
        arr[start] = arr[end]; //arr[0] = arr[5]
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
console.log(reverseArray([3,6,8,4,9,5]))



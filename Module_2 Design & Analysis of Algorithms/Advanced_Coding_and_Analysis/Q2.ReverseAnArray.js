//Tradition Solution
//Time Complexity: O(n)
//Space Complexity: O(1)

/*
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
*/

//Date: 06/04/2025   **Revision**

//Traditional Solution
//Time Complexity: O(n)
//Space Complexity: O(1)
/*
function reverseArray(arr){
    let start = 0; 
    let end = arr.length - 1
    while(start < end){
        const temp = arr[start];
        arr[start] = arr[end]
        arr[end] = temp;
        start++;
        end--;
    }
    return arr
}
console.log(reverseArray([3,4,5,6,7,8,9,0]));
*/

//Optimized Solution
//Time Complexity: O(n)
//Space Complexity: O(1)
function reverseArray(arr){
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        [arr[start], arr[end]] = [arr[end],arr[start]]; //Swap elements using destructuring assingment
        start++;
        end--;
    }
    return arr;
}
console.log(reverseArray([3,4,5,6,7,9,1]))
function ternarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;
    
    while(left <= right){
        let mid1 = left + Math.floor((right - left)/3);
        let mid2 = right - Math.floor((right-left)/3);

        if(arr[mid1] === target){
            return mid1;
        }

        if(arr[mid2] === target){
            return mid2;
        }

        if(target < arr[mid1]){
            right = mid1 -1;
        }else if(target > arr[mid2]){
            left = mid2 + 1;
        }else{
            left = mid1 + 1;
            right = mid2 - 1;
        }
    }

    return -1; //Target not found
}

//Example usage
var arr = [1,2,3,4,5,6,7]
var target = 5;
console.log(ternarySearch(arr, target));

//Output
//4 (index of the target element)
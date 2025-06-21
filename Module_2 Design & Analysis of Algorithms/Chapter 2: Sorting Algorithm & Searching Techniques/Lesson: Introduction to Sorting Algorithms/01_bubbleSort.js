function bubbleSort(arr){
    let length = arr.length;
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                //Swap arr[j] and a[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//Example usage
var arr = [6,2,5,3,9]
console.log(bubbleSort(arr))

//Output
// [2,3,5,6,9]
function selectionSort(arr){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        //Assume the first element of the unsorted part is the smallest
        let min = i;
        for(let j = i + 1; j < len; j++){
            //if any elements is smaller, mark its position
            if(arr[min] > arr[j]){
                min = j;
            }
        }
        //if the current first element isn't the smallest then swap it with the smallest
        if(min !== i){
            let tmp = arr[i]
            arr[i] = arr[min]
            arr[min] = tmp;
        }
    }
    return arr;
}

//Example usage
var arr = [3,7,5,4,2,1,6]
console.log(selectionSort(arr));

//Output
[1,2,3,4,5,6,7]
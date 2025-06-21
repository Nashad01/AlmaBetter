function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i; //Match found, return the index
        }
    }
    return -1; //No match found, return -1
}

//Example usage
var arr = [4,2,7,1,9];
var target = 7;
console.log(linearSearch(arr, target)); //Output 2
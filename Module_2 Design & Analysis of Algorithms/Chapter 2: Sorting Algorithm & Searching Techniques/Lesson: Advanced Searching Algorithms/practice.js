// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//Write a JS code to find the sum of first n numbers

function SumOffirstNNumbers(n){
    let sum = 0;
    for(i = 0; i <= n; i++){
        sum += i; 
    }
    return sum
    
}
console.log(SumOffirstNNumbers(10))
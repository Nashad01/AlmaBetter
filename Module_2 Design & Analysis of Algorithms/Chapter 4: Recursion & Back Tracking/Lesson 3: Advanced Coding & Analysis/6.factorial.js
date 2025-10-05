/*
6. You have been given a positive integer n. You need to
find and print the Factorial of this number.
*/

//Traditional Solution
/*
function factorial(n){
    if(n === 0){
        return 1;
    }
    return n * factorial(n - 1);
}

let num = factorial(5)
console.log(num)
*/

//Optimized Solution
function factorial(n, result = 1){
    if(n === 0){
        return result;
    }

    return factorial(n - 1, result * n)
}

console.log(factorial(4))
/*
Problem 1: Fibonacci Number
*/

function fib(n){
    if(n === 0){
        return 0;
    }
    if(n === 2 || n === 1){
        return 1;
    }
    return fib(n-1) + (n-2);
}

console.log(fib(8));






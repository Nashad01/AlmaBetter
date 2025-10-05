//5. Given a number n, print nth Fibonacci Number.

//Traditional Solution
/*
function fibonacci(n){
    if(n <= 1){
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6))
*/

//Optimized Solution
function fibonacci(n, memo = {}){
    if(n <= 1){
        return n;
    }

    if(memo[n]){
        return memo[n];
    }

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}
console.log(fibonacci(7))
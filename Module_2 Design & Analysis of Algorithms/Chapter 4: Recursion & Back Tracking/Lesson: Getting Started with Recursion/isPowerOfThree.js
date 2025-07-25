//Problem 3: Power of Three

const isPowerOfThree = function(n){
if(n===1) return true;
if(n === 0 || n % 3 !== 0) return false;
return isPowerOfThree(n/3)
}

let result = isPowerOfThree(9)
console.log(result);

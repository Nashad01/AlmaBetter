//Problem 2: Power of Four

var isPowerOfFour = function(n){
    if(n <= 0) return false;
    
    const str = n.toString(4);
    const zerosAmount = str.length - 1;
    const re = `10{${zerosAmount}}`
    return str.match(re) !== null;
    }
console.log(isPowerOfFour(4));

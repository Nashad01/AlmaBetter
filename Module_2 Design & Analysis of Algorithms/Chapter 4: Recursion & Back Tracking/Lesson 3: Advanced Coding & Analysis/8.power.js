/*
8. Implement pow(x, n), which calculates x raised to the 
   power n (i.e., x^n) 
*/
 

//Traditional Solution
function power(s, n){
   if(n === 0){
      return 1;
   }

   return s * power(s, n - 1)
}
// console.log(power(3,4));


//Optimized Solution 
function power(x,n){
   if(n === 0){
      return 1
   }

   if(n % 2 === 0){
      const temp = power(x, n/2);
      return temp * temp;
   }

   return x * power(x, n - 1)
}
console.log(power(2,6));


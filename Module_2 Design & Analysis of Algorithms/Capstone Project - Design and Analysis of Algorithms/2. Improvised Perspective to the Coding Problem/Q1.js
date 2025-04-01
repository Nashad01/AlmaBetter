/*
Here’s how you can rewrite the isHappy function using a Set object to track the numbers 
encountered during the process. This will help detect cycles and avoid infinite loops:
*/

function isHappy(n) {
    // Helper function to calculate the sum of squares of digits
    function calculateSumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    const seenNumbers = new Set();

    while (n !== 1 && !seenNumbers.has(n)) {
        seenNumbers.add(n);
        n = calculateSumOfSquares(n);
    }

    return n === 1;
}


/*
Explanation:

1. Helper Function: calculateSumOfSquares calculates the sum of the squares of the digits of 
   the number.

2. Set Object: The seenNumbers set is used to track the numbers that have already been 
   encountered in the sequence. This helps to detect if the number has entered a cycle.

3. Loop: The while loop continues until either n becomes 1 (which means the number is happy) 
   or n is found in the seenNumbers set, indicating a cycle.

4. Return: If n equals 1, it’s a happy number, and the function returns true. Otherwise, 
   if a cycle is detected, it returns false.

This approach efficiently detects cycles and solves the problem with the help of a Set.

*/
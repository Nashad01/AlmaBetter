/*
Ques.1 
1. The Power of Two Puzzle

Sarah, a dedicated mathematician and puzzle enthusiast, stumbled upon an intriguing 
challenge while delving into her research. She contemplated the creation of an IsPowerOfTwo 
function, which takes a positive integer n as an argument and aims to discern whether the 
given number qualifies as a power of two. In mathematical terms, an integer n is deemed a 
power of two if it can be represented as 2 raised to an integer exponent. For example, 
8 is a power of two because it can be written as 2³. 

How would you tackle this problem?

Example 1:
Input: n = 16
Output: true
Explanation: Since 16 can be expressed as 2^4, the function returns True,
indicating that 16 is indeed a power of two.

Example 2:
Input: n = 5
Output: false
Explanation: Since there is no integer exponent that can yield 2 when raised to that exponent,
the function returns False, indicating that 5 is not a power of two.

Example 3:
Input: n = 64
Output: true
Explanation: Given that 64 can be represented as 2^6, the function returns True,
affirming that 64 is indeed a power of two.
 
Hints:
- To determine if a number is a power of two, think about the properties of a power of two. 
  What is unique about their binary representation?
  
- Consider the binary representation of a power of two. What pattern do you notice when 
  subtracting one from a power of two?
 
Code with error(s):
function isPowerOfTwo(n) {
    
    return n > 0 || (n & (n - 1)) === 0;
}
*/

//------------------------------------------------------------------------------------------//

/*
The provided code attempts to determine whether a given number n is a power of two using a combination of a comparison and a bitwise operation. However, there is a logical error in the code that needs to be corrected.

Error Analysis
The current code uses the logical OR operator (||), which will return true as long as n > 0 regardless of the result of the bitwise operation. This is not the correct logic for checking if n is a power of two.
The correct approach should use the logical AND operator (&&) to ensure both conditions are true: n must be positive, and the result of n & (n - 1) must be 0.


Corrected Code
Here's the corrected function:
*/

javascript

function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

/*
Explanation:
n > 0: This ensures that the number is positive.
(n & (n - 1)) === 0: This checks if n is a power of two. In binary representation, a power of two has exactly one bit set to 1, and all other bits are 0. Subtracting 1 from a power of two flips all bits after the rightmost 1 bit (including the 1 bit). The bitwise AND of n and n - 1 should result in 0 if n is a power of two.
Example Execution:
For n = 16:

Binary of 16: 10000
Binary of 15: 01111
16 & 15 = 10000 & 01111 = 00000 → returns true.
For n = 5:

Binary of 5: 101
Binary of 4: 100
5 & 4 = 101 & 100 = 100 → returns false.
For n = 64:

Binary of 64: 1000000
Binary of 63: 0111111
64 & 63 = 1000000 & 0111111 = 0000000 → returns true.
This corrected code will now accurately determine whether the input n is a power of two.
*/
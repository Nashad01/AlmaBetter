/*
Here’s how you can rewrite the isPalindrome function using the two-pointer approach 
in JavaScript: 
*/

// Approach 2: Two-Pointer Method

function isPalindrome(n) {
    // Convert the number to a string for easy access to individual digits
    const str = n.toString();

    // Initialize two pointers: one at the start and one at the end
    let left = 0;
    let right = str.length - 1;

    // Loop through the string while the two pointers do not cross each other
    while (left < right) {
        // If the characters at the two pointers do not match, it's not a palindrome
        if (str[left] !== str[right]) {
            return false;
        }

        // Move the pointers closer to the center
        left++;
        right--;
    }

    // If we completed the loop without mismatches, it's a palindrome
    return true;
}

/*
Explanation:

1. Convert to String: The integer is converted to a string to make it easy to access 
   individual digits.

2. Two Pointers: The left pointer starts at the beginning of the string, and the right 
   pointer starts at the end.

3. Comparison Loop: While left is less than right, we compare the characters at both pointers. 
   If they are not the same, the number is not a palindrome.

4. Return Value: If the loop completes without finding any mismatch, the number is a 
   palindrome, and we return true. Otherwise, we return false.

This approach avoids reversing the number and uses direct comparisons, which can be 
efficient when dealing with string representations of numbers.
*/
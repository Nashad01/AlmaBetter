/*
In Approach 2, we can optimize the original algorithm by using a Set. However, using a 
Set won't provide any direct improvement in terms of binary search efficiency, as sets 
don't maintain order. Therefore, in this case, it's not particularly useful to use a Set 
for binary search purposes, because binary search depends on sorted arrays. But you can 
still rewrite the problem to use a Set for storage and lookup of letters, though it won't 
improve the performance over the original approach.

However, for educational purposes, let's refactor the solution using a Set. We'll store 
all unique letters in a Set first, and then perform the search:
*/

// Approach 2: Using Set

function nextGreatestLetter(letters, target) {
    // Create a set from the letters array to filter out duplicates
    const letterSet = new Set(letters);
    
    // Convert the set back to a sorted array to perform binary search
    const sortedLetters = [...letterSet].sort();
    
    let l = 0;
    let h = sortedLetters.length - 1;

    // Binary search to find the smallest letter greater than the target
    while (l <= h) {
        let mid = l + Math.floor((h - l) / 2);

        if (sortedLetters[mid] <= target) {
            l = mid + 1;
        } else {
            h = mid - 1;
        }
    }

    // If the binary search doesn't find a larger letter, return the first letter
    return l < sortedLetters.length ? sortedLetters[l] : sortedLetters[0];
}


/*
Explanation:

1.Set Creation: We first create a Set from the letters array to remove any duplicate characters.

2. Sorting: After creating the Set, we convert it back into a sorted array (sortedLetters) 
   for binary search.

3. Binary Search: The binary search is used to find the smallest letter that is 
   lexicographically greater than the target. The search follows the same logic as the 
   original approach.

4.Return Value: If the search doesn't find any letter greater than the target, the 
  function returns the first letter in the sorted array.


Time Complexity:

- Creating the Set: O(N), where N is the length of letters.
- Sorting the set: O(K log K), where K is the number of unique letters.
- Binary search: O(log K).

Thus, the overall time complexity is O(N + K log K). However, note that using a Set here 
doesn't offer any real advantage over the original approach since the input is already 
sorted, and binary search is efficient on sorted arrays.

*/
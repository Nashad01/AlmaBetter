/*
Here’s a rewritten version of the fairCandySwap function using a hash map for an 
optimized approach:
*/

function fairCandySwap(aliceSizes, bobSizes) {
    // Step 1: Calculate the total sum of Alice's and Bob's candies
    const sumAlice = aliceSizes.reduce((a, b) => a + b, 0);
    const sumBob = bobSizes.reduce((a, b) => a + b, 0);

    // Step 2: Calculate the difference divided by 2
    const delta = (sumBob - sumAlice) / 2;

    // Step 3: Store Bob's candy sizes in a Set for O(1) lookup
    const bobSet = new Set(bobSizes);

    // Step 4: Iterate over Alice's candy sizes
    for (let a of aliceSizes) {
        let b = a + delta;  // Find the corresponding candy size in Bob's set
        if (bobSet.has(b)) {
            return [a, b];  // Return the matching pair
        }
    }
}
/*
Explanation:

1. Calculate Total Sum: First, we calculate the total sum of candies for both Alice and 
   Bob using reduce().

2. Delta Calculation: The difference in the total number of candies between Alice and Bob 
   is delta = (sumBob - sumAlice) / 2. This difference helps us find a matching pair such 
   that swapping candies results in both having the same total.

3. Bob’s Set for Fast Lookup: We use a set to store Bob’s candy sizes, enabling O(1) time 
   complexity for checking if a candy size exists in Bob's collection.

4. Iterate Over Alice’s Candy Sizes: For each candy size a that Alice has, we calculate 
   the potential size b from Bob's collection (b = a + delta). If b exists in Bob’s set, 
   we return the pair [a, b].


Example: 

let aliceSizes = [1, 2];
let bobSizes = [2, 3];
console.log(fairCandySwap(aliceSizes, bobSizes));  // Output: [1, 2]

Time Complexity:

- The time complexity of this solution is O(n + m), where n is the length of aliceSizes 
  and m is the length of bobSizes. This is because we use reduce() to calculate the 
  sums (O(n + m)) and a set for fast lookup (O(1)) during the iteration.

This hash map-based approach significantly improves efficiency compared to the naive 
approach! Let me know if you need more details.

*/
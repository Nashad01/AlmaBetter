/*
To solve the problem, we need to correctly process a list of operations that affect a list 
of scores. The operations include adding new scores, removing the last score, doubling the 
last score, and adding the sum of the last two scores. We need to keep track of the scores 
and correctly apply these operations.

Approach
1. Use a stack-like data structure: This will help us efficiently manage the operations as 
   they follow a Last In, First Out (LIFO) principle.

2. Process each operation:

- Integer: Add it to the stack.
- 'C': Remove the last score from the stack.
- 'D': Double the last score and add it to the stack.
- '+': Add the sum of the last two scores to the stack.

3. Calculate the total sum: After processing all operations, sum up all the scores in the stack.

*/


// Implementation

/*
Here is the corrected version of the callPoints function using a stack to handle the 
operations:
*/

function callPoints(operations) {
    const stack = []; // This will store the valid scores

    for (const op of operations) {
        if (op === '+') {
            // Add the sum of the last two scores
            const last = stack.pop();
            const newLast = stack[stack.length - 1];
            stack.push(last); // Push back the last score
            stack.push(newLast + last);
        } else if (op === 'D') {
            // Double the last score
            stack.push(2 * stack[stack.length - 1]);
        } else if (op === 'C') {
            // Remove the last score
            stack.pop();
        } else {
            // Convert the operation to an integer and add to the stack
            stack.push(Number(op));
        }
    }

    // Compute the total sum of scores in the stack
    return stack.reduce((sum, score) => sum + score, 0);
}


/*
Explanation:

1. Initialization: We initialize an empty array stack to store the scores.

2. Processing Operations:

- For '+', we pop the last score and add it to the previous score (the new last score after 
  popping). We push the last score back and then push the new calculated score.
- For 'D', we double the last score and push it onto the stack.
- For 'C', we simply pop the last score from the stack.
- For integers, we convert them from string format and push them directly onto the stack.

3. Calculating the Total Sum: We use the reduce method to sum up all elements in the stack 
   and return this sum.
*/

/*
Example Walkthroughs:

1. Example 1:

let ops = ["5", "2", "C", "D", "+"];
console.log(callPoints(ops)); // Output: 30

- Initial stack: []
- Process "5": stack becomes [5]
- Process "2": stack becomes [5, 2]
- Process "C": stack becomes [5] (remove last score)
- Process "D": stack becomes [5, 10] (double the last score)
- Process "+": stack becomes [5, 10, 15] (sum of last two scores)
- Final sum: 5 + 10 + 15 = 30

2. Example 2:

let ops = ["5", "-2", "4", "C", "D", "9", "+", "+"];
console.log(callPoints(ops)); // Output: 27

- Initial stack: []
- Process "5": stack becomes [5]
- Process "-2": stack becomes [5, -2]
- Process "4": stack becomes [5, -2, 4]
- Process "C": stack becomes [5, -2] (remove last score)
- Process "D": stack becomes [5, -2, -4] (double the last score)
- Process "9": stack becomes [5, -2, -4, 9]
- Process "+": stack becomes [5, -2, -4, 9, 5] (sum of last two scores)
- Process "+": stack becomes [5, -2, -4, 9, 5, 14] (sum of last two scores)
- Final sum: 5 + (-2) + (-4) + 9 + 5 + 14 = 27

3. Example 3:

let ops = ["1", "C"];
console.log(callPoints(ops)); // Output: 0

- Initial stack: []
- Process "1": stack becomes [1]
- Process "C": stack becomes [] (remove last score)
- Final sum: 0

Complexity:

- Time Complexity: O(n), where n is the number of operations, since each operation is 
  processed in constant time.
- Space Complexity: O(n) in the worst case due to storing scores in the stack.

*/
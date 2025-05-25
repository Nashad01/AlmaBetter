// Ques.11 Count the number of occurrences of the pattern in the text.
//Tradition Solution 
//Time Complexity: O((n - m + 1) * m)
//Space Complexity: O(1)

function countOccurrences(text, pattern){
    const n = text.length;
    const m = pattern.length;
    let count = 0;
    for(let i = 0; i <= n - m; i++){
        let j = 0; 
        while (j < m){
            if(text[i + j] !== pattern[j]){
                break; 
            }
            j++;
        }
        if(j === m){
            count++;
        }
    }
    return count;
}

console.log(countOccurrences("Hello, Hello, world", "Hello"));

//Q12. Replace all occurrences of the pattern in the text with a given replacement string.
//Tradition Solution
//Time Complexity: O(n + m)
//Space Complexity: O(n + k * r), where n is the length of the text, k is the number of occurrences, and r is the length of the replacement string.

function patternReplace(text, pattern, replacement){
    let result = "";
    const n = text.length;
    const m = pattern.length;
    let i = 0;
    while(i <= n - m){
        let j = 0;
        while(j < m && text[i + j] === pattern[j]){
            j++;
        }
        if(j === m){
            result += replacement;
            i += m;
        } else {
            result += text[i];
            i++;
        }
    }
    return result + text.slice(i);
}

console.log(patternReplace("abababab", "aba", "xyz"))
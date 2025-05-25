//Q8. Determine if 2nd string is an anagram of 1st string.

//Tradition Solution
//Time Complexity: O(n log n)
//Space Complexity: O(n)

function isAnagram(s, t){
    if(s.length !== t.length){
        return false;
    }
    const sortedS = s.split("").sort().join("");
    const sortedT = t.split("").sort().join("");
    return sortedS === sortedT;
}

console.log(isAnagram("triangle", "integral"))
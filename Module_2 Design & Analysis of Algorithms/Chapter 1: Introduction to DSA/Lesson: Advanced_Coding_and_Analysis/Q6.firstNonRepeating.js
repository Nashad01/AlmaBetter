//Q6. Find the first non-repeatig character in it.
//Traditional Solution
//Time Complexity: O(n^2)
//Space Complexity: O(1)

function firstNonRepeatingChar(str){
    for(let i = 0; i < str.length; i++){
        let isRepeated = false;
        for(let j = 0; j < str.length; j++){
            if(i !== j && str[i] === str[j]){
                isRepeated = true;
                break;
            }
        }
        if (!isRepeated){
            return str[i];
        }
    }
    return null;
}

console.log(firstNonRepeatingChar("lovealmario"));
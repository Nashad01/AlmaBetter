function longestPalindromicSubstring(str){
    let longest = '';
    for(let i = 0; i < str.length; i++){
        for(let j = i; j < str.length; j++){
            let substring = str.substring(i, j + 1);
            if(isPalindrome(substring) && substring.length > longest.length){
                longest = substring;
            }
        }
    }
    return longest;
}

function isPalindrome(str){
    return str === str.split('').reverse().join('');
}

console.log(longestPalindromicSubstring("babab"));
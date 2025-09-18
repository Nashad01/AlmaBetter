//Q5. Find the longest substring without repeating characters.

//Tradition Solution
//Time Complexity: O(n^2)
//Space Complexity: O(n)

function findSubstringWithoutRepeatingChars(str){
  let longest = '';
  for(let i = 0; i < str.length; i++){
    let substring = '';
    for(j = i; j < str.length; j++){
      if(substring.includes(str[j])){
        break;
      }
      substring += str[j];
    }
    if(substring.length > longest.length){
      longest = substring;
    }
  }
  return longest;
}

console.log(findSubstringWithoutRepeatingChars("abcdbcbb"))
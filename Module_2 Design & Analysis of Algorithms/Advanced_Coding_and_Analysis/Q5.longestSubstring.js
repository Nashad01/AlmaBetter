function longestSubstringWithoutRepeatingChars(str) {
    let longest = '';
    for (let i = 0; i < str.length; i++) {
      let substring = '';
      for (let j = i; j < str.length; j++) {
        if (substring.includes(str[j])) {
          break;
        }
        substring += str[j];
      }
      if (substring.length > longest.length) {
        longest = substring;
      }
    }
    return longest;
  }
  
  console.log(longestSubstringWithoutRepeatingChars("abcdbcbb"));
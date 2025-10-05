function areAnagrams(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    const charCount = {};

    for(let char of str1){
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for(let char of str2){
        if(!charCount[char]){
            return false;
        }
        charCount[char]--;
    }

    return true;
}

const str1 = "listen";
const str2 = "silent";

console.log(areAnagrams(str1, str2))
function patternMatching(pattern, str){
    const patternLength = pattern.length;
    const strLength = str.length;
    if(patternLength === 0 && strLength === 0){
        return true;
    }
    if(patternLength === 0 || strLength === 0){
        return false;
    }
    const patternArr = pattern.split("");
    const strArr = str.split(" ");
    if(patternArr.length !== strArr.length){
        return false;
    }
    const patternMap = new Map();
    const strSet = new Set();
    for(let i = 0; i < patternLength; i++){
        const char = patternArr[i];
        const word = strArr[i];
        if(!patternMap.has(char) && !strSet.has(word)){
            patternMap.set(char, word);
            strSet.add(word);
        } else {
            if(patternMap.get(char) !== word) {
                return false;
            }
        }

    }
    return true;
}

console.log(patternMatching("abba", "dog cat cat dog"))
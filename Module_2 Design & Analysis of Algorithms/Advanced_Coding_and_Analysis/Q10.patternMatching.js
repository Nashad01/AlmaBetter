function patternMatching(text, pattern){
    const n = text.length;
    const m = pattern.length;
    const occurrences = [];
    for(let i = 0; i <= n-m; i++){
        let j = 0; 
        while(j < m){
            if(text[i + j] !== pattern[j]){
                break;
            }
            j++;
        }
        if(j === m){
            occurrences.push(i);
        }
    }
    return occurrences;
}

console.log(patternMatching("abababab", "aba"));
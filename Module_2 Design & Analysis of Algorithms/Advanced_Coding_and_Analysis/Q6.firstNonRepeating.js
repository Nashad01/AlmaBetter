function firstNonRepeatingChar(str){
    for(let i=0; i<str.length; i++){
        let isRepeated = false;
        for(let j=0; j<str.length; j++){
            if(i !== j && str[i] === str[j]){
                isRepeated = true;
                break;
            }
        }
        if(!isRepeated){
            return str[i];
        }
    }
    return null;
}
console.log(firstNonRepeatingChar("lovealmario"))
/*
Here is an example of how backtracking can be used to find
all possible combinaitons of a set of elements in JavaScript:
*/

function findAllCombinations(set, index, current){
    if(index === set.length){
        console.log(current)
        return;
    }
    findAllCombinations(set, index + 1, current);
    findAllCombinations(set, index + 1, current.concat(set[index]));
}

const set = ['a','b','c'];
findAllCombinations(set,0,[]);

//Output
/*
[]
["c"]
["b","c"]
["a"]
["a","c"]
["a","b"]
["a","b","c"]
*/
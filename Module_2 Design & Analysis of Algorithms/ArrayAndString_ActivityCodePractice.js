const arr = [69, 92, 45, 7, 28];

//1. Displays the number at the third index of the array.
const numberAtThirdIndex = arr[2];
console.log(numberAtThirdIndex);

//2. Find if the array contains 7 or not.
const containsNumber7 = arr.includes(7);
console.log("line no. 9:",containsNumber7);

//3. Adds 33 at the beginning of the array.
arr.unshift(33);
// console.log("line no. 13:",adding33AtTheBeginning);
console.log(arr);

//4. Substract 5 from every number in the array using map method.
const substractFive = arr.map(function(element){
    return element - 5;
});
console.log(substractFive);
//Another method
const subtractedArr = arr.map((num) => num-5);
console.log("line no.: 23",subtractedArr);







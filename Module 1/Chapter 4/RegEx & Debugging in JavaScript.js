const str = "I have a fat cat in a hut who eat rat"
const regex = new RegExp(/cat/);

//test method returns true or false

console.log("Line No. 6:", regex.test(str));

//---------------------------------

const regexCaseInsensitive = /CaT/i; //i stands  for insensitive casing
console.log("Line NO. 11:", regex.test(str))
const str = "I have a fat cat in a hut who eat rat"
const regex = new RegExp(/cat/);

//test method returns true or false

// console.log("Line No. 6:", regex.test(str));

//---------------------------------

const regexCaseInsensitive = /CaT/i; //i stands  for insensitive casing
// console.log("Line NO. 11:", regex.test(str))

const strA = "sun";
const strB = "run";
const strC = "fun";
const strD = "son";

const regexIdCard = /.un/; // . stands for wildcard character
// console.log("Line 19:",regexIdCard.test(strA))
// console.log("Line 20:",regexIdCard.test(strB))
// console.log("Line 21:",regexIdCard.test(strC))
// console.log("Line 22:",regexIdCard.test(strD))

const strE = "big";
const strF = "baG";
const strG = "beg"
const strH = "bog";

const regexSet = /b[iae]g/i;

// console.log("Line 31:",regexSet.test(strE))
// console.log("Line 32:",regexSet.test(strF))
// console.log("Line 33:",regexSet.test(strG))
// console.log("Line 34:",regexSet.test(strH))

const petStr = "My friend Raj has a pet fish, Goutam has pet dog and Maddy has a pet bird"
const petRegx = /dog | bird/;

// console.log(petRegx.test(petStr))

const catStr = "cat"
const batStr = "bat"
const matStr = "mat"
const zatStr = "Zat"
const atRegEx = /[a-zA-Z]at/;

// console.log(atRegEx.test(catStr))
// console.log(atRegEx.test(batStr))
// console.log(atRegEx.test(matStr))
// console.log(atRegEx.test(zatStr))


//------------------------------------------
// /\w/ is the shorform of /[a-zA-Z0-9]/

const userName = "Ninja_123"
const unRegex = /\w/; // [A-Za-z0-9]
// console.log('Line 58:',unRegex.test(userName))

//------------------------------------------------------
const poem = "The Twinkle, twinkle little star"
const strRegex = /twinkle/gi; // g = global
// console.log(poem.match(strRegex))

//------------------------------------------------------

const river = "MississippiS"
const oneOrMoreRegex = /s+/gi // + = One or more occurance
// console.log(oneOrMoreRegex.test(river))
// console.log(river.match(oneOrMoreRegex))

const goalWord = 'gooooooooal'
let gutPharse = "gut phrase"
let goRegex = /go*/gi; // * => Zero or more occurance 
// console.log('Line 75:',goRegex.test(goalWord))
// console.log('Line 76:',goRegex.test(gutPharse))
// console.log('Line 77:',goalWord.match(goRegex))
// console.log('Line 78:',gutPharse.match(goRegex))

//---------------------------------------------------

const anyWord = "bbhijtb"
const anotherOne = "bbtjkl"
const regEx01 = /[aeiou]/gi;
// console.log(regEx01.test(anyWord))
// console.log(regEx01.test(anotherOne))

//--------------------------------------------------

const strNot = "3 blind mice"
const newRegex = /[^aeiou^0-9]/gi; // ^aeiou => means Not to include vowel 'aeiou' and ^0-9 means Not to include number between '0-9'
// console.log("Line 92:",newRegex.test(strNot))
// console.log("Line 93:", strNot.match(newRegex))

//---------------------------------------------------

const firstString = "Ricky is first and can be found";
const firstRegex = /^Ricky/; // Here ^ means Serach will only happen at the start of the text
const notFirst = "You can't find here Ricky";
const lastRegex = /Ricky$/;
//  console.log(firstRegex.test(firstString)) 
//  console.log(firstRegex.test(notFirst)) 
// console.log('Line 103:',lastRegex.test(firstString))
// console.log('Line 104:',lastRegex.test(notFirst))

const storyEnd = "This is a never ending story"
const storyStart = "Story of this novel is an owesome"
const endRegex = /story$/;
// console.log('Line 108:',endRegex.test(storyEnd))
// console.log("Line 110:", endRegex.test(storyStart))

//-------------------------------------------------------

const iptStr = "xyzabyxtxytz"
const plRegex = /x(?=y)/g; // Here it means that x occurance followed with y in the given string
// console.log(iptStr.match(plRegex))

const ngReg = /x(?!y)/gi; // Here /x(?!y)/gi => means that x occurance without follwed with y 
// console.log("Line 119:",iptStr.match(ngReg))

//------------------------------------------------------------

// exec() method

const strExec = "So Let's Begin Something that never been begin"
const execRegex = /s(?=o)/gi; 
console.log(execRegex.exec(strExec))
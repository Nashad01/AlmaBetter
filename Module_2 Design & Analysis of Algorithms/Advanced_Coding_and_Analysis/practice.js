let arr = [1,2,3,3]
let brr = [4,5,5,6]
let s = new Set([...arr, ...brr])
console.log('Line No. 4:',s)
let crr = [...s]
console.log('Line No. 6:',crr)
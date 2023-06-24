// https://www.digitalocean.com/community/tutorials/javascript-unary-operators-simple-and-useful
// Answer : 

console.log(1 + 2) // 3
console.log(1 + + 2) // 3 
console.log(1 + + + 2) // 3
console.log(1 + '2') // "12"
console.log(1 + + '2') // 3
console.log('1' + 2) // "12"
console.log('1' + + 2) // "12"
console.log(1 + true) // 2
console.log(1 + + true) // 2
console.log('1' + true) // "1true"
console.log('1' + + true) // "11"
console.log(1 + null) // 1
console.log(1 + + null) // 1
console.log('1' + null) // "1null"
console.log('1' + + null) // "10"
console.log(1 + undefined) // NaN
console.log(1 + + undefined) // NaN
console.log('1' + undefined) // "1undefined"
console.log('1' + + undefined) // "1NaN"
console.log('1' + + + undefined) // "1NaN" 

// Answer : 
// 3
// 3
// 3
// "12"
// 3
// "12"
// "12"
// 2
// 2
// "1true"
// "11"
// 1
// 1
// "1null"
// "10"
// "NaN"
// "NaN"
// "1undefined"
// "1NaN"
// "1NaN"

// Explanation : 
// unary plus operator precedes its operand and evaluates to its operand but attempts to convert it into a number if it is not 

// it can convert all string representation of numbers, boolean values, null. return to NaN if it is not a convertable
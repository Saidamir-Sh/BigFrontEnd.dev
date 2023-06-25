// This is a JavaScript Quiz from BFE.dev

console.log(0 == '0') // true
console.log(0 === '0') // false
console.log(Object.is(0, '0')) // false

console.log(0 == 0) // true
console.log(0 === 0) // true
console.log(Object.is(0, 0)) // true

console.log(0 == -0) // true 
console.log(0 === -0) // true
console.log(Object.is(0, -0)) // false

console.log(NaN == NaN) // false -> NaN is not equal to any value including itself
console.log(NaN === NaN) // false
console.log(Object.is(NaN, NaN)) // true

console.log(0 == false) // true
console.log(0 === false) // false
console.log(Object.is(0, false))  // false

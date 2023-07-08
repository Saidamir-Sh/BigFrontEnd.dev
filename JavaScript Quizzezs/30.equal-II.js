// This is a JavaScript Quiz from BFE.dev

console.log([1] == 1) // true
console.log([1] == '1') // true
console.log(['1'] == '1') // true
console.log(['1'] == 1) // true
console.log([1] == ['1']) // false
console.log(new Boolean(true) == 1) // true
console.log(new Boolean(true) == new Boolean(true)) // false
console.log(Boolean(true) == '1') 
console.log(Boolean(false) == [0])
console.log(new Boolean(true) == '1')
console.log(new Boolean(false) == [0])
console.log(null == undefined)

// true
// true
// true
// true
// false
// true
// false
// true
// true
// true
// false
// true
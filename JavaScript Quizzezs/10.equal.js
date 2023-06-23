// This is a JavaScript Quiz from BFE.dev

// 0 is falsy -> true
console.log(0 == false)

// empty string is falsy -> true
console.log('' == false)

// empty array is coersed to "" which is falsy value so -> true
console.log([] == false)

// false
console.log(undefined == false)

//  null is represents abscense value, -> false 
console.log(null == false)

// true
console.log('1' == true)

// 1n means bigInt, so true
console.log(1n == true)

// true
console.log(' 1     ' == true)
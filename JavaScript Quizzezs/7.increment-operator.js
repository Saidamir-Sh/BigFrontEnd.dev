// This is a JavaScript Quiz from BFE.dev

let a = 1
const b = ++a // pre-incremental
const c = a++ // post-incremental

// Answer : 
console.log(a) // 2
console.log(b) // 2
console.log(c) // 1
console.log(a)


// Explanation:

// let a = 1: a is assigned the value 1.
// const b = ++a: a is pre-incremented (a is incremented to 2 before it is assigned to b). So, b is assigned the value 2.
// const c = a++: a is post-incremented (a is assigned to c first with the value 2, then a is incremented to 3). So, c is assigned the value 2.
// console.log(a): Prints the value of a, which is 2.
// console.log(b): Prints the value of b, which is 2.
// console.log(c): Prints the value of c, which is 1.

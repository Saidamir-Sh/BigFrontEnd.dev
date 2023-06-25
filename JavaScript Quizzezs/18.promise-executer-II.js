// This is a JavaScript Quiz from BFE.dev

const p1 = Promise.resolve(1) // 1 -> resolved
const p2 = new Promise((resolve) => resolve(p1)) // pending : it itakes promise object not resolved value, new promise is created
const p3 = Promise.resolve(p1) // it takes p1 resolved value, because it is not created with the new promise constructor
const p4 = p2.then(() => new Promise((resolve) => resolve(p3))) // 1
const p5 = p4.then(() => p4) // 1 returning a resolved promise

console.log(p1 == p2) // false
console.log(p1 == p3) // true // p1 and p3 referencees same object
console.log(p3 == p4) // false
console.log(p4 == p5) // false
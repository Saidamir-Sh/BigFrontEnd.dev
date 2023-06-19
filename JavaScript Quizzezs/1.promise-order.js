// What does the code snippet to the right output by console.log?
// This is a JavaScript Quiz from BFE.dev

console.log(1)
const promise = new Promise((resolve) => { // resolve changes the internal state of Promise object to fulfilled, but does not block the next line of code.
  console.log(2)
  resolve()             // here logs, because it is here sync without then()
  console.log(3)
})

console.log(4)

promise.then(() => {
  console.log(5)
}).then(() => {
  console.log(6)
})

console.log(7)

setTimeout(() => {
  console.log(8)
}, 10)

setTimeout(() => {
  console.log(9)
}, 0)


// Answer :
// 1
// 2
// 3
// 4
// 7
// 5
// 6
// 9
// 8
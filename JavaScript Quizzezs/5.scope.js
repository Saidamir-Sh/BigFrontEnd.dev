// What does the code snippet to the right output by console.log ?

for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0)
}
  
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0)
}

// let and const in for creates new scope for each iteration, which means the i in console.log() points to different values.
// The first for loop uses a var declaration for i, which has function scope and is hoisted to the top of the function. As a result, when the setTimeout callbacks are executed, they all refer to the same i value, which is 5 at the end of the loop.

// Answer :
// 0
// 1
// 2
// 3
// 4
// 5
// 5
// 5
// 5
// 5

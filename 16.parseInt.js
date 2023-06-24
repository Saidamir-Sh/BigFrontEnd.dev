// This is a JavaScript Quiz from BFE.dev

console.log(['0'].map(parseInt)) 
console.log(['0','1'].map(parseInt))
console.log(['0','1','1'].map(parseInt))
console.log(['0','1','1','1'].map(parseInt))

// Answer :
// [0]
// [0,NaN]
// [0,NaN,1]
// [0,NaN,1,1]

// Explanation: 
// When parseInt is used as a callback in map(), it receives three arguments: the element value, the index, and the array being traversed. However, parseInt expects the second argument to be the radix, not the index.

// Here's a breakdown of the steps:

// '0' is passed to parseInt with a radix of 0 (default), resulting in 0.
// '1' is passed to parseInt with a radix of 1, which is an invalid radix. Therefore, it returns NaN.
// '1' is passed to parseInt with a radix of 2, resulting in 1.
// '1' is passed to parseInt with a radix of 3, resulting in 1.
// The resulting array after applying parseInt to each element is [0, NaN, 1, 1].

// Therefore, the output of console.log(['0', '1', '1', '1'].map(parseInt)) is [0, NaN, 1, 1]
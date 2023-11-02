/* There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.
Could you manage to implement your own one?

Here is an example to illustrate

const arr = [1, [2], [3, [4]]];

flat(arr)
// [1, 2, 3, [4]]

flat(arr, 1)
// [1, 2, 3, [4]]

flat(arr, 2)
// [1, 2, 3, 4]
follow up

Are you able to solve it both recursively and iteratively? */


// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
    // your imeplementation here
}
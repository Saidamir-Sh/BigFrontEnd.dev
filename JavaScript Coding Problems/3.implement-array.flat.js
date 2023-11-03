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
 * Recursive
 * S(arr.len + maxdepth + depth)
 * O(elements in array)
 */
function flat_recursive(arr, depth = 1) {
    if (depth === 0) return arr;
    const output = []
    for (const item of arr) {
      if (Array.isArray(item)) {
        output.push(...flat(item, depth - 1))
      } else {
        output.push(item);
      }
    }
    return output;
  }
  
  
  /**
   * Iterative
   * S(max stack size == depth * items at depth)
   * O(items at depth * depth)
   */
  function flat_iterative(arr, depth = 1) {
   let position = 0;
   const stack = [[arr, depth + 1]];
  
   while (stack.length) {
    const [item, d] = stack.shift();
    if (Array.isArray(item) && d > 0) {
      stack.unshift(...item.map(i => [i, d - 1]))
    } else {
      arr[position++] = item;
    }
   }
  
   return arr;
  }
console.log('--------------------   Solution Logs   --------------------');

// Suppose we have an array of items - A, and another array of indexes in numbers - B

// const A = ['A', 'B', 'C', 'D', 'E', 'F']
// const B = [1,   5,   4,   3,   2,   0]
// You need to reorder A, so that the A[i] is put at index of B[i], which means B is the new index for each item of A.

// For above example A should be modified inline to following

// ['F', 'A', 'E', 'D', 'C', 'B']
// The input are always valid.

// follow-up

// It is fairly easy to do this by using extra O(n) space, could you solve it with O(1) space?

/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */

// Implementation I with O(n) space
function sortBasic(items, newOrder) {
  let newArray = [];
  for (let i = 0; i < newOrder.length; i++) {
    newArray[newOrder[i]] = items[i];
  }
  return newArray;
}

const items = ['A', 'B', 'C', 'D', 'E', 'F'];
const newOrder = [1, 5, 4, 3, 2, 0];

console.log(sortBasic(items, newOrder)); // ['F', 'A', 'E', 'D', 'C', 'B']

// Implementation II with O(1) space
function sort(items, newOrder) {
  for (let i = 0; i < items.length; i++) {
    while (newOrder[i] !== i) {
      swapper(items, i, newOrder[i]);
      swapper(newOrder, i, newOrder[i]);
    }
  }
  console.log(newOrder);
  return items;
}

function swapper(array, idx1, idx2) {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
}

console.log(sort(items, newOrder));

console.log('--------------------   Explanation Logs   --------------------');
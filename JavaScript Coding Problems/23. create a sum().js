// Create a sum(), which makes following possible :

// console.log(sum1(2) == 3); // Outputs: true
// console.log(sum1(3) == 4); // Outputs: true
// console.log(sum(1)(2)(3) == 6); // Outputs: true
// console.log(sum(5)(-1)(2) == 6); // Outputs: true

console.log('--------------------   Solution Logs   --------------------');
/**
 * @param {number} num
 */
function sum(num) {
  const curriedAdd = function (nextNum) {
    return sum(num + (nextNum || 0)); // when we have same pattern, use recursive function to solve
  };
  curriedAdd.valueOf = () => num;
  return curriedAdd; // Returning the curried function
}

const sum1 = sum(1);
console.log(sum1(2) == 3); // Outputs: true
console.log(sum1(3) == 4); // Outputs: true
console.log(sum(1)(2)(3) == 6); // Outputs: true
console.log(sum(5)(-1)(2) == 6); // Outputs: true

console.log('--------------------   Explanation Logs   --------------------');

// basic currying when we know exact number of args
function basicCurry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

const sumTwo = (a, b) => a + b;

const curriedSum = basicCurry(sumTwo);
const result = curriedSum(1)(2);
console.log(result);

// currying for multi-argument function, which we dont know how many args it will accept in future calls
function advancedCurry(fn) {
  return function currier(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return currier.apply(this, args.concat(nextArgs));
      };
    }
  };
}

function addThreeNumbers(a, b, c) {
  return a + b + c;
}

const curriedAdd = advancedCurry(addThreeNumbers);

console.log(curriedAdd(1, 2, 3));
console.log(curriedAdd(1)(2)(3));
console.log(curriedAdd(1, 2)(3));
console.log(curriedAdd(1)(2, 3));
console.log(curriedAdd(1)(2)(3, 4, 5));


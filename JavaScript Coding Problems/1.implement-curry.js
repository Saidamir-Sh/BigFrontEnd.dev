// Currying is a useful technique used in JavaScript applications.

// Please implement a curry() function, which accepts a function and return a curried one.

// Here is an example

// const join = (a, b, c) => {
//    return `${a}_${b}_${c}`
// }

// const curriedJoin = curry(join)

// curriedJoin(1, 2, 3) // '1_2_3'
// curriedJoin(1)(2, 3) // '1_2_3'
// curriedJoin(1, 2)(3) // '1_2_3'
function curry(fn) {
    // your code here
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn(...args)
      } else {
        return function (...nextArgs) {
          return curried(...args, ...nextArgs)
        }
      }
    } 
}

// Explanation 
function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  // usage
  function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = curry(sum);
  
  alert( curriedSum(1)(2) ); // 3

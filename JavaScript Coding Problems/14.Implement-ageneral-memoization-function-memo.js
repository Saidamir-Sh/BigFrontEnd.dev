// Memoization is a common technique to boost performance. If you use React, you definitely have used React.memo before.
// Memoization is also commonly used in algorithm problem, when you have a recursion solution, in most cases, you can improve it by memoization, and then you might be able to get a Dynamic Programming approach.
// So could you implement a general memo() function, which caches the result once called, so when same arguments are passed in, the result will be returned right away.

// const func = (arg1, arg2) => {
//   return arg1 + arg2
// }

// const memoed = memo(func)
// memoed(1, 2) 
// 3, func is called

// memoed(1, 2) 
// 3 is returned right away without calling func

// memoed(1, 3)
// 4, new arguments, so func is called
// The arguments are arbitrary, so memo should accept an extra resolver parameter, which is used to generate the cache key, like what _.memoize() does.

// const memoed = memo(func, () => 'samekey')
// memoed(1, 2) 
// 3, func is called, 3 is cached with key 'samekey'

// memoed(1, 2) 
// 3, since key is the same, 3 is returned without calling func

// memoed(1, 3) 
// 3, since key is the same, 3 is returned without calling func
// Default cache key could be just Array.from(arguments).join('_')

// note:
// It is a trade-off of space for time, so if you use this in an interview, please do analyze how much space it might cost.

/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */

// Memoization and Parameters
// Generally, memoization always follows the same scheme:

// Check if we already have a result.
// If yes, return it.
// If no, calculate the result and store it for the next time.

function memo(func, resolver = (...args) => Array.from(args).join('-')) {
  let cachedMap = new Map()
  
  return function memoized(...args) {
    let key = resolver(...args)
    if(cachedMap.has(key)) {
      return cachedMap.get(key)
    } else {
      let result = func.apply(this, args)
      cachedMap.set(key, result)
      return result
    }
  }
}
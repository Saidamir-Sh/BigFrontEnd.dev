// This is a follow-up on 1. implement curry()

// please implement curry() which also supports placeholder.

// Here is an example

// const  join = (a, b, c) => {
//    return `${a}_${b}_${c}`
// }

// const curriedJoin = curry(join)
// const _ = curry.placeholder

// curriedJoin(1, 2, 3) // '1_2_3'

// curriedJoin(_, 2)(1, 3) // '1_2_3'

// curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'


function curry(fn) {
    return function curried(...args) {
        const complete = args.length >= fn.length && !args.slice(0, fn.length).includes(curry.placeholder)
        if (complete) {
            return fn(...args)
        } else {
        // replace placeholder in args with values from next args
        return function (...nextArgs) {
            const res = args.map((arg) => arg === curry.placeholder && nextArgs.length ? nextArgs.shift() : args)
            return curried(...res, ...nextArgs)
        }
        }
    }
}
  
curry.placeholder = Symbol()
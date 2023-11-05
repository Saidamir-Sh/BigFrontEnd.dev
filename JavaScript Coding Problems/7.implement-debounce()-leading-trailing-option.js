// This is a follow up on 6. implement basic debounce(), please refer to it for detailed explanation.
// In this problem, you are asked to implement an enhanced debounce() which accepts third parameter, option: {leading: boolean, trailing: boolean}

// leading: whether to invoke right away
// trailing: whether to invoke after the delay.
// 6. implement basic debounce() is the default case with {leading: false, trailing: true}.

// for the previous example of debouncing by 3 dashes

// ─ A ─ B ─ C ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G 
// with {leading: false, trailing: true}, we get as below

// ─ ─ ─ ─ ─ ─ ─ ─ D ─ ─ ─ ─ ─ ─ ─ ─ ─ G
// with {leading: true, trailing: true}:

// ─ A ─ ─ ─ ─ ─ ─ ─ D ─ ─ ─ E ─ ─ ─ ─ ─ ─ G
// with {leading: true, trailing: false}

// ─ A ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ E
// with {leading: false, trailing: false}, of course, nothing happens.

// notes

// please follow above spec. the behavior might not be exactly the same as lodash.debounce()

// because window.setTimeout and window.clearTimeout are not accurate in browser environment, they are replaced to other implementation when judging your code. They still have the same interface, and internally keep track of the timing for testing purpose.

// Something like below will be used to do the test.

// let currentTime = 0

// const run = (input) => {
//   currentTime = 0
//   const calls = []

//   const func = (arg) => {
//      calls.push(`${arg}@${currentTime}`)
//   }

//   const debounced = debounce(func, 3)
//   input.forEach((call) => {
//      const [arg, time] = call.split('@')
//      setTimeout(() => debounced(arg), time)
//   })
//   return calls
// }

// expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['C@6'])

// Notes : 
// leading: whether to invoke right away
// trailing: whether to invoke after the delay.

function debounce(func, wait, option = {leading: false, trailing: true}) {
    // in basic debounce we only needed a timer, since we are trailing/leading we have to keep track of lastArgs as well
    let timer = null
    let lastArgs = null

    // if both leading and trailing are false then return null
    if(!option.leading && !option.trailing) return () => null

    return (...args) => {
        // if we dont have timer and leading is true we have to invoke the callback right away
        if(!timer && option.leading) {
            func.apply(this, args)
        } else {
            // else capture arguments in lastArgs
            lastArgs = args
        }

        // reset the timer
        clearTimeout(timer)

        timer = setTimeout(() => {
            // invoke the callback function if trailing is true (case: invoke after delay) and if we have args
            if(option.trailing && lastArgs) func.apply(this, lastArgs)
            // reset the context
            lastArgs = null
            timer = null
        }, wait)
    }
}
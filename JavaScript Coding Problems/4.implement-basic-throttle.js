// Throttling is a common technique used in Web Application, in most cases using lodash solution would be a good choice.
// could you implement your own version of basic throttle()?
// In case you forgot, throttle(func, delay) will return a throttled function, which will invoke the func at a max frequency no matter how throttled one is called.

// Here is an example.
// Before throttling we have a series of calling like

// ─ A ─ B ─ C ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G
// After throttling at wait time of 3 dashes

// ─ A ─ ─ ─ C ─ ─ ─D ─ ─ ─ ─ E ─ ─ ─ G 
// Be aware that

// call A is triggered right way because not in waiting time
// function call B is swallowed because B, C is in the cooling time from A, and C is latter.
// notes

// please follow above spec. the behavior is not exactly the same as lodash.throttle()

// because window.setTimeout and window.clearTimeout are not accurate in browser environment, they are replaced to other implementation when judging your code. They still have the same interface, and internally keep track of the timing for testing purpose.

// Something like below will be used to do the test.

// let currentTime = 0

// const run = (input) => {
//   currentTime = 0
//   const calls = []

//   const func = (arg) => {
//      calls.push(`${arg}@${currentTime}`)
//   }

//   const throttled = throttle(func, 3)
//   input.forEach((call) => {
//      const [arg, time] = call.split('@')
//      setTimeout(() => throttled(arg), time)
//   })
//   return calls
// }

// expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['A@0', 'C@3'])

// Explanation : 
// Throttling (Rate limiting) - maximum number of times a function can be executed with the given time. In other words, we dont allow our function to be executed more than once in every X milliseconds

// Basic implememtation of throttle function

function throttle(fn, delay = 1000) {
    let lastTime = 0
    return (...args) => {
        let now = new Date().getTime()
        if(now - lastTime < delay) return
        lastTime = now
        return fn(...args)
    }
}


// // BFE Accepted Solution:
function throttleFunc(cb, delay = 1000) {
    let shouldWait = false
    let waitingArgs

    const timeOutFunc = () => {
        if(waitingArgs == null) {
            shouldWait = false
        } else {
            cb(...waitingArgs)
            waitingArgs = null
            setTimeout(timeOutFunc, delay)
        }
    }

    if(waitingArgs == null) {
        shouldWait = false
    }

    return (...args) => {
        //  if we are in waiting phase dont invoke the function
        if(shouldWait) {
            waitingArgs = args
            return
        }
        // else call the functoin with the given args and set shoukdWait to true, becase if the user tries to execute the fucntion while delay is not counted down, we dont invoke the callback again
        cb(...args)
        shouldWait = true
        // after the delay passed set the should wait to false so we can again invoke the callback function
        setTimeout(timeOutFunc, delay)
    }
}


// This is a follow up on 4. implement basic throttle(), please refer to it for detailed explanation.
// In this problem, you are asked to implement a enhanced throttle() which accepts third parameter, option: {leading: boolean, trailing: boolean}
// leading: whether to invoke right away
// trailing: whether to invoke after the delay.
// 4. implement basic throttle() is the default case with {leading: true, trailing: true}.

// Explanation

// for the previous example of throttling by 3 dashes
// ─ A ─ B ─ C ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G 
// with {leading: true, trailing: true}, we get as below
// ─ A ─ ─ ─ C ─ ─ ─ D ─ ─ ─ ─ E ─ ─ ─ G 
// with {leading: false, trailing: true}, A and E are swallowed.
// ─ ─ ─ ─ C ─ ─ ─ D ─ ─ ─ ─ ─ ─ ─ G 
// with {leading: true, trailing: false}, only A D E are kept
// ─ A ─ ─ ─ ─ D ─ ─ ─ ─ ─ ─ E
// with {leading: false, trailing: false}, of course, nothing happens.

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

// Basic Implementation :
// {leading: true, trailing: false} -> straightforwad, default implementation
// In this version, we are not handling args that can be received while waiting period
function throttle(func, wait, options) {
    let waiting = false;

    return (...args) => {
        if(!waiting) {
            func(...args)
            waiting = true
            setTimeout(() => {
                waiting = false
            }, wait)
        } else {
            // do nothing
        }
    }
}

// Implementing throttle with handling trailing args
// In this version, we are supporting args that can be received during wait period by initialign lastArgs (waiting args) context in order to store them for the next execution
function throttleAdvanced(func, wait, options = {leading: true, trailing: true}) {
    let waiting = false;
    let lastArgs = null;

    return (...args) => {
        if(!waiting) {
            waiting = true
            
            // helper function to trigger a new waiting period
            const startWaitingPeriod = () => setTimeout(() => {
                // if at the end of the waiting period lastArgs exits, execute the function with it
                if(lastArgs) {
                    func.apply(this, lastArgs)
                    lastArgs = null
                    // start another waiting period
                    startWaitingPeriod()
                } else {
                    waiting = false
                }
            }, wait);

            func.apply(this, args)
            startWaitingPeriod()
        } else {
            lastArgs = args;
        }
    }
}


//  To support the leading=false case, instead of immediately invoking the function and then starting the helper function, we do the opposite
// start the helper function, then handle the function call in the same way that we do with any other fucntion call during waiting period (helper functoin)

// leading: whether to invoke right away
// trailing: whether to invoke after the delay.
function throttleWithOptions(func, wait, option = {leading: false, trailing: true}) {
    let waiting = false
    let lastArgs = null

    return (...args) => {
        // if not currently waiting period, allow the function to be executed
        if(!waiting) {
            waiting = true
            
            // helper function
            const startWaitingPeriod = () => setTimeout(() => {
                // if we have to invoke the function right away and we have stored args, execute the function
                if(option.trailing && lastArgs) {
                    func.apply(this, lastArgs)
                    // reset the stored args to null since we exectued the function with them
                    lastArgs = null
                    // start the helper function for another potential trailing function calls
                    startWaitingPeriod()
                } else {
                    // if trailing is not allowed or we dont have stored args, stop the waiting
                    waiting = false;
                }
            }, wait)
            
            // if we have to execute the function right away and we dont have stored args, call the function
            if(option.leading) {
                func.apply(this, args)
            } else {
                // if leading is not allowed store the elements for the next potential trailing functions
                lastArgs = args // if not leading treat like another any function call during waiting period
            }
            // start the waiting period
            startWaitingPeriod()
        } else {
            // if the function is waiting store the ags for the potential next function calls
            lastArgs = args
        }
    }
}

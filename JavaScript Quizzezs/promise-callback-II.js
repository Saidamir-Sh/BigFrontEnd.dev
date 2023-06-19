// 1. finally() never receive an argument
// docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally

// 2. Normal return value in finally won't make effect on promise object
// 3. throw Error in finally()
// Note: A throw (or returning a rejected promise) in the finally callback will reject the new promise with the rejection reason specified when calling throw.

Promise.reject(1)
.finally(() => {                                                                                                                 
    throw new  Error(2); 
});
// or 
Promise.reject(1)
.finally(() => {                                                                                                                          
    return Promise.reject(2); 
});
// The return promise object rejected value will be affected with 2.

// 4. Order of then() & catch()
// Remember then() & catch() can be called to handle the promise at any time and at any order. It will use the latest final state of the promise object, and affects the new value of the promise object.

Promise.reject(1)
.catch((val)=>{
    console.log(val); // 1 : rejected value is 1 
    // return nothing
    // will return undefined for promise object
})
.then((val)=>{
    console.log(val); // undefine: current promise object is already handled by "catch()"
})
// 5. Full solution of original problem
Promise.resolve(1)
.then((val) => {
  console.log(val) // resolve with value 1
  return val + 1  //  return 2  
}).then((val) => {
  console.log(val) // 2
  // return undefined
}).then((val) => {
  console.log(val)  // undefined   
  return Promise.resolve(3)
    .then((val) => {
      console.log(val) // 3
      // return undefined
    })
}).then((val) => {
  console.log(val)  // undefined 
  return Promise.reject(4)  // return 4    
}).catch((val) => {
  console.log(val)  // 4
  // return undefined
}).finally((val) => {
  console.log(val)  // undefined: finally has no arguments
  return 10   // no effect on promise object
}).then((val) => {
  console.log(val)  // undefined: because last 'catch()' handled the promise object with 'undefined'
})

// Answer:
// 1
// 2
// undefined
// 3
// undefined
// 4
// undefined
// undefined
// This is a JavaScript Quiz from BFE.dev

Promise.resolve(1)
.finally((data) => {
  console.log(data)  // undefined because .finally() does not receive any argument
  return Promise.reject('error') 
})
.catch((error) => {
  console.log(error) // error
  throw 'error2'
})
.finally((data) => {
  console.log(data) // // undefined because .finally() does not receive any argument
  return Promise.resolve(2).then(console.log) // 2
})
.then(console.log) // ignored
.catch(console.log) // "error2" from previous .catch()

// undefined
// "error"
// undefined
// 2
// "error2"
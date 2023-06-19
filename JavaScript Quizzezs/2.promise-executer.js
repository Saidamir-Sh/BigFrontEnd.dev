// This is a JavaScript Quiz from BFE.dev

new Promise((resolve, reject) => {
    resolve(1)
    resolve(2)
    reject('error')
  }).then((value) => {
    console.log(value)
  }, (error) => {
    console.log('error')
  })

// Answer: 
// 1

// Explanation :
// Once Promise is fulfilled or rejected, it cannot be fulfilled or rejected again.
// So code is same as :
// new Promise((resolve, reject) => {
//     resolve(1)
//   }).then(
//     (value) => {
//       console.log(value)
//     },
//     (error) => {
//       console.log('error')
//     }
//   )

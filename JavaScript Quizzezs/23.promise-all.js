// This is a JavaScript Quiz from BFE.dev


(async () => {
    await Promise.all([]).then((value) => {
      console.log(value) // []
    }, (error) => {
      console.log(error)
    })
    
    await Promise.all([1,2,Promise.resolve(3), Promise.resolve(4)]).then((value) => {
      console.log(value) // 1, 2, 3, 4
    }, (error) => {
      console.log(error)
    })
    
    await Promise.all([1,2,Promise.resolve(3), Promise.reject('error')]).then((value) => {
      console.log(value)
    }, (error) => {
      console.log(error) // error
    })
  })()
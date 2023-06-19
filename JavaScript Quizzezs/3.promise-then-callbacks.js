Promise.resolve(1)            // fulfilled : 1
  .then(() => 2)              // function is passed, return value is 2 => fulfilled : 2
  .then(3)                    // non-function is passed, previous fulfillment value 2 is used => fulfilled : 2
  .then((value) => value * 3) // function is passed, value is 2, return value is 6 => fulfilled: 6
  .then(Promise.resolve(4))   // Promise object is not function, previous fulfillment value 6 is used => fulfilled : 6
  .then(console.log)          // 6 gets logged

// Answer : 6
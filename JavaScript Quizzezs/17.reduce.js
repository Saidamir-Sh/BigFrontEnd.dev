
[1,2,3].reduce((a,b) => {
    console.log(a,b)
  });
  
[1,2,3].reduce((a,b) => {
    console.log(a,b)
}, 0)

// Answer
// 1,2
// undefined,3
// 0,1
// undefined,2
// undefined,3
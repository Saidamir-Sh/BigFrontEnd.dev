// This is a JavaScript Quiz from BFE.dev

function foo() {
    console.log(i) // undefined
    for (var i = 0; i < 3; i++) {
      console.log(i) // 0 1 2 
    }
  }
  
foo()
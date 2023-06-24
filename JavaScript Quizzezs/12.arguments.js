// This is a JavaScript Quiz from BFE.dev

function log(a,b,c,d) {
    console.log(a,b,c,d) // 1, 2, 3, undefined
    arguments[0] = 'bfe'
    arguments[3] = 'dev'
   
    console.log(a,b,c,d) // 'bfe', 2, 3, undefined
  }
  
  log(1,2,3)


// Explanation :
 
//   function arguments are the actual value passed during function invocation. They are array like objects locally available inside the function.

// 1, 2, and 3 are arguments (total 3):

// log(1,2,3)

// arguments[0] // 1 <---- first argument
// arguments[1] // 2 <---- second argument
// arguments[2] // 3 <---- third argument
// function parameters are variables in the function definition.

// Here a, b, c, and d are parameters (total 4):

// function log(a,b,c,d){}
// On execution of

// arguments[0] = 'bfe'
// the first argument i.e 1 is replaced with 'bfe'.

// However, the execution of following line of code has NO effect since we only have three arguments.

// arguments[3] ='dev' // <---- targets the fourth argument but we only have total three arguments i.e `1`, `2`, `3`
// The value of d would default to undefined.

// So the final console would print:

// "bfe",2,3,undefined

function a() {
    console.log(1)
    return {
      a: function() {
        console.log(2)
        return a() // here it invokes the function
      }
    }
  }
  
  a().a() // here we are calling function object

// Answer :
// 1
// 2
// 1
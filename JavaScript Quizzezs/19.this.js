// This is a JavaScript Quiz from BFE.dev


const obj = {
    a: 1,
    b: function() {
      console.log(this.a) // 1
    },
    c() {
      console.log(this.a) // 1
    },
    d: () => {
      console.log(this.a) // undefined
    },
    e: (function() {
      return () => {
        console.log(this.a); // 1
      }
    })(),
    f: function() {
      return () => {
        console.log(this.a); // 1 
      }
    }
  }
  
  console.log(obj.a) // 1
  obj.b() // 1
  ;(obj.b)() // 1
  const b = obj.b
  b() // 1
  obj.b.apply({a: 2})
  obj.c()
  obj.d()
  ;(obj.d)()
  obj.d.apply({a:2})
  obj.e()
  ;(obj.e)()
  obj.e.call({a:2})
  obj.f()()
  ;(obj.f())()
  obj.f().call({a:2})

//   Answer : 
// 1
// 1
// 1
// undefined
// 2
// 1
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// 1
// 1
// 1
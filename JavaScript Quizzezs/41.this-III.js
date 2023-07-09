// This is a JavaScript Quiz from BFE.dev

const obj = {
    a: 1,
    b: this.a + 1, // 2
    c: () => this.a + 1, // NaN
    d() {
      return this.a + 1 // 2
    },
    e() {
      return (() => this.a + 1)() // 2
    }
  }
  console.log(obj.b) // NaN
  console.log(obj.c()) // NaN
  console.log(obj.d()) // 2
  console.log(obj.e()) // 2
  
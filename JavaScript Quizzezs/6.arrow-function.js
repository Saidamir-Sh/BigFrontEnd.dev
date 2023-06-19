// Arrow function doesn't have its own this, so this inside of arrow functions is pointed to the this at outer scope.

// This is a JavaScript Quiz from BFE.dev

const obj = {
    dev: 'bfe',
    a: function() {
      return this.dev
    },
    b() {
      return this.dev
    },
    c: () => {
      return this.dev
    },
    d: function() {
      return (() => {
        return this.dev
      })()
    },
    e: function() {
      return this.b()
    },
    f: function() {
      return this.b
    },
    g: function() {
      return this.c()
    },
    h: function() {
      return this.c
    },
    i: function() {
      return () => {
        return this.dev
      }
    }
  }
  
  console.log(obj.a())
  console.log(obj.b())
  console.log(obj.c())
  console.log(obj.d())
  console.log(obj.e())
  console.log(obj.f()()) // called function chaining or function composition
//   const obj = {
//     f: function() {
//       console.log("Hello");
//       return function() {
//         console.log("World");
//       };
//     }
//   };
  
//   obj.f()(); // Hello/Wordl
//   obj.f(); // Hello
  console.log(obj.g())
  console.log(obj.h()())
  console.log(obj.i()())

//   Answer : 
"bfe"
"bfe"
undefined
"bfe"
"bfe"
undefined
undefined
undefined
"bfe"

// Explanation:

// console.log(obj.a()); - The comment is correct. It will output bfe because a is a regular function defined within the object obj, and this.dev refers to the dev property of obj, which is 'bfe'.

// console.log(obj.b()); - The comment is correct. It will output bfe for the same reason as in the previous case. The method b is defined using the shorthand method syntax.

// console.log(obj.c()); - The comment is correct. It will output undefined. The method c is defined as an arrow function, which does not have its own this context. Instead, it captures the this value of the surrounding scope, which is the global scope in this case. Since there is no dev property in the global scope, it returns undefined.

// console.log(obj.d()); - The comment is correct. It will output bfe. The method d defines an immediately invoked function expression (IIFE) using an arrow function. The arrow function captures the this value of the enclosing context, which is the obj object. Therefore, this.dev refers to the dev property of obj.

// console.log(obj.e()); - The comment is correct. It will output bfe. The method e calls the b method using this.b(). Since b is defined within the obj object, calling this.b() will access the b method, which returns this.dev (referring to the dev property of obj).

// console.log(obj.f()()); - The comment is correct. It will output undefined. The method f returns the b method itself (not invoking it). So obj.f() returns the b method as a function. When obj.f()() is called, it is equivalent to calling the returned function without any context (this), resulting in undefined.

// console.log(obj.g()); - The comment is correct. It will output undefined for the same reason as in comment 3. The arrow function in the c method captures the global scope this, which does not have a dev property.

// console.log(obj.h()()); - The comment is correct. It will output undefined.






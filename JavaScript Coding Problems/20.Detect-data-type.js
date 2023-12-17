// This is an easy problem.

// For all the basic data types in JavaScript, how could you write a function to detect the type of arbitrary data?

// Besides basic types, you need to also handle also commonly used complex data type including Array, ArrayBuffer, Map, Set, Date and Function

// The goal is not to list up all the data types but to show us how to solve the problem when we need to.

// The type should be lowercase

/**
 * @param {any} data
 * @return {string}
 */
function detectType(data) {
    if (typeof data == FileReader) return 'object '
    return Object.prototype.toString.call(data).slice(1, -1).split(" ")[1].toLowerCase()
  }

detectType(1) // 'number'
detectType(new Map()) // 'map'
detectType([]) // 'array'
detectType(null) // 'null'

// more in judging step

// you can use constructor.name to print the constructor of the data but it has below issue

class ExampleClass {
    constructor() {
        // constructor logic
    }
}

const exampleObj = new ExampleClass()
const myData = 'Hello'

console.log(myData.constructor.name.toLowerCase()); // string ✅ but below is incorrect,
console.log(exampleObj.constructor.name.toLowerCase()); // exampleclass ❌, logging constructor class
console.log(detectType(exampleObj)); // 'object' ✅

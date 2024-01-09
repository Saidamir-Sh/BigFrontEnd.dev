// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object. (source: MDN)

// It is widely used, Object Spread operator actually is internally the same as Object.assign() (source). Following 2 lines of code are totally the same.

// let aClone = { ...a };
// let aClone = Object.assign({}, a);
// This is an easy one, could you implement Object.assign() with your own implementation ?

// note

// Don't use Object.assign() in your code It doesn't help improve your skills

/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function objectAssign(target, ...sources) {
    // your code here
  }

  console.log('--------------------   Solution Logs   --------------------');
/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function objectAssign(target, ...sources) {
  const targetObj = objectAssign.arguments[0];
  for (let i = 1; i < objectAssign.arguments.length; i++) {
    console.log('args', objectAssign.arguments[i]);
  }
  return targetObj;
}
console.log(objectAssign({}, { a: 3 }, { b: 4 })); // expects {a:3,b:4} but got undefined

console.log('--------------------   Explanation Logs   --------------------');

// Object.assing() -> static method copies all enumerable own properities from one or more source objects to target object and returns modified target object

// Syntax: Object.assign(target, source1, source2, ... sourceN)

// Example
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { d: 5, e: 5, c: 10 };

const modifiedTarget = Object.assign(target, source1, source2);
console.log(modifiedTarget); // {a: 1, b: 3, c: 10, d: 5, e: 5}, overrides same keys with new source

// Cloning object
const obj = { a: 1 };
const copy = Object.assign({}, obj);

console.log(modifiedTarget == target); // true

// Warning for Deep cloning -> When we deep clone an object with nested object, we need to use structuredClone() or like lodash functions because for nested objects Object.assign() does not shallow copy nested properties instead it copies the references of nested objects as a result when you modify nested object of clone modified value will be effect on both objects

const obj1 = { a: 10, b: { c: 15 } };
const obj2 = Object.assign({}, obj1);
obj2.b.c = 20;
console.log(obj1.b.c); // 2

console.log(obj1.b.c == obj2.b.c); // true
console.log(obj1 == obj2); // false

// This is a JavaScript Quiz from BFE.dev

console.log(JSON.stringify([1,2,null,3])) // "[1,2,null,3]

console.log(JSON.stringify([1,2,undefined,3])) //  "[1,2,null,3]"

console.log(null === undefined) //// false, null and undefined are different

console.log(null == undefined) // true, this is by design, null and undefined are loosely equal

console.log(null == 0) // false. For `==`, null is only loosely equal to undefined, no other values.

console.log(null < 0) // false.  since both of them are not string, null is converted to number, which is 0. 
// 0 < 0 is false

console.log(null > 0) // false.  since both of them are not string, null is converted to number, which is 0. 
// 0 < 0 is false

console.log(null <= 0) // // true. `a >= b` is internally done by revsersing the result of `a < b`, 
// since `0 <= null` is false. the result is true
console.log(null >= 0) // true

console.log(undefined == 0) // // false. For `==`, null is only loosely equal to undefined, no other values.

console.log(undefined < 0) // false
// false. since both of them are not string, undefined is converted to number, which is NaN.
// NaN < 0 is false
console.log(undefined > 0) // false
// false. since both of them are not string, undefined is converted to number, which is NaN. 
// But internally NaN in `<` comparison results in `undefined`, which is diffrent from null case. 
// `undefined` is reversed in to `true` (Yeah I know it's weird)
console.log(undefined <= 0) // false
console.log(undefined >= 0) // false

// Explanation : 

// In JavaScript, null and undefined are both special values that indicate the absence of a meaningful value. While they are similar in some ways, they have different characteristics.

// undefined is a built-in value in JavaScript that is automatically assigned to a variable that has been declared but not initialized or assigned a value. It can also be explicitly assigned to a variable. For example:

// javascript
// Copy code
// let x; // x is undefined

// let y = undefined; // y is explicitly assigned the value undefined
// null, on the other hand, is a value that can be assigned to a variable to indicate the intentional absence of any object value. It is often used to represent an empty or non-existent value. Unlike undefined, null is a value that needs to be assigned explicitly. For example:

// javascript
// Copy code
// let z = null; // z is explicitly assigned the value null
// In terms of type coercion, when comparing null and undefined, JavaScript treats them as different values. When using the loose equality operator (==), which performs type coercion, null and undefined are considered equal to each other, but not to any other value. For example:
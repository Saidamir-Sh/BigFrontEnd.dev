console.log(typeof null) // object
console.log(null instanceof Object) // false
console.log(typeof 1) // number
console.log(1 instanceof Number) // false
console.log(1 instanceof Object) // false
console.log(Number(1) instanceof Object) // false
console.log(new Number(1) instanceof Object) // true
console.log(typeof true) // boolean
console.log(true instanceof Boolean) // false
console.log(true instanceof Object) // false
console.log(Boolean(true) instanceof Object) // false
console.log(new Boolean(true) instanceof Object) // true
console.log([] instanceof Array) // true -> empty array Array is instance of Object
console.log([] instanceof Object) // true
console.log((() => {}) instanceof Object) // true  

// Answer: 
"object"
false
"number"
false
false
false
true
"boolean"
false
false
false
true
true
true
true
// Explanation : 

// typeof Operator:
// The typeof operator is a unary operator that returns a string indicating the type of the operand.
// It is primarily used to check the primitive type of a value (such as "string", "number", "boolean", "undefined", "object", "symbol", or "function").
// It can also be used with variables that hold non-primitive types, but it will return "object" for most objects (including arrays, null, and dates) and "function" for functions.
// Example: typeof "Hello" returns "string", typeof 42 returns "number", typeof true returns "boolean", typeof undefined returns "undefined", typeof null returns "object", and so on.

// instanceof Operator:

// The instanceof operator tests whether an object belongs to a specific class or constructor function.
// It checks the prototype chain to determine if the object is an instance of a particular class or constructor function.
// It returns a boolean value (true or false) based on the result of the comparison.
// It is typically used with custom-defined classes or constructor functions to check if an object is an instance of that class or a derived class.
// Example: object instanceof MyClass checks if object is an instance of MyClass or any class derived from MyClass.

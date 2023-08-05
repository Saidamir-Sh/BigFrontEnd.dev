// This is a JavaScript Quiz from BFE.dev

// attention that for console.log('"a"'), you should enter ""a""
// please refer to format guide

// both primitives remain as it is
console.log(JSON.stringify(['false', false])) // "["false",false]"

// in an array these values are converted to null
console.log(JSON.stringify([NaN, null, Infinity, undefined])) // "[null,null,null,null]"

// in an object, undefined keys are omitted, while NaN gets converted to null
console.log(JSON.stringify({a: null, b: NaN, c: undefined})) // "{"a":null,"b":null}"

// Answer:
// '["false", false]'
// '[null, null, null, null]'
// '{"a": null, "b": null}'

// Explanation :
// stringfy -> Converts JavaScript value to JSON string
// console.log({x: 5, y: 7}) -> '{"x": 5, "y": 7}'
// console.log(JSON.stringfy([new Number(3), new String('false'), new Boolean(false)])) -> '[3, "false", false]'
// console.log(JSON.stringfy({x: [10, undefined, function() {}, Symbol('')]})) -> '{"x": [10, null, null, null]}'

// Syntax: 
// JSON.stringify(value, replace, space)
// value -> value to convert
// replace -> A function that alters the behavior of the stringification process, or an array of strings and numbers that specifies properties of value to be included in the output
// space -> A string or number that's used to insert white space (including indentation, line break characters, etc.) into the output JSON string for readability purposes.

// Example of replacer param
function replacer(key, value) {
    // Filtering out properties
    if (typeof value === "string") {
      return undefined;
    }
    return value;
  }
  
  const foo = {
    foundation: "Mozilla",
    model: "box",
    week: 45,
    transport: "car",
    month: 7,
  };
  JSON.stringify(foo, replacer);
  // '{"week":45,"month":7}'  


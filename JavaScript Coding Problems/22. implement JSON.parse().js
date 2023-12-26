// This is a follow-up on 21. implement JSON.stringify().

// Believe you are already familiar with JSON.parse(), could you implement your own version?

// In case you are not sure about the spec, MDN here might help.

// JSON.parse() support a second parameter reviver, you can ignore that.

// note

// Don't use JSON.parse() in your code here It doesn't help you practicing your skills.

/**
 * @param {string} str
 * @return {object | Array | string | number | boolean | null}
 */
console.log('--------------------   Solution Logs   --------------------');
/**
 * @param {string} str
 * @return {object | Array | string | number | boolean | null}
 */
function parse(str) {
  if (str === '' || str[0] === "'") {
    throw Error();
  }

  if (str === 'null') {
    return null;
  }

  if (str === '{}') {
    return {};
  }

  if (str === '[]') {
    return [];
  }

  if (str === 'true') {
    return true;
  }

  if (str === 'false') {
    return false;
  }

  if (str[0] === '"') {
    return str.slice(1, -1);
  }

  if (+str === +str) {
    return Number(str);
  }
  if (str.startsWith('{')) {
    let arrObj = str.slice(1, -1).split(',');
    return arrObj.reduce((acc, val) => {
      const index = val.indexOf(':'); // find the ":" in string
      const key = val.slice(0, index); // slice the string until index of ":", so it will be the key of the object
      const value = val.slice(index + 1);
      acc[parse(key)] = parse(value);
      return acc;
    }, {});
  }

  if (str.startsWith('[')) {
    return str
      .slice(1, -1)
      .split(',')
      .map((val) => parse(val));
  }
}

const complexJSON =
  '{"name": "Bob", "age": 35, "address": {"city": "Paris", "postalCode": "75001"}, "isStudent": false, "negInfinityValue": "-Infinity", "nanValue": "NaN", "dateValue": "2023-12-24T12:00:00.000Z", "nullVal": "undefined"}';

const arrayJSON = '[1, 5, "false", "null", true, false]';

console.log(parse(complexJSON));
// console.log(parse(arrayJSON));

console.log('--------------------   Explanation Logs   --------------------');
// static method that parses JSON string
// syntax: JSON.parse(text, reviver)
// optional reviver -> function to perform transformation on resulting object before it is returned

const jsonValue = '{"result": true, "count": 42}';
const obj = JSON.parse(jsonValue);
console.log(obj);

// Return value:
// Object, Array, string, number, boolean, null corresponding to the given JSON text,
// undefined, Infinity, -Infinity, function() {}, Symvol() ---- > throws an Error
// value = false / null / true / object / array / number / string ---- > Valid JSON values

// Examples:
console.log(JSON.parse('{}')); // {}
console.log(JSON.parse('true')); // true
console.log(JSON.parse('false')); // false

console.log(JSON.parse('"foo"')); // "foo"
// console.log(JSON.parse("foo")) // Error: Unexpected token 'o', "foo" is not valid JSON

console.log(JSON.parse('null')); // null
console.log(JSON.parse('[1, 5, "false", "null"]')); // [1, 5, "false", "null"]

console.log(JSON.parse('[1, true, false, null]')); // [1, true, false, null]

// console.log(JSON.parse("'foo'")) // Does not allow single quotes | Error: Unexpected token ''', "'foo'" is not valid JSON
// console.log(JSON.parse('["string", 42, true,]')); // Does not allow trailing commas | Error: Unexpected token ']', ..." 42, true,]" is not valid JSON

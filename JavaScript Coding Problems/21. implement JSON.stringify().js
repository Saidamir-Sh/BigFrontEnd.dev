// I believe you've used JSON.stringify() before, do you know the details of how it handles arbitrary data?

// Please have a guess on the details and then take a look at the explanation on MDN, it is actually pretty complex.

// In this problem, you are asked to implement your own version of JSON.stringify().

// In a real interview, you are not expected to cover all the cases, just decide the scope with interviewer. But for a goal of practicing, your code here will be tested against a lot of data types. Please try to cover as much as you can.

// Attention to the circular reference.

// note

// JSON.stringify() support two more parameters which is not required here.

// Don't use JSON.stringify() in your code here, it doesn't help you practicing coding skills.

/**
 * @param {any} data
 * @return {string}
 */
function stringify(data) {
  if (typeof data === 'bigint') {
    return new Error('Does not know how to serialize this type of data.');
  }

  if (
    data === Infinity ||
    data === -Infinity ||
    Number.isNaN(data) ||
    data === null ||
    data !== data || // handle NaN
    typeof data === 'undefined' ||
    typeof data === 'symbol'
  ) {
    return 'null';
  }

  if (typeof data === 'string') {
    return `"${data}"`;
  }

  if (typeof data === 'number' || typeof data === 'boolean') {
    return `${data}`;
  }

  if (typeof data === 'function') {
    return undefined;
  }

  if (Array.isArray(data)) {
    let result = [];
    // data.reduce((acc, currVal) => {
    //   result.push(stringify(currVal));
    // }, []);
    data.map((currentVal) => {
      result.push(stringify(currentVal));
    });
    return `[${result.join(',')}]`;
  }

  if (typeof data === 'object') {
    for (const [key, value] of Object.entries(data)) {
      console.log(`{${key}: }`);
      // stringify(value);
    }
  }
}

let inputObject = {
  arrayVals: [
    function () {},
    Symbol(''),
    'hello',
    42,
    undefined,
    NaN,
    Infinity,
  ],
  stringVal: 'hello world',
  numberVal: 42,
  booleanVal: true,
  nestedObject: {
    functionKey: function () {},
    symbolKey: Symbol(''),
    undefinedKey: undefined,
    infinityVal: Infinity,
  },
  nanVal: NaN,
};

let inputArray = [
  function () {},
  Symbol(''),
  'hello',
  42,
  undefined,
  NaN,
  Infinity,
  true,
];
console.log(stringify(inputArray));
// console.log(stringify(inputObject));

// EXPLANATION :
console.log('--------- Explanation logs ----------------');
// string, number, boolean are converted corresponding primitive values
console.log(JSON.stringify(42)); // 42
console.log(JSON.stringify('Hello')); // "Hello"
console.log(JSON.stringify(true)); // "true"

// in ARRAY : function, Symbol, undefined converted to null
console.log(JSON.stringify([function () {}, 45, Symbol(''), undefined])); // ---- >  [null,null,null]

// in OBJECT : function, Symbol, undefined will be OMITTED (skipped)
let specialObject = {
  functionKey: function () {},
  symbolKey: Symbol(''),
  undefinedKey: undefined,
};

console.log(JSON.stringify(specialObject)); // ---- >  {}

// Infinity, -Infinity, null, NaN will be ALWAYS NULL

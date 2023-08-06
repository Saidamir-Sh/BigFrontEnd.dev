// This is a JavaScript Quiz from BFE.dev


const foo = [0]
if (foo) {
  console.log(foo == true) // false - when using '==' both sides convert to numbers: 0 == 1 -> false
} else {
  console.log(foo == false)
}


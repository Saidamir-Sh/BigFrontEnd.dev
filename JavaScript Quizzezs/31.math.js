// This is a JavaScript Quiz from BFE.dev

console.log(1 / 0) // Infinity
console.log(0 / 0) // NaN
console.log(-1 / 0) // -Infinity
console.log(1 / 0 * 0) // NaN
console.log(1 / 0 * 1) // Infinity
console.log(1 / 0 * -1) // -Inifnity
console.log(1 / 0 * 1 + 1 / 0 * 1) // Infinity
console.log(1 / 0 * 1 - 1 / 0 * 1) // NaN
console.log(1 / 0 * 1 * (1 / 0 * 1)) // Infinity
console.log(1 / 0 * 1 / (1 / 0 * 1)) // NaN
console.log(0 / Infinity) // 0
console.log(0 * Infinity) // Infinity
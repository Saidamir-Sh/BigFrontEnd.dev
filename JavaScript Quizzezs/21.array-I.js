// This is a JavaScript Quiz from BFE.dev

const a = [0]
console.log(a.length) // 1
a[3] = 3
console.log(a.length) // 4
for (let item of a) {
  console.log(item) // 0, , , 3
}
a.map(item => {console.log(item)}) // 0, 3 
a.forEach(item => {console.log(item)}) // 0, 3
console.log(Object.keys(a)) // ['0', '3']
delete a[3] // return true
console.log(a.length) // 1
a[2] = 2
a.length = 1
console.log(a[0],a[1],a[2])
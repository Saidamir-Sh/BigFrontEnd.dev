// This is a JavaScript Quiz from BFE.dev

const func1 = () => console.log(1)

func1() // 1

func2() // 2

function func2() {
  console.log(2)
}


func3() // Error

var func3 = function func4() {
  console.log(3)
}
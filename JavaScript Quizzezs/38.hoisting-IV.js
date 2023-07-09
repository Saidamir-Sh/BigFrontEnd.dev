// This is a JavaScript Quiz from BFE.dev

let foo = 10
function func1() {
    console.log(foo) // undefined -> 
    var foo = 1
}
func1 ()


function func2() {
    console.log(foo) // Reference Error -> cannot access before initialization
    let foo = 1
}
func2 ()

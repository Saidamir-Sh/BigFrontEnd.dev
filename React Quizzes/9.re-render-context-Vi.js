// This is a React Quiz from BFE.dev 

import React, { useState, createContext, useEffect, useContext} from 'react'
import ReactDOM from 'react-dom'

const MyContext = createContext(0);

function B({children}) {
  const count = useContext(MyContext)
  console.log('B')
  return children
}

const A = ({children}) => {
  const [state, setState] = useState(0)
  console.log('A')
  useEffect(() => {
    setState(state => state + 1)
  }, [])
  return <MyContext.Provider value={state}>
    {children}
  </MyContext.Provider>
}

function C() {
  console.log('C')
  return null
}

function D() {
  console.log('D')
  return null
}
function App() {
  console.log('App')
  return <A><B><C/></B><D/></A>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

// Answer: 
"App"
"A"
"B"
"C"
"D"
"A"
"B"

// Explanation
// mounting
// App
// A
// B
// C
// D
// state updated
// A
// B
// There are 3 insights needed to solve this:

// Upon re-render, if the component returns new instances of child elements, then of course they will all be rendered
// But if the component's parent provided it with the list of children elements to render, then of course there is no need to render them again
// Unless, they are consumers of the context themself.
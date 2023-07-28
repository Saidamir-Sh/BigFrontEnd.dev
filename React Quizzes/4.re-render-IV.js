// This is a React Quiz from BFE.dev 

import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function A({ children }) {
  console.log('A')
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(state => state + 1)
  }, [])
  //when parent component's state changes, parent component re-renrenders,
  // but it still has the same children prop it got last time, so React doesnt visit that subtree


  // there are 2 ways of preventing child components re-render:
  // - wrapping them in memo
  // - passing as props 
  return children
}

function B() {
  console.log('B')
  return <C/>
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
  return (
    <div>
      <A><B/></A>
      <D/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

// Answer:
// "App"
// "A"
// "B"
// "C"
// "D"
// "A"

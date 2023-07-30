// This is a React Quiz from BFE.dev 

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [state, setState] = useState(0)
  console.log(state)

  useEffect(() => {
    setState(state => state + 1)
  }, [])

  useEffect(() => {
    console.log(state)
    setTimeout(() => {
      console.log(state)
    }, 100)
  }, [])

  return null
}

ReactDOM.render(<App/>, document.getElementById('root'))

// Answer:
// 0 // initial log outside of hooks
// 0 // from the second useEffect
// 1 // outside hooks, when state change happened
// 0 // queued setTimeout(console.log(state)) with closure

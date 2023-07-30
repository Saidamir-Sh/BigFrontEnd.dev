// This is a React Quiz from BFE.dev

import React, { useRef, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'

function App() {
  const ref = useRef(false)

  useLayoutEffect(() => {
    console.log(1)
    ref.current = true
  })

  return <button
    autoFocus
    onFocus={() => {
      console.log(!!ref.current)
    }}
    >
    button
  </button>
}

ReactDOM.render(<App/>, document.getElementById('root'))

// Answer:
false
1

// useLayoutEffect is fired after onFocus which is DOM mutation
// first render of a button with 'autoFocus' will trigger onFocus FN.
// Because they use '!!' on the boolean its set to true because useLayoutEffect This runs synchronously immediately after React has performed all DOM mutations. Ref will not trigger re render.
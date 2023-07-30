// This is a React Quiz from BFE.dev 

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

function App() {
  const [state, setState] = useState(0)
  const increment = () => {
    setTimeout(() => {
      setState(state + 1)
    }, 0)
  }
  console.log(state)
  return <div>
    <button onClick={increment}>click me</button>
  </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))

// click the button twice
userEvent.click(screen.getByText('click me'))
userEvent.click(screen.getByText('click me'))

// Answer:
// 0
// 1
// 1

// Explanation:
// setTimeout(() => {}, 0) put setState call in a marcro task with the current state bind into closure

// that's why in the second and third render, states are both 1.
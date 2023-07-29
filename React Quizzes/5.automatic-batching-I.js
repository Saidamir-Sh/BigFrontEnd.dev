// This is a React Quiz from BFE.dev 

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

function App() {
  const [state, setState] = useState(0)
  console.log("App " + state)
  return (
    <div>
      <button onClick={() => {
        setState(count => count + 1)
        setState(count => count * 2)
      }}>click me</button>
    </div>
  )
}

(async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App/>)

  userEvent.click(await screen.findByText('click me'))
})()

// Answer: 
// "App 0"
// "App 2"

// Explanation : 
// React will automatically batch any state updates that happen within the same event loop tick. This means that state updates that happen inside timeouts, promises, native event handlers or any other events will be batched the same way as state updates inside React events

import React, { memo, useState } from 'react'
import ReactDOM from 'react-dom'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

function _B() {
  console.log('B')
  return null
}

const B = memo(_B)

function _A({ children }) {
  console.log('A')
  return children
}

const A = memo(_A)

function App() {
  const [count, setCount] = useState(0)
  return <div>
    <button onClick={
      () => setCount(count => count + 1)
    }>
      click me
    </button>
    <A><B/></A>
  </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))

userEvent.click(screen.getByText('click me'))

// Answer:
// first render, both component will be rendered
"A"
"B"
// second render, since children in A doesn't have any props change, B will return memorized render result directly, not do re-render, hence only A get rendered
"A"
// Explanation :
// using children makes React.memp() won't work
// link : https://gist.github.com/slikts/e224b924612d53c1b61f359cfb962c06
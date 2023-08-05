// This is a React Quiz from BFE.dev 

import React, { useState, useEffect, useLayoutEffect, useInsertionEffect} from 'react'
import ReactDOM from 'react-dom'

function App() {
  console.log(1)
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(state => state + 1)
  }, [])

  useEffect(() => {
    console.log(2)
    return () => {
      console.log(3)
    }
  }, [state])

  useEffect(() => {
    console.log(4)
    return () => {
      console.log(5)
    }
  }, [state])

  useLayoutEffect(() => {
    console.log(6)
    return () => {
      console.log(7)
    }
  }, [state])

  useInsertionEffect(() => {
    console.log(8)
    return () => {
      console.log(9)
    }
  }, [state])
  console.log(10)
  return null
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)


// Answer:
1
10
8
6
2
4
1
10
9
8
7
6
3
5
2
4

// first render
1
10
8
6
2
4
// re-render 
1
10
9
8
7
6
3
5
2
4
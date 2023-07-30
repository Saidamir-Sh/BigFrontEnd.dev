// This is a React Quiz from BFE.dev 

import React, { useState, useEffect, useLayoutEffect} from 'react'
import ReactDOM from 'react-dom'

function App() {
  console.log('App')
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(state => state + 1)
  }, [])

  useEffect(() => {
    console.log('useEffect 1')
    return () => {
      console.log('useEffect 1 cleanup')
    }
  }, [state])

  useEffect(() => {
    console.log('useEffect 2')
    return () => {
      console.log('useEffect 2 cleanup')
    }
  }, [state])

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
    return () => {
      console.log('useLayoutEffect cleanup')
    }
  }, [state])

  return null
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

// Answer:
"App"
"useLayoutEffect"
"useEffect 1"
"useEffect 2"
"App"
"useLayoutEffect cleanup"
"useLayoutEffect"
"useEffect 1 cleanup"
"useEffect 2 cleanup"
"useEffect 1"
"useEffect 2"


// Explanation:
// The script will run from top to bottom

// "App"

// Then the useLayoutEffect will be executed before the return

// "useLayoutEffect"

// -- render the component (return null) Time for effect The first effect calls the set function, add it to the call stack, and uses it later Continue with the subsequent 2 effects

// "useEffect 1"

// "useEffect 2"

// Now the set function updates the state > rerender our component

// "App"

// Again, useLayoutEffect runs before the return but needs to clean up the previous one

// "useLayoutEffect cleanup"

// "useLayoutEffect"

// Next, effects whose dependency is the state. They have clean-up functions so all of the clean-up functions must run before their effects.

// "useEffect 1 cleanup"

// "useEffect 2 cleanup"

// "useEffect 1"

// "useEffect 2"
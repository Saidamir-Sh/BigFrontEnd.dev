// This is a React Quiz from BFE.dev

import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [state1, setState1] = useState(1);

  const [state2] = useState(() => {
    console.log(2);
    return 2;
  });

  console.log(state1);

  useEffect(() => {
    setState1(3);
  }, []);

  return null;
}

ReactDOM.render(<App/>, document.getElementById('root'))

// Answer:

// 2
// 1
// 3
// Key takeaways

// If you pass function to useState, then that function gets called right away.

// const [state2] = useState(() => {
//   console.log('inside hook', 2); // One console statement
//   return 2;
// });
// This will print inside hook 2 right away

// Then component will try to render which will print state 1 i.e. 2

// Once component is rendered, useEffect will be called this will call setState1. Updating state will cause component to render again and print Console from main 3
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'

function App() {
  const [count, setCount] = useState(1)
  console.log(1)
  useEffect(() => {
    console.log(2)
    return () => {
      console.log(3)
    }
  }, [count])

  useEffect(() => {
    console.log(4)
    setCount(count => count + 1)
  }, [])
  return <Child count={count} />
}

function Child({ count }) {
  useEffect(() => {
    console.log(5)
    return () => {
      console.log(6)
    }
  }, [count]);

  return null;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)


// Answer:
1
5
2
4
1
6
3
5
2
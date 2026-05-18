import React, { useState } from 'react'
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0)
  function clickHandler(){
    setCount(count +1)
  }
  return (
    <div className='container'>
      <h1>Count: {count}</h1>
      <div style={{display:'flex', gap: '10px', padding: '15px'}}>
        <button onClick={clickHandler}>Increment</button>
        <button onClick={()=> setCount(Math.max(0, count-1))}>Decrement</button>
      </div>
    </div>
  )
}

export default App
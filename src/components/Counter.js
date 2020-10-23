import React, { useState } from 'react'

export default function Counter() {

  const [counter, setCounter] = useState(0)
  return (
    <>
      <h2>TDD Counter</h2>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={()=>{setCounter(counter+1)}}>Increment</button>
      <button id="decrement-btn" onClick={()=>{setCounter(counter-1)}}>Decrement</button>
    </>
  )
}

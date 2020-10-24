import React, { useContext, useState } from 'react'
import { useCounter } from '../contexts/CounterContext'

export default function Counter() {

  // const [counter, setCounter] = useState(0)
  const { count, setCount } = useCounter();
  return (
    <>
      <h2>TDD Counter</h2>
      <div id="counter-value">{count}</div>
      <button id="increment-btn" onClick={()=>{setCount(count+1)}}>Increment</button>
      <button id="decrement-btn" onClick={()=>{setCount(count-1)}}>Decrement</button>
    </>
  )
}

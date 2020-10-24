import React, { createContext, useContext, useState } from 'react'

export const CounterContext = createContext();

export const useCounter = () => {
  return useContext(CounterContext)
}

export const CounterProvider = (props) => {

  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount
  }

  return (
    <CounterContext.Provider value={value} {...props}>
      {props.children}
    </CounterContext.Provider>
  )
}

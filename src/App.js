import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <h2>TDD Counter</h2>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn">Increment</button>
    </div>
  );
}

export default App;

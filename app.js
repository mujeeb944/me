import React, { useState } from 'react';

const RandomCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const randomize = () => setCount(Math.floor(Math.random() * 100));

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Random Counter</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={increment} style={buttonStyle}>
          Increment
        </button>
        <button onClick={decrement} style={buttonStyle}>
          Decrement
        </button>
        <button onClick={randomize} style={buttonStyle}>
          Randomize
          <button onClick={randomize} style={buttonStyle}>
            Randomize
          </button>
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  margin: '5px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default RandomCounter;

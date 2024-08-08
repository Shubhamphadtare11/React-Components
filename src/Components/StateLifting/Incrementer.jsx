import React from 'react';

function Incrementer({ onIncrement }) {
  return (
    <button onClick={onIncrement}>Increment</button>
  );
}

export default Incrementer;

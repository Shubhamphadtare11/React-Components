import React from 'react';

function Decrementer({ onDecrement }) {
  return (
    <button onClick={onDecrement}>Decrement</button>
  );
}

export default Decrementer;

import React, { useState } from 'react';
import Incrementer from './Incrementer';
import Decrementer from './Decrementer';

function LiftParent() {
  // State is lifted to the parent component
  const [count, setCount] = useState(0);

  // Handlers to update the state
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <Incrementer onIncrement={handleIncrement} />
      <Decrementer onDecrement={handleDecrement} />
    </div>
  );
}

export default LiftParent;

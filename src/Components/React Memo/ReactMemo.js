import React from "react";
import { useState } from "react";

const ReactMemo = () => {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  console.log("parent rendered");
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Increment counter</button>
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr />
      <ChildComponent count={count} />
    </div>
  );
};

const ChildComponent = React.memo(function ChildComponent({ count }) {
    console.log("child component is rendering");
    return (
      <div>
        <h2>This is a child component.</h2>
        <h4>Count: {count}</h4>
      </div>
    );
  });

export default ReactMemo;

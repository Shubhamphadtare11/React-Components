import { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squaredValue = useMemo(() => {
    console.log("expensive calculation");

    return counter * counter;
  }, [counter]);

  return (
    <div>
      <p>Squared Value: {squaredValue}</p>
      <button style={{border: "1px solid black"}} onClick={() => setCounter(counter + 1)}>Increase Count</button>
      <p>Decremented Value: {counter2}</p>
      <button style={{border: "1px solid black"}} onClick={() => setCounter2(counter2 - 1)}>Decrement Value</button>
    </div>
  );
};

export default UseMemoExample;

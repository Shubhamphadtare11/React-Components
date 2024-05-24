import React, { useState } from "react";
import { Child } from "./Child";

export const Parent = () => {
  const [childText, setChildText] = useState("type something");

  const getChildVal = (e) => {
    setChildText(e.target.value);
  };

  return (
    <div>
      <Child getChildVal={getChildVal} />
      <h1>{childText}</h1>
    </div>
  );
};

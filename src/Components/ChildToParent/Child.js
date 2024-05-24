import React from "react";

export const Child = ({ getChildVal }) => {
  return (
    <div>
      <input type="text" style={{border: "1px solid black"}} onChange={getChildVal} />
    </div>
  );
};

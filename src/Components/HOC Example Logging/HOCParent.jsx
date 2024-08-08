import React from 'react';
import withLogging from './withLogging'; // Import the HOC

// A simple functional component to demonstrate the HOC
function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
}


// Wrap the component with the HOC
const MyComponentWithLogging = withLogging(MyComponent);

function HOCParent() {
  return (
    <div>
      <MyComponentWithLogging name="World" />
    </div>
  );
}

export default HOCParent;

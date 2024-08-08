import React, { useEffect } from 'react';

// Higher-Order Component for logging
const withLogging = (WrappedComponent) => {
  const WithLogging = (props) => {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted`);
      return () => {
        console.log(`Component ${WrappedComponent.name} will unmount`);
      };
    }, []);

    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} updated`);
    }, [props]);

    return <WrappedComponent {...props} />;
  };

  return WithLogging;
};

export default withLogging;

import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (progress < window.innerWidth - 10) {
  //       setProgress((prev) => prev + 10);
  //     }
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // return (
  //   <div
  //     style={{
  //       width: `${progress}px`,
  //       backgroundColor: "blue",
  //       height: "20px",
  //       transition: "ease-in-out 0.5s width",
  //     }}
  //   ></div>
  // );

  const[progress,setProgress]=useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(progress<window.innerWidth -10){
        setProgress((prev)=>prev+10)
      }
    })

    return()=>{
      clearInterval(interval);
    }
  },[])

  return(
    <div
    style={{
      width:`${progress}px`,
      height:"20px",
      backgroundColor:"blue",
      transition:"ease-in-out 0.5s width"
    }}
    >

    </div>
  )
};

export default ProgressBar;

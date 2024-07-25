import React from 'react'
import { useEffect, useState } from 'react';

const useFetchAPI = () => {

    const[items,setItems]=useState([]);

    useEffect(()=>{
      fetchAPI();
    },[])

  //      function fetchAPI() {
  //   fetch("https://jsonplaceholder.typicode.com/comments")
  //     .then((res) => res.json())
  //     .then((res) => setItems(res))
  //     .catch((err) => console.log(err));
  // }
  
    const fetchAPI = async ()=>{
      const response = await fetch("https://jsonplaceholder.typicode.com/comments");
      const items = await response.json();
      setItems(items);
    }
    return items;
   
}

export default useFetchAPI
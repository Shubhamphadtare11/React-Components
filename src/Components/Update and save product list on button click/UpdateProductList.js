import React, { useState } from "react";

function UpdateProductList() {
  const [product, setProduct] = useState([
    { id: 1, Name: "Apple"},{ id: 2, Name: "Mango"}, {id: 3, Name: "Orange" },
  ]);

  function UpdateList(){
    let UpdatedList = product.map((item)=>{
        if(item.Name==="Apple"){
            return {...product,Name:"Pineapple"}
        }
        return item;
    })
    setProduct(UpdatedList)
  }

  return(
    <>
    <ul>
        {product.map((item)=>(
            <li key={item.id}>{item.Name}</li>
        ))}
    </ul>
    <button onClick={UpdateList}>Click Me</button>
    </>
  )
}

export default UpdateProductList;

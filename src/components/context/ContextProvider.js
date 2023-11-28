import React, { useState } from "react";
import CreateContext from "./CreateContext.js";
const ContextProvider = ({ children }) => {
  // const [flag, setFlag] = useState('');

  const [BangleObj,setBangleObj] = useState(
    {
      title:"Bangle",
      quantity:0,
      price:0
    }
  )
  const [RingObj,setRingObj] = useState(
    {
      title:"Ring",
      quantity:0,
      price:0
    }
  )
  const [NecklaceObj,setNecklaceObj] = useState(
    {
      title:"Necklace",
      quantity:0,
      price:0
    }
  )
  return (
    <CreateContext.Provider value={{ BangleObj,setBangleObj,RingObj,setRingObj,NecklaceObj,setNecklaceObj}}>
      {children}
    </CreateContext.Provider>
  );
};
export default ContextProvider;

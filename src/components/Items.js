import React, { useState, useContext } from "react";
import bangle from "../images/bangle.jpg";
import ring from "../images/ring.jpg";
import neck from "../images/neck.jpg";
import CreateContext from "./context/CreateContext";
const Items = () => {
  const { setBangleObj, setRingObj, setNecklaceObj, BangleObj, RingObj,NecklaceObj } =
    useContext(CreateContext);

  const handleAddToCart = (thing) => {
    if(thing=='bangle'){
      setBangleObj({
        ...BangleObj,
        quantity: BangleObj.quantity + 1,
        price: BangleObj.price + 200,
      });
    }else if(thing=='ring'){
      setRingObj({
        ...RingObj,
        quantity: RingObj.quantity + 1,
        price: RingObj.price + 100,
      });
    }else{
      setNecklaceObj({
        ...NecklaceObj,
        quantity: NecklaceObj.quantity + 1,
        price: NecklaceObj.price + 1000,
      });
    }
  };
  console.log("bangle",BangleObj);
  console.log("ring",RingObj);
  console.log("neck",NecklaceObj);
  return (
    <div>
      <div
        style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}
      >
        All Items
      </div>
      <div className="cardContainer">
        <div className="card">
          <div>
            <img style={{ height: "160px", width: "100%" }} src={bangle} />
          </div>
          <div>
            <h3>Bangle</h3>
          </div>
          <div>
            <h3>$ 200</h3>
          </div>
          <div>
            <button onClick={() => handleAddToCart("bangle")}>add to cart</button>
          </div>
        </div>
        <div className="card">
          <div>
            <img style={{ height: "160px", width: "100%" }} src={ring} />
          </div>
          <div>
            <h3>Ring</h3>
          </div>
          <div>
            <h3>$ 100</h3>
          </div>
          <div>
            <button onClick={() => handleAddToCart("ring")}>add to cart</button>
          </div>
        </div>
        <div className="card">
          <div>
            <img style={{ height: "160px", width: "100%" }} src={neck} />
          </div>
          <div>
            <h3>Necklace</h3>
          </div>
          <div>
            <h3>$ 1000</h3>
          </div>
          <div>
            <button onClick={() => handleAddToCart("neck")}>add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;

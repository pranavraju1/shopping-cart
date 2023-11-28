import React, { useState, useContext } from "react";
import bangle from "../images/bangle.jpg";
import ring from "../images/ring.jpg";
import neck from "../images/neck.jpg";
import CreateContext from "./context/CreateContext";
const Cart = () => {
  const {
    setBangleObj,
    setRingObj,
    setNecklaceObj,
    BangleObj,
    RingObj,
    NecklaceObj,
  } = useContext(CreateContext);
  // console.log(BangleObj,RingObj,NecklaceObj);
  function add(e) {
    let element = e.target.parentNode.children[1].children[0].innerText;
    if (element == "Bangle") {
      setBangleObj({
        ...BangleObj,
        quantity: BangleObj.quantity + 1,
        price: BangleObj.price + 200,
      });
    } else if (element == "Ring") {
      setRingObj({
        ...RingObj,
        quantity: RingObj.quantity + 1,
        price: RingObj.price + 100,
      });
    } else {
      setNecklaceObj({
        ...NecklaceObj,
        quantity: NecklaceObj.quantity + 1,
        price: NecklaceObj.price + 1000,
      });
    }
  }
  function sub(e) {
    let element = e.target.parentNode.children[1].children[0].innerText;
    if (element == "Bangle" && BangleObj.quantity > 0) {
      setBangleObj({
        ...BangleObj,
        quantity: BangleObj.quantity - 1,
        price: BangleObj.price - 200,
      });
    } else if (element == "Ring" && RingObj.quantity > 0) {
      setRingObj({
        ...RingObj,
        quantity: RingObj.quantity - 1,
        price: RingObj.price - 100,
      });
    } else if (element == "Necklace" && NecklaceObj.quantity > 0) {
      setNecklaceObj({
        ...NecklaceObj,
        quantity: NecklaceObj.quantity - 1,
        price: NecklaceObj.price - 1000,
      });
    }
  }
  function remove(e) {
    let element = e.target.parentNode;
    let elementName = e.target.parentNode.children[1].children[0].innerText;
    console.log(elementName);
    if (elementName == "Bangle") {
      setBangleObj({
        ...BangleObj,
        quantity: 0,
        price: 0,
      });
    } else if (elementName == "Ring") {
      setRingObj({
        ...RingObj,
        quantity: 0,
        price: 0,
      });
    } else if (elementName == "Necklace") {
      setNecklaceObj({
        ...NecklaceObj,
        quantity: 0,
        price: 0,
      });
    }
  }
  function total() {
    let total = BangleObj.price + RingObj.price + NecklaceObj.price;
    // console.log(total);
    return total;
  }
  function render(OBJ) {
    return (
      <div className="item">
        <div>
          {OBJ.title == "Bangle" && (
            <img src={bangle} style={{ height: "67px", width: "100px" }} />
          )}
          {OBJ.title == "Ring" && (
            <img src={ring} style={{ height: "67px", width: "100px" }} />
          )}
          {OBJ.title == "Necklace" && (
            <img src={neck} style={{ height: "67px", width: "100px" }} />
          )}
        </div>
        <div>
          <h3>{OBJ.title}</h3>
        </div>
        <div>
          <h3>$ {OBJ.price}</h3>
        </div>
        <div>
          <h3>Quantity ({OBJ.quantity}) </h3>
        </div>
        <button className="btn" onClick={add}>
          +
        </button>
        <button className="btn" onClick={sub}>
          -
        </button>
        <button style={{ height: "50px" }} onClick={remove}>
          Remove Item
        </button>
      </div>
    );
  }
  return (
    <div>
      <div
        style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}
      >
        Cart is Empty
      </div>
      <div className="items-list">
        {BangleObj.quantity > 0 && render(BangleObj)}
        {RingObj.quantity > 0 && render(RingObj)}
        {NecklaceObj.quantity > 0 && render(NecklaceObj)}
      </div>
      <div>
        <h1>Total Cost: {total()}</h1>
      </div>
    </div>
  );
};

export default Cart;

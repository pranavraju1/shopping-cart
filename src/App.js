import React from "react";
import Items from "./components/Items";
import Cart from "./components/Cart";
import ContextProvider from "./components/context/ContextProvider";
import "./App.css"
const App = () => {
  return (
    <div>
      <ContextProvider>
        <Items />
        <Cart />
      </ContextProvider>
    </div>
  );
};

export default App;

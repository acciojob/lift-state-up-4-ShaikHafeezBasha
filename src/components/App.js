
import React, { useState } from "react";
import Child from "../components/Child"
import './../styles/App.css';

const App = () => {
  let [cartItems, setCartItems] = useState([])
  const [itemName, setItemName] = useState('')
  const [itemPrice, setItemPrice] = useState()


  const update = () => {
    setCartItems(cartItems => [...cartItems, {
      name: itemName,
      price: itemPrice
    }])
    setItemName('')
    setItemPrice('')
  }
  return (
    <div className="parent">
      <div>
        <h1>Parent Component</h1>
        <label for="itemName">Item Name</label>
        <input type="text" id="itemName" onChange={(e) => setItemName(e.target.value)} value={itemName} />
        <label for="itemPrice">Item Price</label>
        <input type="number" id="itemPrice" onChange={(e) => setItemPrice(parseInt(e.target.value))} value={itemPrice} />
        <button onClick={update}>Add Item</button>
      </div>
      <Child cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  )
}

export default App

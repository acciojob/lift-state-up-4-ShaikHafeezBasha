import React, { useState } from "react"

const Child = ({ cartItems, setCartItems }) => {
    const handleRemove = (index) => {
        const newItems = [...cartItems];
        newItems.splice(index, 1);
        setCartItems(newItems);
    };

    return (
        <div className="child">
            <h1>Child Component</h1>
            <ul>
                {cartItems.map((item, index) => (
                    <div>
                        <li key={index}>
                            {item.name}-${item.price}
                        </li>
                        <button onClick={handleRemove}>Remove</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}
export default Child;
import React, { useEffect, useState } from "react";
import "./Style/Cartpage.css";

const Cartpage = ({ cart, setcart, handlechange }) => {
  const [price, setprice] = useState(0);

  // remove item
  const Remove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setcart(arr);
  };
 

// total price
  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.amount * item.price, 0);
    setprice(total);
  }, [cart]); // 

  return (
    <article className="container">
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_image">
            <img src={item.img} alt={item.title} />
          </div>

          <div className="cart_desc">
            <p className="cart_title">{item.title}</p>

            <div className="btn_group">
              <button onClick={() => handlechange(item, 1)}>+</button>
              <span className="qty">{item.amount}</span>
              <button
                onClick={() => handlechange(item, -1)}
                disabled={item.amount === 0}
              >
                -
              </button>
            </div>

            <div className="price_remove">
              <span>₹ {item.price}</span>
              <button onClick={() => Remove(item.id)}>Remove</button>
            </div>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="totalprice">Total Price of Cart: ₹ {price}</div>
      )}
    </article>
  );
};

export default Cartpage;

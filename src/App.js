import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Main from "./Component/Main";
import Cartpage from "./Component/Cartpage";
import './App.css'

function App() {
  const [cart, setcart] = useState([]);
  const [warning, setwarning] = useState(false);
  const [show, setshow] = useState(true);

  const handleitem = (item) => {
    // console.log(item)
    let ispresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) ispresent = true;
    });
    if (ispresent) {
      setwarning(true);
      setTimeout(() => {
        setwarning(false);
      }, 2000);
      return;
    }
    setcart([...cart, item]);
  };
  const handlechange = (item, d) => {
    const updatedCart = cart.map((data) => {
      if (data.id === item.id) {
        const newAmount = data.amount + d;

        return {
          ...data,
          amount: newAmount < 1 ? 1 : newAmount, // ⭐ minimum 1
        };
      }
      return data;
    });

    setcart(updatedCart);
  };

  return (
    <div>
      <Navbar size={cart.length} setshow={setshow} />

      {warning && (
        <div className="warning-msg">
          Item is already added to cart
        </div>
      )}
      {show ? (
        <Main handleitem={handleitem} />
      ) : (
        <Cartpage cart={cart} setcart={setcart} handlechange={handlechange} />
      )}
    </div>
  );
}

export default App;

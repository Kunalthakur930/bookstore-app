import React from "react";
import "./Style/Navbar.css";

const Navbar = ({ size, setshow }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="shop-name" onClick={() => setshow(true)}>
          My Shopping
        </span>

        <div className="cart" onClick={() => setshow(false)}>
          <i className="fa fa-shopping-cart cart-icon"></i>
          <span className="cart-count">{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

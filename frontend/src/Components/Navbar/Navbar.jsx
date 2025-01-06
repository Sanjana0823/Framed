import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.jpg";
import user_icon from "../Assets/user_icon.png";
import cart_icon from "../Assets/cart_icon.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-menu">
        <li>Shop</li>
        <li>New Arrivals</li>
        <li>All products</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <div className="icons">
        <div className="nav-login-cart">
          <img className="cart-icon" src={cart_icon} alt="cart icon" />
        </div>
        <div className="nav-login-user">
          <img className="user-icon" src={user_icon} alt="user icon" />
        </div>
      </div>
    </div>
  );
};

import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo'/>
      </div>
      <ul className="nav-menu">
        <li>Shop</li>
        <li>New Arrivals</li>
        <li>All products</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        </div>
    </div>
  )
}

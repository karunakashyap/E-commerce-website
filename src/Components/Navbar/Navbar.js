import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart_icon.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt='logo-image'></img>
                    <h3>SHOPPER</h3>
                </div>
                <div className='navbar-menu'>
                    <ul>
                        <li>Shop</li>
                        <li>Mens</li>
                        <li>Womens</li>
                        <li>Kids</li>
                    </ul>
                </div>
                <div className="right-section">
                    <button className="login-btn">Login</button>
                    <img src={cart} alt="cart-icon" className="cart-icon" />
                </div>

            </div>
        </div>
    )
}

export default Navbar

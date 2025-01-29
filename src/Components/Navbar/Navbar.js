import React, { useContext, useRef } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {
    const [menu, setMenu] = useState('shop')
    const { getTotalCartItems } = useContext(ShopContext)
    const menuRef = useRef();

    const drop_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle("open");
    }
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt='logo-image'></img>
                    <h3>SHOPPER</h3>
                </div>
                <img className='nav-drop' onClick={drop_toggle} src={nav_dropdown} alt=''></img>
                <div className='navbar-menu' ref={menuRef}>
                    <ul>
                        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr></hr> : <></>}</li>
                        <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Mens</Link>{menu === "mens" ? <hr></hr> : <></>}</li>
                        <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Womens</Link>{menu === "womens" ? <hr></hr> : <></>}</li>
                        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr></hr> : <></>}</li>
                    </ul>
                </div>
                <div className="right-section">
                    <Link to='/login'><button className="login-btn">Login</button></Link>
                    <Link to='/cart'><img src={cart} alt="cart-icon" className="cart-icon" /></Link>
                    <div className="nav-count">{getTotalCartItems()}</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

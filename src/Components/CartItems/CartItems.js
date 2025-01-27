import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { allProduct, cartItems, removeFromCart,getTotalCartsAmount } = useContext(ShopContext);
  return (
    <div className="cart-items">
      <div className="main-format">
        <p>Products</p>
        <p>Title</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProduct.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart-items-formate main-format">
                <img src={e.image} alt="" className="product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className='carts-remove-icon'
                  src={remove_icon}
                  alt="Remove"
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-item-down">
        <div className="total-cart-items">
          <h1>Totals cart</h1>
          <div>
            <div className='total-items'>
              <p>Subtotal</p>
              <p>${getTotalCartsAmount()}</p>
            </div>
            <hr></hr>
            <div  className='total-items'>
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr></hr>
            <div  className='total-items'>
              <h3>Total</h3>
              <p>${getTotalCartsAmount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="promo-box">
            <input type='text' placeholder='promo code'></input>
            <button>Submit</button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default CartItems;

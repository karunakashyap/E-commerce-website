import React, { useContext } from 'react';
import './ProductDisplay.css';
import starIcon from '../Assets/star_icon.png';
import stardullIcon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext)
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-imagelist">
                    <img src={product.image} alt=''></img>
                    <img src={product.image} alt=''></img>
                    <img src={product.image} alt=''></img>
                    <img src={product.image} alt=''></img>
                </div>
                <div className="productdisplay-image">
                    <img className='main-img' src={product.image} alt=''></img>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="right-star">
                    <img src={starIcon} alt=''></img>
                    <img src={starIcon} alt=''></img>
                    <img src={starIcon} alt=''></img>
                    <img src={starIcon} alt=''></img>
                    <img src={stardullIcon} alt=''></img>
                    <p>(122)</p>
                </div>
                <div className="right-prices">
                    <div className="right-prices-old">
                        ${product.old_price}
                    </div>
                    <div className="right-prices-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="right-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Assumenda sunt doloribus animi itaque asperiores, cupiditate,
                    vero neque explicabo voluptatibus, a similique quisquam praesentium
                    ipsa facilis recusandae deleniti sed quae sequi.
                </div>
                <div className="right-size">
                    <h1>Select Size</h1>
                    <div className='right-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className='right-category'>Category :<span>Women , T-Shirt , Crop-Top</span></p>
                <p className='right-category'>Tags :<span>Modern , Latest</span></p>
            </div>
        </div>
    )
}

export default ProductDisplay

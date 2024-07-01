import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProductDisplay = ({ item }) => {
    const {name, id, price, seller, quantity, description, img} = item;
    const [prequantity, setQuantity] = useState(quantity)
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");
    const [coupon, setCoupon] = useState("");

    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    const handleDescrease = () => {
        if (prequantity > 1) {
            setQuantity(prequantity - 1);
        } 
    }

    const handleIncrease = () => {
        setQuantity(prequantity + 1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id: id,
            name: name,
            price: price,
            quantity: prequantity,
            color: color,
            img: img,
            coupon: coupon
        }
        // console.log(product);

        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingProductIndex = existingCart.findIndex((item) => item.id === id);


        if (existingProductIndex !== - 1) {
            existingCart[existingProductIndex].quantity += prequantity;
        } else {
            existingCart.push(product);
        }

        //update the local storage
        localStorage.setItem("cart", JSON.stringify(existingCart));

        setQuantity(1);
        setSize('Select Size');
        setColor("Select Color")
        setCoupon("")
    }


  return (
    <div>
        <div>
            <h4>{name}</h4>
            <h4>${price}</h4>
            <h6>{seller}</h6>
            <p>{description}</p>
        </div>
        <div className=''>
            <form onSubmit={handleSubmit}>
                {/* choosing the size  */}
                <div className='select-product size'>
                    <select value={size} onChange={handleSizeChange}>
                        <option>Select Size</option>
                        <option value="512GB">512GB</option>
                        <option value="256GB">256GB</option>
                        <option value="128GB">128GB</option>
                        <option value="64GB">64GB</option>
                    </select>
                    <i className='icofont-rounded-down'></i>
                </div>

                {/* choosing the color  */}
                <div className='select-product color'>
                    <select value={color} onChange={handleColorChange}>
                        <option>Select Color</option>
                        <option value="Gold">Gold</option>
                        <option value="Black">Black</option>
                        <option value="Blue">Blue</option>
                        <option value="Gray">Gray</option>
                    </select>
                    <i className='icofont-rounded-down'></i>
                </div>

                <div className='cart-plus-minus'>
                    <div className='dec qtybutton'  onClick={handleDescrease}>-</div>
                    <input className='cart-plus-minus-box' type='text' name='qtybutton' id='qtybutton' value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 12))}/>
                    <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                </div>

                <div  className='discount-code mb-2'>
                    <input type='text' placeholder='Enter Discount Code' onChange={(e) => setCoupon(e.target.value)} />
                </div>

                <button type='submit' className='lab-btn'>
                    <span>Add to cart</span>
                </button>

                <Link to='/cart-page' className='lab-btn bg-primary'>
                    <span>Place order</span>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default ProductDisplay

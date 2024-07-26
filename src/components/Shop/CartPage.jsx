import React, { useEffect, useState } from 'react'
import PageHeader from '../PageHeader/PageHeader';
import { Link } from 'react-router-dom';
import delImg from '../../assets/images/shop/del.png';
import './Cart.css';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        //we search from the local storage
        const stroredCartitem = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(stroredCartitem);

    }, [])

    // we calculate the totalPrice here 
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }

    // TO INCREASE THE QUA 
    const handleIncrease = (item) => {
        item.quantity += 1;
        setCartItems([...cartItems])

        //UPDATE THE LOCAL STORAGE
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    
    // to dec the cart qua 
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCartItems([...cartItems])


            localStorage.setItem('cart', JSON.stringify(cartItems))
        }
    }

    const handleDelete = (item) => {
        const updatedCart = cartItems.filter((cartItems) => cartItems.id !== item.id);

        // UPDATE THE NEW CART 
        setCartItems(updatedCart);

        updateLocalStorage(updatedCart)
    }

    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));

    }


    // the cart subtotal 
    const cartTotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0)

    const shippingFee = 50;

    const orderTotal = cartTotal + shippingFee;



  return (
    <div className='cart-page'>
      <PageHeader title={'Shop Cart'} curPage={'Cart Page'} />

      <div className='shop-cart padding-tb'>
        <div className='container'>
            <div className='section-wrapper'>
                {/* for the cart top  */}
                <div className='cart-top'>
                    <table>
                        <thead>
                            <tr>
                                <th className='cat-product'>Product</th>
                                <th className='cat-product'>Price</th>
                                <th className='cat-product'>Quantity</th>
                                <th className='cat-product'>Total</th>
                                <th className='cat-product'>edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map((item, i) => (
                                    <tr key={i}>
                                        <td className='product-item cat-product'>
                                            <div className='p-thumb'>
                                                <Link to='/shop'><img src={item.img} alt='the item' /></Link>
                                            </div>
                                            <div className='p-content'>
                                                <Link to='/shop'>{item.name}</Link>
                                            </div>
                                        </td>
                                        <td className='cat-price'>${item.price}</td>
                                        <td className='cat-quantity'>
                                            <div className='cart-plus-minus'>
                                                <div className='dec qtybutton' onClick={() => handleDecrease(item)}>-</div>
                                                <input type='text' className='cart-plus-minus-box' name='qtybutton' value={item.quantity} />
                                                <div className='inc qtybutton' onClick={() => handleIncrease(item)}>+</div>
                                            </div>
                                        </td>
                                        <td className='cat-toprice'>{calculateTotalPrice(item)}</td>
                                        <td className='cat-edit'>
                                            <a href='#' onClick={() => handleDelete(item)}>
                                                <img src={delImg} alt='del' />
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                {/* for the bottom of the cart  */}
                <div className='cart-bottom'>
                    {/* the checkout box  */}
                    <div className='cart-checkout-box'>
                        <form className='coupon'>
                            <input className='cart-page-input-text' type='text' name='coupon' placeholder='Coupon code...' />
                            <input type='submit' value={"Apply Coupon"} />
                        </form>

                        <form>
                            <input type='submit' value='Update Cart' />
                        </form>
                    </div>

                    {/* shipping box  */}
                    <div className='shiping-box'>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <div className='calculate-shiping'>
                                    <h3>Shipping Details</h3>
                                    <div className='outline-select'>
                                        <select>
                                            <option value='russia'>Russia</option>
                                            <option value='zambia'>Zambia</option>
                                            <option value='uk'>United Kingdom</option>
                                            <option value='zimbabwe'>Zimbabwe</option>
                                        </select>
                                        <span className='select-icon'><i className='icofont-rounded-down'></i></span>
                                    </div>

                                    <div className='outline-select shipping-select'>
                                        <select>
                                            <option value='lsk'>Lusaka</option>
                                            <option value='msk'>Moscow</option>
                                            <option value='spb'>Saint Petersburg</option>
                                        </select>
                                        <span className='select-icon'><i className='icofont-rounded-down'></i></span>
                                    </div>
                                    <input type='text' name='postalcode' id='postalcode' placeholder='Postalcode' className='cart-page-input-text' />
                                    <button type='submit'>Confirm Address</button>
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div className='cart-overview'>
                                    <h3>Cart Total</h3>
                                    <ul className='lab-ul'>
                                        <li>
                                            <span>Cart Total</span>
                                            <p className='pull-right'>${cartTotal.toFixed(2)}</p>
                                        </li>
                                        <li>
                                            <span>Shipping</span>
                                            <p className='pull-right'>{shippingFee.toFixed(2)}</p>
                                        </li>
                                        <li>
                                            <span>Order Total</span>
                                            <p className='pull-right'>${orderTotal.toFixed(2)}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage

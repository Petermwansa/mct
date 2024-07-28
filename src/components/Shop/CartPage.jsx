import React, { useEffect, useRef, useState } from 'react'
import PageHeader from '../PageHeader/PageHeader';
import { Link, useNavigate } from 'react-router-dom';
import delImg from '../../assets/images/shop/del.png';
import './Cart.css';
import emailjs from '@emailjs/browser';


const CartPage = () => {
    const form = useRef();
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);

    const [input, setInput] = useState({
        name: "",
        phone: "",
        address: ""
    })

    useEffect(() => {
        //we search from the local storage
        const stroredCartitem = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(stroredCartitem);

    }, [])

    // we calculate the totalPrice here 
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }

    // TO INCREASE THE QUANTITY 
    const handleIncrease = (item) => {
        item.quantity += 1;
        setCartItems([...cartItems])

        //UPDATE THE LOCAL STORAGE
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    
    // to dec the cart quantity
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



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jumtarb', 'template_8h4l20u', form.current, {
            publicKey: 'wsJLpkzBqdCpoWlny',
        })
        .then(
            () => {
                alert("Your order has been sent successfully! We will get back to you as soon as possible");
                navigate('/')
            },
            (error) => {
            console.log('Failed to send the message...', error.text);
            },
        );
    }










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
                                {/* <th className='cat-product'>Color</th>
                                <th className='cat-product'>Size</th> */}
                                {/* <th className='cat-product'>Price</th> */}
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
                                        {/* <td className='cat-price'>{item.color}</td>
                                        <td className='cat-price'>{item.size}</td> */}
                                        {/* <td className='cat-price'>${item.price}</td> */}
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
                        {/* <form className='coupon'>
                            <input className='cart-page-input-text' type='text' name='coupon' placeholder='Coupon code...' />
                            <input type='submit' value={"Apply Coupon"} />
                        </form> */}

                        <form>
                            <input type='submit' value='Update Cart' />
                        </form>
                    </div>

                    {/* shipping box  */}
                    <div className='shiping-box'>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                {/* <div className='calculate-shiping'>
                                    <h3>Order Details</h3>
                                    <form className='coupon'>
                                        <input className='cart-page-input-text' type='text' name='coupon' placeholder='Coupon code...' />
                                        <input type='submit' value={"Apply Coupon"} />
                                    </form>
                                    <div className='outline-select'>
                                        <select>
                                            <option value='russia'>Russia</option>
                                            <option value='zambia'>Zambia</option>
                                            <option value='uk'>United Kingdom</option>
                                            <option value='zimbabwe'>Zimbabwe</option>
                                        </select>
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
                                </div> */}
                            </div>

                            <form  ref={form} onSubmit={sendEmail} className='contact-form'>


                                <input className='cart-page-input-text' onChange={(e) => setInput({ ...input, name: e.target.value})} value={input.name} type='text' name='from_name' placeholder='Your Name' />
                                <input className='cart-page-input-text' onChange={(e) => setInput({ ...input, phone: e.target.value})} value={input.phone} type='number' name='from_phone' placeholder='Your Phone Number' />
                                <input className='cart-page-input-text' onChange={(e) => setInput({ ...input, address: e.target.value})} value={input.address} type='text' name='from_address' placeholder='Your Full Home Address' />

                                <div className='form-group form-input'>
                                    <input type='text' value={cartItems.map((item, i) => item.name)} name='from_products' id='name'  />
                                </div>
                                <div className='form-group form-input'>
                                    <input type='text' value={cartItems.map((item, i) => item.color)}  name='from_color' id='email' />
                                </div>
                                <div className='form-group form-input'>
                                    <input type='text' value={cartItems.map((item, i) => item.size)}  name='from_size' id='phone'  />
                                </div>
                                <div className='form-group form-input'>
                                    <input type='text' value={cartItems.map((item, i) => item.quantity)}  name='from_quantity' id='phone'  />
                                </div>
                                <div className='form-group form-input'>
                                    <input type='text' value={orderTotal} name='from_total' id='subject' />
                                </div>

                                <div className='cart-total col-md-5 col-12'>
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


                                    <div className='form-group w-100 text-center'>
                                        <button type='submit' value='Send' className='lab-btn bg-primary'>
                                            <span>Confirm Order</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
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

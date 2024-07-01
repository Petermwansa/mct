import React, { useEffect, useState } from 'react'
import PageHeader from '../PageHeader/PageHeader';
import { Link } from 'react-router-dom';
import delImg from '../../assets/images/shop/del.png';

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

    const orderTotal = cartTotal;



  return (
    <div>
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
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage

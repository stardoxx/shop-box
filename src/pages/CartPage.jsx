import React from 'react'
import CartPrices from '../components/cart/CartPrices';
import CartDisplay from '../components/cart/CartDisplay';
const CartPage = () => {
    return (
        <div className="cart-page">
            <CartPrices/>
            <CartDisplay/>
        </div>
    )
}

export default CartPage

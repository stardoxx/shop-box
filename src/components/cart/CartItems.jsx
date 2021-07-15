import React from 'react'
import {useSelector} from 'react-redux';

const CartItems = () => {
    
    const cart = useSelector((state) => state.cart);
    const count = cart.length;
    return (
        <div>
            Cart: {count}
        </div>
    )
}

export default CartItems

import React, { useEffect}from 'react'
import {useSelector} from 'react-redux'
const CartPrices = () => {
    
    const cartProducts = useSelector((state) => state.cart);
    const article = cartProducts.reduce((acc,initialState)=> acc+ initialState.quantity,0);
    const cost = cartProducts.reduce((acc,initialState)=> acc+ ((initialState.quantity)*(initialState.price)),0)
    return (
        <div className="checkout">
            <h3>You have {article} articles</h3>
            <h3>Subtotal: Rs {cost}</h3> 
        </div>
    )
}

export default CartPrices

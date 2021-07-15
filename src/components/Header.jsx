import React from 'react'
import CartItems from './cart/CartItems';
const Header = () => {
    return (
        <div className = 'ui fixed menu'>
            <div className="ui container center">
                <h2>Shop Box</h2>
            </div>
            <CartItems/>
        </div>
    )
}

export default Header

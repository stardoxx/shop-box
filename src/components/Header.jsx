import React from 'react'
import CartItems from './cart/CartItems';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className = 'ui fixed menu'>
            <div className="ui container center">
               <Link to={'/'}> <h2>Shop Box</h2></Link>
            </div>
            <Link to = {'/cart'} >{<CartItems/>}</Link>
        </div>
    )
}

export default Header

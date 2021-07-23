import React from 'react'
import CartItems from './cart/CartItems';
import { Link } from 'react-router-dom';
import SignInLink from './cart/SignInLink';

const Header = () => {
    return (
        <div className = 'ui fixed menu'>
            <div className="ui container center">
               <Link to={'/'}> <h2>Shop Box: just shop</h2></Link>
            </div>
            {/* <SignInLink/> */}
            <Link to = {'/cart'} >
            <div className="icon-div">
            <i className="shopping cart icon" id ='icon'></i>
            </div>
            </Link>
                {<CartItems/>}
        </div>
    )
}

export default Header

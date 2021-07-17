import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { removeFromCart, incQuantity, decQuantity} from '../../redux/actions/cartActions';
const CartDisplay = () => {
    
    const cartProducts = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const mapCart = cartProducts.map(product =>{
        const { id, title, image, price, quantity, description } = product;
        return(
            <div className="cart-item" key={id}>
                <img src= {image} alt= {image} className="cart-product-image" />
                <p className="cart-item-title">Product Name: {title}</p>
                <p className="cart-item-price">Price: Rs {Math.round(price)}</p>
                <p className="cart-item-description">Description: {description}</p>
                <div className="cart-buttons">
                    <div className="quantity">Quantity</div>
                <button className="inc-quantity"
                    onClick = {() => {dispatch(incQuantity(id))}}
                >+</button>
                <p className="item-quantity">{(quantity) ? quantity : dispatch(removeFromCart(id)) }</p>
                <button className="dec-quantity"
                    onClick = {() => {dispatch(decQuantity(id))}}
                >-</button>
                <button className="remove-cart"
                    onClick = {() => {
                      console.log(title);
                      dispatch(removeFromCart(id));
                    }}
                    >Remove From Cart</button>
                </div>
            </div>
        )
    })
    
    
    return (
        <div className = "cart-list">
            {cartProducts.length? <h4 id = "cart-display">cart display</h4>: ''}
            {mapCart}
        </div>
    )
}

export default CartDisplay

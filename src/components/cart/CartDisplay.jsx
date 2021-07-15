import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';
const CartDisplay = () => {
    
    const cartProducts = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const mapCart = cartProducts.map(product =>{
        const { id, title, image, price, category, description } = product;
        return(
            <div className="cart-item" key={id}>
                <img src= {image} alt= {image} className="cart-product-image" />
                <p className="cart-item-title">{title}</p>
                <p className="cart-item-price">{price}</p>
                <p className="cart-item-description">{description}</p>
                <button className="remove-cart"
                    onClick = {() => {
                      console.log(title);
                      dispatch(removeFromCart(id));
                    }}
                    >Remove From Cart</button>
            </div>
        )
    })
    
    
    return (
        <div className = "cart-list">
            <h4>cart display</h4>
            {mapCart}
        </div>
    )
}

export default CartDisplay

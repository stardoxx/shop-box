import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const ProductComponent = () => {
    
    const products = useSelector((state) => state.allProducts.products);
    //function for mapping products recieved.
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const productMap = products.map((product) =>{
        const { id, title, image, price, category } = product;
        return(
            
            
              
                <div className="product-card">
                  
                    <img className = "product-image" src={image} alt={title} />
                  
                  <div className="product-content">
                    <div className="header">{title}</div>
                    <div className="product-price">RS {price}</div>
                    <div className="product-category">Category: {category}</div>
                    
                </div>
                {cartItems.includes(product)? <p className="add-cart"
                    onClick = {() => {
                      console.log(title);
                      dispatch(removeFromCart(id));
                    }}
                    >Remove From Cart</p> :
                    <p className="add-cart"
                    onClick = {() => {
                      console.log(title);
                      dispatch(addToCart(product));
                    }}
                    >Add To Cart</p>
                    }
                </div>
              
            
        ) 
        
    })

    return (
        <div className="product-list">
            {productMap}
        </div>
    )
}

export default ProductComponent

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
            <div className="four wide column" key={id}>
            {/* <Link to={`/product/${id}`}> */}
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <img src={image} alt={title} />
                  </div>
                  <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">$ {price}</div>
                    <div className="meta">{category}</div>
                    {/* <button className="add-card"
                    onClick = {() => {
                      console.log(title);
                      dispatch(addToCart(product));
                    }}
                    >Add To Cart</button>
                    <button className="remove-cart"
                    onClick = {() => {
                      console.log(title);
                      dispatch(removeFromCart(id));
                    }}
                    >Remove From Cart</button>
                   */}
                  {cartItems.includes(product)? <button className="remove-cart"
                    onClick = {() => {
                      console.log(title);
                      dispatch(removeFromCart(id));
                    }}
                    >Remove From Cart</button> :
                    <button className="add-card"
                    onClick = {() => {
                      console.log(title);
                      dispatch(addToCart(product));
                    }}
                    >Add To Cart</button>
                    }
                </div>
                </div>
              </div>
            {/* </Link> */}
          </div>
        ) 
        
    })

    return (
        <div>
            {productMap}
        </div>
    )
}

export default ProductComponent

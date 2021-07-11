import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { useParams } from 'react-router';
import { selectedProducts } from '../redux/actions/productActions';
const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const {productId} = useParams();
    const dispatch = useDispatch();
   console.log(productId);

    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((error) => {
            console.log(error);
        });

        dispatch(selectedProducts(response.data));
    }

    useEffect(() => {
        if(productId && productId !== '') fetchProductDetails();
    },[productId]);

    return (
        <div>
             <h1>product dtails</h1>
        </div>
    )
}

export default ProductDetails

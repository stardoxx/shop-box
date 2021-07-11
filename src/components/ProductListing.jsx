import React, { useEffect}from 'react'
import {useSelector, useDispatch} from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {setProducts} from '../redux/actions/productActions'


const ProductListing = () => {

    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((error) => {
            console.error(error);
        });
        //console.log(response);
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="ui grid container">
            <h1>product listing</h1>
            <ProductComponent/>
        </div>
    )
}

export default ProductListing;

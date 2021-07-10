import React, { useEffect}from 'react'
import {useSelector} from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';

const ProductListing = () => {

    const products = useSelector((state) => state);

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((error) => {
            console.error(error);
        });
        console.log(response);
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

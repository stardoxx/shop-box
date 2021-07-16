import React, { useEffect}from 'react'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import { setProducts} from '../redux/actions/productActions'
import ProductComponent from './ProductComponent';
const DisplayCategoryComponent = () => {
    // const selected = 'jewelery';
    const checked = useSelector((state) => state.selectedCategory.selectedCategory);
    const selected = useSelector((state) => state.selectedCategory.category)
    const dispatch = useDispatch();
    const fetchCategory = async() => {
        if(selected !== 'All'){
            const response = await axios.get(`https://fakestoreapi.com/products/category/${selected}`)
        .catch((error) => {console.log(error)});
        console.log(response.data);
        dispatch(setProducts(response.data));
        }
        else{
            const response = await axios.get(`https://fakestoreapi.com/products`)
            .catch((error) => {console.log(error)});
            console.log(response.data);
            dispatch(setProducts(response.data));
        }
    }

    const fetchAll = async() =>{
        const response = await axios.get(`https://fakestoreapi.com/products`)
        .catch((error) => {console.log(error)});
        console.log(response.data);
        dispatch(setProducts(response.data));
    }
    
    useEffect(() => {
        if(checked !== false) {
            fetchCategory();
        }
        else{
            fetchAll();
        }
    },[selected])


    return (
        <div>
            <ProductComponent/>
        </div>
    )
}

export default DisplayCategoryComponent

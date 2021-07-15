import React, { useEffect}from 'react'
import './component.css';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {setCategories} from '../redux/actions/categoryActions';
import CategoryComponent from './CategoryComponent';
import DisplayCategoryComponent from './DisplayCategoryComponent';
import ProductComponent from './ProductComponent';

const CategoryListing = () => {
   
    const  categoryList = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchCategory = async () => {
        const response = await axios.get('https://fakestoreapi.com/products/categories').catch(err => console.log(err));
        console.log(response.data);
        dispatch(setCategories(response.data));
    }

    useEffect(() => {
        fetchCategory();
    },[]);

    
   
   
    return (
        <div className = 'category-listing'>
            category list 
            <CategoryComponent/>
            <DisplayCategoryComponent/>
            <ProductComponent/>
        </div>
    )
}

export default CategoryListing

import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { selectedCategory } from '../redux/actions/categoryActions';

const CategoryComponent = () => {

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.allCategory.categories);
    console.log(categories);
    const selected = useSelector((state) => state.selectedCategory.category);

    const categoryMap = categories.map((category,index) => {
        return(
            <div className={(selected !== category)? "category-component": "category-component-style"} key = {index}
             onClick={()=> {
                console.log(category); 
                dispatch(selectedCategory(category));}}
                >{category}</div>
        )
    })

    return (
        <div className = "category-component-array">
            {/* category components */}
            {categoryMap}
        </div>
    )
}

export default CategoryComponent

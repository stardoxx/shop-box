import React from 'react'
import {useSelector} from 'react-redux';


const CategoryComponent = () => {

    const categories = useSelector((state) => state.allCategory.categories);
    console.log(categories);
    const categoryMap = categories.map((category,index) => {
        return(
            <div className="category-component" key = {index}>{category}</div>
        )
    })

    return (
        <div className = "category-component-array">
            category components
            {categoryMap}
        </div>
    )
}

export default CategoryComponent

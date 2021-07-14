import React, { useEffect}from 'react'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'


const DisplayCategoryComponent = () => {
    // const selected = 'jewelery';
    const checked = useSelector((state) => state.selectedCategory.selectedCategory);
    const selected = useSelector((state) => state.selectedCategory.category)
    const dispatch = useDispatch();
    const fetchCategory = async() => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${selected}`)
        .catch((error) => {console.log(error)});
        console.log(response.data);

    }

    const fetchAll = async() =>{
        const response = await axios.get(`https://fakestoreapi.com/products`)
        .catch((error) => {console.log(error)});
        console.log(response.data);
    }
    
    useEffect(() => {
        if(checked !== false) {
            fetchCategory();
        }
        else{
            fetchAll();
        }
    },)


    return (
        <div>
            display category
        </div>
    )
}

export default DisplayCategoryComponent

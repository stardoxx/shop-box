import React from 'react'
import Header from '../components/Header';
// import ProductComponent from '../components/ProductComponent';
// import DisplayCategoryComponent from '../components/DisplayCategoryComponent';
import CategoryListing from '../components/CategoryListing';
const HomePage = () => {
    return (
        <div>
        <Header/>
        <CategoryListing/>
        {/* <DisplayCategoryComponent/> */}
        {/* <ProductComponent/> */}
        </div>
    )
}

export default HomePage

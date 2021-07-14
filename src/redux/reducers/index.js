import { combineReducers } from "redux";
import {productReducer, selectedProductsReducer} from './productReducer';
import { categoryReducer, selectedCategoryReducer } from './categoryReducer';

const reducer = combineReducers({
    allProducts: productReducer,
    product: selectedProductsReducer,
    allCategory: categoryReducer,
    selectedCategory: selectedCategoryReducer
});

export default reducer;
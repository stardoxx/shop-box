import { combineReducers } from "redux";
import {productReducer, selectedProductsReducer} from './productReducer';
import { categoryReducer, selectedCategoryReducer } from './categoryReducer';
import { cartReducer } from "./cartReducer";
const reducer = combineReducers({
    allProducts: productReducer,
    product: selectedProductsReducer,
    allCategory: categoryReducer,
    selectedCategory: selectedCategoryReducer,
    cart: cartReducer
});

export default reducer;
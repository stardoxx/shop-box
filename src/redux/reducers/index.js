import { combineReducers } from "redux";
import {productReducer, selectedProductsReducer} from './productReducer';
import { categoryReducer } from "./categoryReducer";

const reducer = combineReducers({
    allProducts: productReducer,
    product: selectedProductsReducer,
    allCategory: categoryReducer
});

export default reducer;
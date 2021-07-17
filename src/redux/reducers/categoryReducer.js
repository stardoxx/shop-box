import { ActionTypes } from "../contants/action-types";

const initialState = {
    categories: [],
}

const selectedCategoryState = {
    selectedCategory:false,
    category: 'All',
}

export const selectedCategoryReducer = (state = selectedCategoryState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_CATEGORY:
            return{
                ...state,
                selectedCategory:true,
                category: payload
            }
            
    
        default:
            return state;
    }
}




export const categoryReducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_CATEGORY:
            return {
                ...state,
                categories: ['All', ...payload]
            }
    
        default:
            return state;
    }
}
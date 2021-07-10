import { ActionTypes } from "../contants/action-types"; 

const initialState = {
    products : []

}


export const productReducer = (state = initialState,{type, payload}) => {
    switch(type){
        case ActionTypes.setProducts: 
        return {...state,
            products: payload
        }
    default: 
        return state;
    }
}
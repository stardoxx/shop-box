import { ActionTypes } from "../contants/action-types";

const initialState = [];
// const quantity =1;

export const cartReducer = (state =initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            payload['quantity'] = 1;
            return [...state, payload];
        // eslint-disable-next-line no-fallthrough
        case ActionTypes.REMOVE_FROM_CART:
            return state.filter(item => item.id !== payload);

        case ActionTypes.INC_QUANTITY:
            return state.filter(item => {
                if(item.id === payload){
                    return item['quantity']++ ;
                }
                return item['quantity']
            })
        case ActionTypes.DEC_QUANTITY:
            return state.filter(item => {
                if(item.id === payload){
                   return item['quantity']-- ;
                    }
                 return item['quantity']
                }) 

    
        
            
    
        default:
            return state;
    }
}
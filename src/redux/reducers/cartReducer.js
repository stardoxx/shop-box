import { ActionTypes } from "../contants/action-types";

const initialState = [];

export const cartReducer = (state =initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            // payload['quantity'] = 1;
            return [...state, payload];
        // eslint-disable-next-line no-fallthrough
        case ActionTypes.REMOVE_FROM_CART:
            return state.filter(item => item.id !== payload);
    
        default:
            return state;
    }
}
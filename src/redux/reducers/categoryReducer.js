import { ActionTypes } from "../contants/action-types";

const initialState = {
    categories: [],
}


export const categoryReducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_CATEGORY:
            return {
                ...state,
                categories: payload
            }
    
        default:
            return state;
    }
}
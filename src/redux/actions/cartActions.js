import { ActionTypes } from "../contants/action-types";

export const addToCart = (product) => {
    return{
        type: ActionTypes.ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (productId) => {
    return{
        type: ActionTypes.REMOVE_FROM_CART,
        payload: productId
    }
}

export const incQuantity = (productId) => {
    return{
        type: ActionTypes.INC_QUANTITY,
        payload: productId
    }
}

export const decQuantity = (productId) => {
    return{
        type: ActionTypes.DEC_QUANTITY,
        payload: productId
    }
}



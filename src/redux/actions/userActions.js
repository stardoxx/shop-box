import { ActionTypes } from "../contants/action-types";

export const addUser = (user) => {
    return{
        type: ActionTypes.ADD_USER,
        payload: user
        
    }
}

export const removeUser = () => {
    return {
        type: ActionTypes.REMOVE_USER,

    }
}
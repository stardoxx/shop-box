import { ActionTypes } from "../contants/action-types";

const initialState = {
    signedIn: false,
    name: '',
    email: '',
    password:''
}

export const userReducer = (state =initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.ADD_USER:
            return {
                signedIn: true,
                name: payload.name,
                email: payload.email,
                password: payload.password,
            }
        
        case ActionTypes.REMOVE_USER:
            return {
                signedIn: false,
                name: '',
                email: '',
                password: ''
            }
        
    
        default:
            return state;
    }
}
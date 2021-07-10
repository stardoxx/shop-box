import { ActionTypes } from "../contants/action-types"; 

const initialState = {
    products : [
        {
            id: 1,
            name: 'Ashutosh',
            category: 'awesome'
        }
    ]

}


export const productReducer = (state = initialState,{type, payload}) => {
    switch(type){
        case ActionTypes.setProducts: 
        return state;
    default: 
        return state;
    }
}
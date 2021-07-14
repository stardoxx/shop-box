import { ActionTypes } from "../contants/action-types";

export const setCategories = (categories) => {
    return {
        type: ActionTypes.SET_CATEGORY,
        payload: categories
    };
};
import { ActionTypes } from "../contants/action-types";

export const setCategories = (categories) => {
    return {
        type: ActionTypes.SET_CATEGORY,
        payload: categories
    };
};

export const selectedCategory = (category) => {
    return {
        type: ActionTypes.SELECTED_CATEGORY,
        payload: category
    }
}
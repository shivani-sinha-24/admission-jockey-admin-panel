import { CATEGORY_ADD_SUCCESS, CATEGORY_GET_SUCCESS } from '../Constants/Constants';

let initState = {
    category: [],
}

const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case CATEGORY_ADD_SUCCESS:
            return ({
                ...state,
                category: [...state.category, action.payload]
            });
        case CATEGORY_GET_SUCCESS:
            return ({
                ...state,
                category: [...state.category, ...action.payload]
            });
        default:
            return state;
    }
};
export default categoryReducer;

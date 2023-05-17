import { CATEGORY_ADD_SUCCESS, CATEGORY_GET_SUCCESS,CATEGORY_DELETE_SUCCESS,CATEGORY_UPDATE_SUCCESS } from '../Constants/Constants';

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
                category: action.payload
            });
        case CATEGORY_DELETE_SUCCESS:
            return ({
                ...state,
                category: state?.category.filter(category => category?._id !== action.payload)
            });
            case CATEGORY_UPDATE_SUCCESS:
                return ({
                    ...state,
                    category: state.category.map((item) =>
                        item?._id == action.payload?._id ? { ...action.payload } : item
                    )
                });
        default:
            return state;
    }
};
export default categoryReducer;

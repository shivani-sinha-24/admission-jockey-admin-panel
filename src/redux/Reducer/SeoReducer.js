import { SEO_ADD_SUCCESS, SEO_UPDATE_SUCCESS,SEO_GET_SUCCESS, SEO_DELETE_SUCCESS, CATEGORY_GET_SUCCESS, CATEGORY_DELETE_SUCCESS, CATEGORY_UPDATE_SUCCESS } from '../Constants/Constants';

let initState = {
    seo: [],
}

const examReducer = (state = initState, action) => {
    switch (action.type) {
        case SEO_ADD_SUCCESS:
            return ({
                ...state,
                seo: [...state.seo, action.payload]
            });
        case SEO_GET_SUCCESS:
            return ({
                ...state,
                seo: action.payload
            });
        case SEO_DELETE_SUCCESS:
            return ({
                ...state,
                seo: state?.seo.filter(item => item?._id !== action.payload.id)
            });
        case SEO_UPDATE_SUCCESS:
            return ({
                ...state,
                seo: state.seo.map((item) =>
                    item?._id == action.payload?._id ? { ...action.payload } : item
                )
            });
        default:
            return state;
    }
};
export default examReducer;

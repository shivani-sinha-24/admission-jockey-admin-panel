import { UNIVERSITY_COURSE_ADD_REQUEST, CATEGORY_GET_SUCCESS,CATEGORY_DELETE_SUCCESS,CATEGORY_UPDATE_SUCCESS } from '../Constants/Constants';

let initState = {
    universityCourse: [],
}

const universitycourseReducer = (state = initState, action) => {
    switch (action.type) {
        case UNIVERSITY_COURSE_ADD_REQUEST:
            return ({
                ...state,
                universityCourse: [...state.universityCourse, action.payload]
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
export default universitycourseReducer;

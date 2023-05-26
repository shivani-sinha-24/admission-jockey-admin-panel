import { UNIVERSITY_COURSE_UPDATE_SUCCESS,COLLEGE_COURSE_ADD_SUCCESS, SUCCESS_COLLEGE_COURSE_LIST, CATEGORY_DELETE_SUCCESS, CATEGORY_UPDATE_SUCCESS, UNIVERSITY_COURSE_DELETE_SUCCESS } from '../Constants/Constants';

let initState = {
    collegeCourse: [],
}

const collegecourseReducer = (state = initState, action) => {
    switch (action.type) {
        case COLLEGE_COURSE_ADD_SUCCESS:
            return ({
                ...state,
                collegeCourse: [...state.collegeCourse, action.payload]
            });
        case SUCCESS_COLLEGE_COURSE_LIST:
            return ({
                ...state,
                collegeCourse: action.payload
            });
        // case UNIVERSITY_COURSE_DELETE_SUCCESS:
        //     return ({
        //         ...state,
        //         universityCourse: state?.universityCourse.filter(universityCourse => universityCourse?._id !== action.payload)
        //     });
        // case UNIVERSITY_COURSE_UPDATE_SUCCESS:
        //     return ({
        //         ...state,
        //         universityCourse: state.universityCourse.map((item) =>
        //             item?._id == action.payload?._id ? { ...action.payload } : item
        //         )
        //     });
        default:
            return state;
    }
};
export default collegecourseReducer;

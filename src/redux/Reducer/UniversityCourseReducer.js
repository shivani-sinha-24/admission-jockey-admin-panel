import { SUCCESS_UNIVERSITY_COURSE_FOR_COLLEGE_LIST,UNIVERSITY_COURSE_UPDATE_SUCCESS, UNIVERSITY_COURSE_ADD_SUCCESS, SUCCESS_UNIVERSITY_COURSE_LIST, CATEGORY_DELETE_SUCCESS, CATEGORY_UPDATE_SUCCESS, UNIVERSITY_COURSE_DELETE_SUCCESS } from '../Constants/Constants';

let initState = {
    universityCourse: [],
    universityCoursesForCollege: []
}

const universitycourseReducer = (state = initState, action) => {
    switch (action.type) {
        case UNIVERSITY_COURSE_ADD_SUCCESS:
            return ({
                ...state,
                universityCourse: [...state.universityCourse, action.payload]
            });
        case SUCCESS_UNIVERSITY_COURSE_FOR_COLLEGE_LIST:
            return ({
                ...state,
                // universityCoursesForCollege: action.payload,
                universityCoursesForCollege: action.payload.data,
            });
        case SUCCESS_UNIVERSITY_COURSE_LIST:
            return ({
                ...state,
                universityCourse: action.payload
            });
        case UNIVERSITY_COURSE_DELETE_SUCCESS:
            return ({
                ...state,
                universityCourse: state?.universityCourse.filter(universityCourse => universityCourse?._id !== action.payload)
            });
        case UNIVERSITY_COURSE_UPDATE_SUCCESS:
            return ({
                ...state,
                universityCourse: state.universityCourse.map((item) =>
                    item?._id == action.payload?._id ? { ...action.payload } : item
                )
            });
        default:
            return state;
    }
};
export default universitycourseReducer;

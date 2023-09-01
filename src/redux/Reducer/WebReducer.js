import { WEB_COLLEGES_ADD_SUCCESS,MY_TEAM_GET_SUCCESS, SEO_UPDATE_SUCCESS, WEB_UNIVERSITY_ADD_SUCCESS, UNIVERSITY_LOGO_WEBLIST_GET_SUCCESS, UNIVERSITY_WEBLIST_GET_SUCCESS, SEO_GET_SUCCESS, SEO_DELETE_SUCCESS, COLLEGE_WEBLIST_GET_SUCCESS, CATEGORY_GET_SUCCESS, CATEGORY_DELETE_SUCCESS, CATEGORY_UPDATE_SUCCESS } from '../Constants/Constants';

let initState = {
    colleges: [],
    universities: [],
    collegeLogos: [],
    universityLogos: [],
    myTeam: []
}

const examReducer = (state = initState, action) => {
    switch (action.type) {
        case WEB_COLLEGES_ADD_SUCCESS:
            return ({
                ...state,
                colleges: [...state.colleges, action.payload]
            });
        case MY_TEAM_GET_SUCCESS:
            return ({
                ...state,
                myTeam: action.payload
            });
        case WEB_UNIVERSITY_ADD_SUCCESS:
            return ({
                ...state,
                universities: [...state.universities, action.payload]
            });
        case COLLEGE_WEBLIST_GET_SUCCESS:
            return ({
                ...state,
                colleges: action.payload
            });
        case UNIVERSITY_WEBLIST_GET_SUCCESS:
            return ({
                ...state,
                universities: action.payload
            });
        case UNIVERSITY_LOGO_WEBLIST_GET_SUCCESS:
            return ({
                ...state,
                universityLogos: action.payload
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

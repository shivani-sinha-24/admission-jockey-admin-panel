import API from "../../service/API";
import { WEB_COLLEGES_ADD_FAILURE,WEB_UNIVERSITY_ADD_REQUEST,WEB_UNIVERSITY_ADD_FAILURE,WEB_UNIVERSITY_ADD_SUCCESS, WEB_COLLEGES_ADD_SUCCESS,UNIVERSITY_WEBLIST_GET_REQUEST,UNIVERSITY_WEBLIST_GET_FAILURE,UNIVERSITY_WEBLIST_GET_SUCCESS, WEB_COLLEGES_ADD_REQUEST,COLLEGE_WEBLIST_GET_FAILURE,COLLEGE_WEBLIST_GET_SUCCESS,COLLEGE_WEBLIST_GET_REQUEST } from "../Constants/Constants";
import { ToastContainer, toast } from 'react-toastify';

//Add Status action
export const addWebCollegeList = (status) => async (dispatch) => {
    try {
        dispatch({ type: WEB_COLLEGES_ADD_REQUEST });
        const { data } = await API.post(`/createWebCollegeList`, status);
        dispatch({ type: WEB_COLLEGES_ADD_SUCCESS, payload: data?.WebListResult[0]?.collegeList});
    } catch (error) {
        dispatch({
            type: WEB_COLLEGES_ADD_FAILURE,
            // payload: error.message && error.message ? error.message : '',
        });
    }
};

//Add Status action
export const addWebUniversityList = (status) => async (dispatch) => {
    try {
        dispatch({ type: WEB_UNIVERSITY_ADD_REQUEST });
        const { data } = await API.post(`/createWebUniversityList`, status);
        dispatch({ type: WEB_UNIVERSITY_ADD_SUCCESS, payload: data?.WebListResult});
    } catch (error) {
        dispatch({
            type: WEB_UNIVERSITY_ADD_FAILURE,
        });
    }
};

export const fetchCollegeWebList = () => async (dispatch) => {
    try {
        dispatch({ type: COLLEGE_WEBLIST_GET_REQUEST });
        const { data } = await API.get(`/getCollegeWebList`);  
        dispatch({ type: COLLEGE_WEBLIST_GET_SUCCESS, payload: data?.WebListResult[0]?.collegeList });
    } catch (error) {
        dispatch({
            type: COLLEGE_WEBLIST_GET_FAILURE,
        });
    }
};

export const fetchUniversityWebList = () => async (dispatch) => {
    try {
        dispatch({ type: UNIVERSITY_WEBLIST_GET_REQUEST });
        const { data } = await API.get(`/getCollegeWebList`);
        dispatch({ type: UNIVERSITY_WEBLIST_GET_SUCCESS, payload: data?.WebListResult[0]?.universityList });
    } catch (error) {
        dispatch({
            type: UNIVERSITY_WEBLIST_GET_FAILURE,
        });
    }
};

export const fetchUniversityLogoWebList = () => async (dispatch) => {
    try {
        dispatch({ type: COLLEGE_WEBLIST_GET_REQUEST });
        const { data } = await API.get(`/getCollegeWebList`);
        console.log(data);
        dispatch({ type: COLLEGE_WEBLIST_GET_SUCCESS, payload: data?.WebListResult[0]?.collegeList });
    } catch (error) {
        dispatch({
            type: COLLEGE_WEBLIST_GET_FAILURE,
        });
    }
};



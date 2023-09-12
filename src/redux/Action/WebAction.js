import API from "../../service/API";
import { QUERIES_SET_FAILURE, QUERIES_SET_SUCCESS, QUERIES_SET_REQUEST, QUERIES_GET_REQUEST, QUERIES_GET_SUCCESS, QUERIES_GET_FAILURE, WEB_COLLEGES_ADD_FAILURE, MY_TEAM_GET_REQUEST, MY_TEAM_GET_FAILURE, MY_TEAM_GET_SUCCESS, WEB_UNIVERSITY_ADD_REQUEST, WEB_UNIVERSITY_ADD_FAILURE, WEB_UNIVERSITY_ADD_SUCCESS, WEB_COLLEGES_ADD_SUCCESS, UNIVERSITY_WEBLIST_GET_REQUEST, UNIVERSITY_WEBLIST_GET_FAILURE, UNIVERSITY_WEBLIST_GET_SUCCESS, WEB_COLLEGES_ADD_REQUEST, COLLEGE_WEBLIST_GET_FAILURE, COLLEGE_WEBLIST_GET_SUCCESS, COLLEGE_WEBLIST_GET_REQUEST, TEAM_GET_REQUEST, TEAM_GET_SUCCESS, TEAM_GET_FAILURE, QUERY_UPDATE_REQUEST, QUERY_UPDATE_SUCCESS, QUERY_UPDATE_FAILURE, QUERY_DELETE_REQUEST, QUERY_DELETE_SUCCESS, QUERY_DELETE_FAILURE } from "../Constants/Constants";
import { ToastContainer, toast } from 'react-toastify';

//Add Status action
export const addWebCollegeList = (status) => async (dispatch) => {
    try {
        dispatch({ type: WEB_COLLEGES_ADD_REQUEST });
        const { data } = await API.post(`/createWebCollegeList`, status);
        dispatch({ type: WEB_COLLEGES_ADD_SUCCESS, payload: data?.WebListResult[0]?.collegeList });
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
        dispatch({ type: WEB_UNIVERSITY_ADD_SUCCESS, payload: data?.WebListResult });
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

export const fetchMyTeam = (teamLeader) => async (dispatch) => {
    try {
        dispatch({ type: MY_TEAM_GET_REQUEST });
        const { data } = await API.get(`/getMyTeamList/${teamLeader}`);
        dispatch({ type: MY_TEAM_GET_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: MY_TEAM_GET_FAILURE,
        });
    }
}



export const fetchTeam = (name) => async (dispatch) => {
    try {
        dispatch({ type: TEAM_GET_REQUEST });
        const { data } = await API.get(`/getTeamList/${name}`);
        dispatch({ type: TEAM_GET_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: TEAM_GET_FAILURE,
        });
    }
}


export const fetchQuires = () => async (dispatch) => {
    try {
        dispatch({ type: QUERIES_GET_REQUEST });
        const { data } = await API.get(`/getQueryList`);
        dispatch({ type: QUERIES_GET_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: QUERIES_GET_FAILURE,
        });
    }
}

export const queryDelete = (id) => async (dispatch) => {
    try {
        dispatch({ type: QUERY_DELETE_REQUEST });
        const { data } = await API.delete(`/deleteQuery/${id}`);
        dispatch({ type: QUERY_DELETE_SUCCESS, payload: data });
        toast.success("QUERY deleted successfully.")
    } catch (error) {
        dispatch({
            type: QUERY_DELETE_FAILURE,
            // payload: error.message && error.message ? error.message : '',
        });
    }
};

export const setQuires = (values) => async (dispatch) => {
    try {
        dispatch({ type: QUERIES_SET_REQUEST });
        const { data } = await API.post(`/setQuery`, values);
        dispatch({ type: QUERIES_SET_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: QUERIES_SET_FAILURE,
        });
    }
}

export const updateQuery = (values) => async (dispatch) => {
    try {
        dispatch({ type: QUERY_UPDATE_REQUEST });
        const { data } = await API.put(`/updateQuery`, values);
        dispatch({ type: QUERY_UPDATE_SUCCESS, payload: data });
        toast.success()
    } catch (error) {
        dispatch({
            type: QUERY_UPDATE_FAILURE,
        });
    }
}


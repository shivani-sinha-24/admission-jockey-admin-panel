import API from "../../service/API";
import {
    PROPERTY_CREATE_REQUEST, PROPERTY_UPDATE_REQUEST, PROPERTY_UPDATE_SUCCESS, PROPERTY_UPDATE_FAILURE, PROPERTY_CREATE_SUCCESS, PROPERTY_CREATE_FAILURE, PROPERTY_DELETE_FAILURE, PROPERTY_DELETE_SUCCESS, PROPERTY_DELETE_REQUEST
} from "../Constants/Constants";
import { ToastContainer, toast } from 'react-toastify';

//Add Status action
export const createProperty = (status) => async (dispatch) => {
    try {
        dispatch({ type: PROPERTY_CREATE_REQUEST });
        const { data } = await API.post(`/collegeCreate`, status);
        dispatch({ type: PROPERTY_CREATE_SUCCESS, payload: data?.college });
        if (data.status_code == 200) {

            toast.success(data?.message)
            // if(data.college.edu_type=='University'){
            //     window.location.href = '/university-property-list'

            // }else{
            //     window.location.href = '/property-list'

            // }
        } else {
            toast.error(data?.message)
        }
        return;
    } catch (error) {
        dispatch({
            type: PROPERTY_CREATE_FAILURE,
            // payload: error.message && error.message ? error.message : '',
        });
    }
};

// export const statusCreate = (status) => async (dispatch) => {
//     try {
//         dispatch({ type: USER_STATUS_CREATE_REQUEST });
//         const { data } = await API.post(`/statusCreate`, status);
//         console.log(data, "llllllooooo")
//         dispatch({ type: USER_STATUS_CREATE_SUCCESS, payload: data });

//         toast.success("Status created successfully.")

//     } catch (error) {
//         dispatch({
//             type: USER_STATUS_CREATE_FAILURE,
//             // payload: error.message && error.message ? error.message : '',
//         });
//     }
// };

// export const statusFetch = () => async (dispatch) => {
//     try {
//         dispatch({ type: USER_STATUS_REQUEST });
//         const { data } = await API.get(`/statusGet`);

//         dispatch({ type: USER_STATUS_SUCCESS, payload: data });

//     } catch (error) {
//         dispatch({
//             type: USER_STATUS_FAILURE,
//             // payload: error.message && error.message ? error.message : '',
//         });
//     }
// };

export const collegeUpdate = (status) => async (dispatch) => {
    try {
        dispatch({ type: PROPERTY_UPDATE_REQUEST });
        const { data } = await API.put(`/updateCollege`, status);
        dispatch({ type: PROPERTY_UPDATE_SUCCESS, payload: data });
        toast.success("college updated successfully.")
        // if(data.college.edu_type=='University'){
        //     window.location.href = '/university-property-list'
        // }else{
        //     window.location.href = '/property-list'
        // }
    } catch (error) {
        dispatch({
            PROPERTY_UPDATE_FAILURE,
            // payload: error.message && error.message ? error.message : '',
        });
    }
};

export const propertyDelete = (id) => async (dispatch) => {
    try {
        dispatch({ type: PROPERTY_DELETE_REQUEST });
        const { data } = await API.delete(`/deleteCollege?id=${id}`);
        dispatch({ type: PROPERTY_DELETE_SUCCESS, payload: data });
        toast.success("Property deleted successfully.")
    } catch (error) {
        dispatch({
            type: PROPERTY_DELETE_FAILURE,
            // payload: error.message && error.message ? error.message : '',
        });
    }
};




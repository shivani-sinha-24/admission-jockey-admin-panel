import API from "../../service/API";
import { WEB_COLLEGES_ADD_FAILURE, WEB_COLLEGES_ADD_SUCCESS, WEB_COLLEGES_ADD_REQUEST } from "../Constants/Constants";
import { ToastContainer, toast } from 'react-toastify';

//Add Status action
export const addWebCollegeList = (status) => async (dispatch) => {
    try {
        dispatch({ type: WEB_COLLEGES_ADD_REQUEST });
        const { data } = await API.post(`/createWebCollegeList`, status);
        dispatch({ type: WEB_COLLEGES_ADD_SUCCESS });
        if (data.status_code == 200) {
            toast.success(data?.message)
        } else {
            toast.error(data?.message)
        }
    } catch (error) {
        dispatch({
            type: WEB_COLLEGES_ADD_FAILURE,
            // payload: error.message && error.message ? error.message : '',
        });
    }
};



import API from "../../service/API";
import { CATEGORY_ADD_REQUEST, CATEGORY_ADD_FAILURE, CATEGORY_ADD_SUCCESS,CATEGORY_GET_REQUEST,CATEGORY_GET_SUCCESS,CATEGORY_GET_FAILURE } from "../Constants/Constants";
import { ToastContainer, toast } from 'react-toastify';

//Add Status action
export const createCategory = (property) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_ADD_REQUEST });
    const { data } = await API.post(`/createCategory`, property);
    if (data.status_code == 200) {
      dispatch({ type: CATEGORY_ADD_SUCCESS, payload: data?.category });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    dispatch({
      type: CATEGORY_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};
export const getCategory = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_GET_REQUEST });
    const { data } = await API.get(`/getCategory`);
    dispatch({ type: CATEGORY_GET_SUCCESS, payload: data?.categories });

  } catch (error) {
    dispatch({
      type: CATEGORY_GET_FAILURE,
      // payload: error.message && error.message ? error.message : '',
    });
  }
};
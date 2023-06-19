import API from "../../service/API";
import {
  PROPERTY_OTHERS_ADD_SUCCESS, PROPERTY_OTHERS_ADD_REQUEST, GET_UNIVERSITY_COURSE_LIST, SUCCESS_UNIVERSITY_COURSE_LIST, FAILURE_UNIVERSITY_COURSE_LIST, UNIVERSITY_COURSE_ADD_FAILURE, UNIVERSITY_COURSE_ADD_SUCCESS, UNIVERSITY_COURSE_ADD_REQUEST, GET_QAS_LIST, SUCCESS_QAS_LIST, FAILURE_QAS_LIST, FAILURE_ADMISSION_PROCESS_LIST, FAILURE_AFFILIATE_APPROVE, FAILURE_ANNOUNCEMENT_LIST, FAILURE_COLLEGE_LIST, FAILURE_FAQS_LIST, FAILURE_GALLERY_LIST, FAILURE_LOAN_LIST, FAILURE_PLACEMENT_LIST, FAILURE_SCHOLARSHIP_LIST, FAILURE_TEAM_LIST, GET_ADMISSION_PROCESS_LIST, GET_AFFILIATE_APPROVE, GET_ANNOUNCEMENT_LIST, GET_COLLEGE_LIST, GET_FAQS_LIST, GET_GALLERY_LIST, GET_LOAN_LIST, GET_PLACEMENT_LIST, GET_SCHOLARSHIP_LIST, GET_TEAM_LIST, PROPERTY_ADMISSION_PROCESS_ADD_FAILURE, PROPERTY_ADMISSION_PROCESS_ADD_REQUEST, PROPERTY_ADMISSION_PROCESS_ADD_SUCCESS, PROPERTY_ADMISSION_PROCESS_UPDATE_FAILURE, PROPERTY_ADMISSION_PROCESS_UPDATE_REQUEST, PROPERTY_ADMISSION_PROCESS_UPDATE_SUCCESS, PROPERTY_ANNOUNCEMENT_ADD_FAILURE, PROPERTY_ANNOUNCEMENT_ADD_REQUEST, PROPERTY_ANNOUNCEMENT_ADD_SUCCESS, PROPERTY_ANNOUNCEMENT_UPDATE_FAILURE, PROPERTY_ANNOUNCEMENT_UPDATE_REQUEST, PROPERTY_ANNOUNCEMENT_UPDATE_SUCCESS, PROPERTY_FAQS_ADD_FAILURE, PROPERTY_FAQS_ADD_REQUEST, PROPERTY_FAQS_ADD_SUCCESS, PROPERTY_FAQS_UPDATE_FAILURE, PROPERTY_FAQS_UPDATE_REQUEST, PROPERTY_FAQS_UPDATE_SUCCESS, PROPERTY_FORM_FAILURE, PROPERTY_FORM_REQUEST, PROPERTY_FORM_SUCCESS, PROPERTY_GALLERY_ADD_FAILURE, PROPERTY_GALLERY_ADD_REQUEST, PROPERTY_GALLERY_ADD_SUCCESS, PROPERTY_LOAN_ADD_FAILURE, PROPERTY_LOAN_ADD_REQUEST, PROPERTY_LOAN_ADD_SUCCESS, PROPERTY_LOAN_UPDATE_FAILURE, PROPERTY_LOAN_UPDATE_REQUEST, PROPERTY_LOAN_UPDATE_SUCCESS, PROPERTY_PLACEMENT_ADD_FAILURE, PROPERTY_PLACEMENT_ADD_REQUEST, PROPERTY_PLACEMENT_ADD_SUCCESS, PROPERTY_PLACEMENT_UPDATE_FAILURE, PROPERTY_PLACEMENT_UPDATE_REQUEST, PROPERTY_PLACEMENT_UPDATE_SUCCESS, PROPERTY_SCHOLARSHIP_ADD_FAILURE, PROPERTY_SCHOLARSHIP_ADD_REQUEST, PROPERTY_SCHOLARSHIP_ADD_SUCCESS, PROPERTY_SCHOLARSHIP_UPDATE_FAILURE, PROPERTY_SCHOLARSHIP_UPDATE_REQUEST, PROPERTY_SCHOLARSHIP_UPDATE_SUCCESS, PROPERTY_TEAM_ADD_FAILURE, PROPERTY_TEAM_ADD_REQUEST, PROPERTY_TEAM_ADD_SUCCESS, PROPERTY_TEAM_UPDATE_FAILURE, PROPERTY_TEAM_UPDATE_REQUEST, PROPERTY_TEAM_UPDATE_SUCCESS, PROPERTY_TYPE_ADD_FAILURE, PROPERTY_TYPE_ADD_REQUEST, PROPERTY_TYPE_ADD_SUCCESS, PROPERTY_TYPE_GET_FAILURE, PROPERTY_TYPE_GET_REQUEST, PROPERTY_TYPE_GET_SUCCESS, PROPERTY_TYPE_UPDATE_REQUEST,
  FAILURE_UNIVERSITY_COURSE_FOR_COLLEGE_LIST, SUCCESS_UNIVERSITY_COURSE_FOR_COLLEGE_LIST, GET_UNIVERSITY_COURSE_FOR_COLLEGE_LIST, PROPERTY_OTHERS_GET_FAILURE, PROPERTY_OTHERS_GET_SUCCESS, PROPERTY_OTHERS_UPDATE_SUCCESS, PROPERTY_OTHERS_ADD_FAILURE, PROPERTY_TYPE_UPDATE_SUCCESS, FAILURE_COLLEGE_COURSE_LIST, SUCCESS_COLLEGE_COURSE_LIST, GET_COLLEGE_COURSE_LIST, COLLEGE_COURSE_ADD_FAILURE, COLLEGE_COURSE_ADD_SUCCESS, COLLEGE_COURSE_ADD_REQUEST, PROPERTY_TYPE_UPDATE_FAILURE, PROPERTY_TYPE_DELETE_REQUEST, PROPERTY_TYPE_DELETE_SUCCESS, PROPERTY_TYPE_DELETE_FAILURE, SUCCESS_ADMISSION_PROCESS_LIST, SUCCESS_AFFILIATE_APPROVE, SUCCESS_ANNOUNCEMENT_LIST, SUCCESS_COLLEGE_LIST, UNIVERSITY_COURSE_DELETE_REQUEST, UNIVERSITY_COURSE_UPDATE_FAILURE, UNIVERSITY_COURSE_UPDATE_SUCCESS, PROPERTY_TYPE_GET_BY_ID_REQUEST, PROPERTY_TYPE_GET_BY_ID_SUCCESS, PROPERTY_TYPE_GET_BY_ID_FAILURE, COLLEGE_COURSE_DELETE_SUCCESS, COLLEGE_COURSE_DELETE_REQUEST, COLLEGE_COURSE_DELETE_FAILURE, COLLEGE_COURSE_UPDATE_REQUEST, COLLEGE_COURSE_UPDATE_SUCCESS, COLLEGE_COURSE_UPDATE_FAILURE, PROPERTY_OTHERS_GET_REQUEST, PROPERTY_OTHERS_UPDATE_FAILURE, PROPERTY_OTHERS_UPDATE_REQUEST, SUCCESS_FAQS_LIST, SUCCESS_GALLERY_LIST, SUCCESS_LOAN_LIST, SUCCESS_PLACEMENT_LIST, SUCCESS_SCHOLARSHIP_LIST, SUCCESS_TEAM_LIST, UNIVERSITY_COURSE_DELETE_FAILURE, UNIVERSITY_COURSE_DELETE_SUCCESS, UNIVERSITY_COURSE_UPDATE_REQUEST, DELETE_GALLERY_IMAGE_REQUEST, DELETE_GALLERY_IMAGE_SUCCESS, DELETE_GALLERY_IMAGE_FAILURE, REPLACE_GALLERY_IMAGE_REQUEST, REPLACE_GALLERY_IMAGE_SUCCESS, REPLACE_GALLERY_IMAGE_FAILURE, EDIT_GALLERY_IMAGE_REQUEST, EDIT_GALLERY_IMAGE_SUCCESS, EDIT_GALLERY_IMAGE_FAILURE,
} from "../Constants/Constants";
import { ToastContainer, toast } from 'react-toastify';

//Add Status action
export const createPropertyType = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_TYPE_ADD_REQUEST });
    const { data } = await API.post(`/createPropertyType`, property);

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_TYPE_ADD_SUCCESS, payload: data?.propertyCreated });
      // window.location.href ="/property-type";
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    dispatch({
      type: PROPERTY_TYPE_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};


export const getPropertyType = () => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_TYPE_GET_REQUEST });
    const { data } = await API.get(`/getPropertyType`);
    dispatch({ type: PROPERTY_TYPE_GET_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: PROPERTY_TYPE_GET_FAILURE,
      // payload: error.message && error.message ? error.message : '',
    });
  }
};

export const updatePropertyType = (id, property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_TYPE_UPDATE_REQUEST });
    const { data } = await API.put(`/updatePropertyType?id=${id}`, property);
    dispatch({ type: PROPERTY_TYPE_UPDATE_SUCCESS, payload: data });

    toast.success("Property updated successfully.")

  } catch (error) {
    dispatch({
      type: PROPERTY_TYPE_UPDATE_FAILURE,
      // payload: error.message && error.message ? error.message : '',
    });
  }
};

export const deletePropertyType = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_TYPE_DELETE_REQUEST });
    const { data } = await API.delete(`/deletePropertyType?id=${id}`);
    dispatch({ type: PROPERTY_TYPE_DELETE_SUCCESS, payload: data });

    toast.success("PropertyType deleted successfully.")

  } catch (error) {
    dispatch({
      type: PROPERTY_TYPE_DELETE_FAILURE,
      // payload: error.message && error.message ? error.message : '',
    });
  }
};


//PROPERTY FORMS
export const preopertyForm = (property, navigate) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_FORM_REQUEST });
    const { data } = await API.post(`/collegeCreate`, property);


    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_FORM_SUCCESS, payload: data?.college });
      navigate("/property-list");
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_FORM_FAILURE
    });
    toast.error(error?.message)
  }
};




export const getCollegeAffliateApprove = () => async (dispatch) => {
  try {
    dispatch({ type: GET_AFFILIATE_APPROVE });
    const { data } = await API.get(`/getCollegeAffliateApprove`);


    dispatch({ type: SUCCESS_AFFILIATE_APPROVE, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_AFFILIATE_APPROVE
    });
    toast.error(error?.message)
  }
};



export const getCollegeList = () => async (dispatch) => {
  try {
    dispatch({ type: GET_COLLEGE_LIST });
    const { data } = await API.get(`/getCollegeList`);

    dispatch({ type: SUCCESS_COLLEGE_LIST, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_COLLEGE_LIST
    });
    toast.error(error?.message)
  }
};




//Add createGallery action
export const createGallery = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_GALLERY_ADD_REQUEST });
    const { data } = await API.post(`/createGallery`, property);

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_GALLERY_ADD_SUCCESS, payload: data?.gallery });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_GALLERY_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};



export const getGallery = () => async (dispatch) => {
  try {
    dispatch({ type: GET_GALLERY_LIST });
    const { data } = await API.get(`/getGallery`);

    dispatch({ type: SUCCESS_GALLERY_LIST, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_GALLERY_LIST
    });
    toast.error(error?.message)
  }
};


export const deleteGalleryImg = (details) => async (dispatch) => {
  try {

    dispatch({ type: DELETE_GALLERY_IMAGE_REQUEST});
    const {data} =  await API.put(`/delete-gallery-image`,details)
    if(data.status_code == 200){
      dispatch({type: DELETE_GALLERY_IMAGE_SUCCESS, payload:data})
      // toast.success(data?.message)
    }else{
      toast.error(data?.message)
    }
  } catch (error) {
    dispatch({
      type: DELETE_GALLERY_IMAGE_FAILURE
    });
    toast.error(error?.message)
  }
}

export const replaceGalleryImage = (details) => async (dispatch) => {
  try {
    dispatch({type:REPLACE_GALLERY_IMAGE_REQUEST})
    const {data} = await API.put(`/replace-gallery-image`,details)
    if(data.status_code == 200){
      dispatch({type: REPLACE_GALLERY_IMAGE_SUCCESS, payload:data})
      toast.success(data?.message)
    }else{
      toast.error(data?.message)
    }
  } catch (error) {
    dispatch({
      type: REPLACE_GALLERY_IMAGE_FAILURE
    });
    toast.error(error?.message)
  }
}

export const updateGalleryImage = (details) => async (dispatch) =>{
  try {
    dispatch({type:EDIT_GALLERY_IMAGE_REQUEST})
    const {data} = await API.put(`/edit-gallery-image`,details)
    if(data.status_code == 200){
      dispatch({type: EDIT_GALLERY_IMAGE_SUCCESS, payload:data})
      toast.success(data?.message)
      setTimeout(()=>{window.location.href =`/property-list/University/${data?.gallery.property_id}/gallery`;},1000)
    }else{
      toast.error(data?.message)
    }
  } catch (error) {
    dispatch({
      type: EDIT_GALLERY_IMAGE_FAILURE
    });
    toast.error(error?.message)
  }
};


//Add createTeamLeader action
export const createTeamLeader = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_TEAM_ADD_REQUEST });
    const { data } = await API.post(`/createTeamLeader`, property);

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_TEAM_ADD_SUCCESS, payload: data?.team_lead });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_TEAM_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};

//Add updateTeamLeader action
export const updateTeamLeader = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_TEAM_UPDATE_REQUEST });
    const { data } = await API.put(`/updateTeamLeader`, property);

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_TEAM_UPDATE_SUCCESS, payload: data?.team_lead });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_TEAM_UPDATE_FAILURE
    });
    toast.error(error?.message)
  }
};


//Get TeamLeader action
export const getTeamLead = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TEAM_LIST });
    const { data } = await API.get(`/getTeamLead`);


    dispatch({ type: SUCCESS_TEAM_LIST, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_TEAM_LIST
    });
    toast.error(error?.message)
  }
};


//Add createPlacement action
export const createPlacement = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_PLACEMENT_ADD_REQUEST });
    const { data } = await API.post(`/createPlacement`, property);


    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_PLACEMENT_ADD_SUCCESS, payload: data?.placement });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_PLACEMENT_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};

//Add updatePlacement action
export const updatePlacement = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_PLACEMENT_UPDATE_REQUEST });
    const { data } = await API.put(`/updatePlacement`, property);


    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_PLACEMENT_UPDATE_SUCCESS, payload: data?.placement });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_PLACEMENT_UPDATE_FAILURE
    });
    toast.error(error?.message)
  }
};



//Get placement action
export const getPlacement = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PLACEMENT_LIST });
    const { data } = await API.get(`/getPlacement`);


    dispatch({ type: SUCCESS_PLACEMENT_LIST, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_PLACEMENT_LIST
    });
    toast.error(error?.message)
  }
};


//Add createLoan action
export const createLoan = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_LOAN_ADD_REQUEST });
    const { data } = await API.post(`/createLoan`, property);


    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_LOAN_ADD_SUCCESS, payload: data?.loan });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_LOAN_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};



//Add updateTeamLeader action
export const updateLoan = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_LOAN_UPDATE_REQUEST });
    const { data } = await API.put(`/updateLoan`, property);
    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_LOAN_UPDATE_SUCCESS, payload: data?.loan });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_LOAN_UPDATE_FAILURE
    });
    toast.error(error?.message)
  }
};


//get Loan Action
export const getLoan = () => async (dispatch) => {
  try {
    dispatch({ type: GET_LOAN_LIST });
    const { data } = await API.get(`/getLoan`);


    dispatch({ type: SUCCESS_LOAN_LIST, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_LOAN_LIST
    });
    toast.error(error?.message)
  }
};



//Add createScholarship action
export const createScholarship = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_SCHOLARSHIP_ADD_REQUEST });
    const { data } = await API.post(`/createScholarship`, property);

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_SCHOLARSHIP_ADD_SUCCESS, payload: data?.scholarship });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_SCHOLARSHIP_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};

//Add updateTeamLeader action
export const updateScholarship = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_SCHOLARSHIP_UPDATE_REQUEST });
    const { data } = await API.put(`/updateScholarship`, property);

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_SCHOLARSHIP_UPDATE_SUCCESS, payload: data?.scholarship });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_SCHOLARSHIP_UPDATE_FAILURE
    });
    toast.error(error?.message)
  }
};

export const getScholarship = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SCHOLARSHIP_LIST });
    const { data } = await API.get(`/getScholarship`);

    dispatch({ type: SUCCESS_SCHOLARSHIP_LIST, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_SCHOLARSHIP_LIST
    });
    toast.error(error?.message)
  }
};
//Add createTeamLeader action
export const createAdmission_process = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_ADMISSION_PROCESS_ADD_REQUEST });
    const { data } = await API.post(`/createAdmission_process`, property);
    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_ADMISSION_PROCESS_ADD_SUCCESS, payload: data?.admission_process });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_ADMISSION_PROCESS_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};

//Add updateTeamLeader action
export const updateAdmission_process = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_ADMISSION_PROCESS_UPDATE_REQUEST });
    const { data } = await API.put(`/updateAdmission_process`, property);
    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_ADMISSION_PROCESS_UPDATE_SUCCESS, payload: data?.admission_process });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_ADMISSION_PROCESS_UPDATE_FAILURE
    });
    toast.error(error?.message)
  }
};

export const getAdmission_process = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ADMISSION_PROCESS_LIST });
    const { data } = await API.get(`/getAdmission_process`);
    dispatch({ type: SUCCESS_ADMISSION_PROCESS_LIST, payload: data });

  } catch (error) {
    dispatch({
      type: FAILURE_ADMISSION_PROCESS_LIST
    });
    toast.error(error?.message)
  }
};
//Add createTeamLeader action
export const createAnnouncement = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_ANNOUNCEMENT_ADD_REQUEST });
    const { data } = await API.post(`/createAnnouncement`, property);

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_ANNOUNCEMENT_ADD_SUCCESS, payload: data?.announcement });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_ANNOUNCEMENT_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};

//Add updateTeamLeader action
export const updateAnnouncement = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_ANNOUNCEMENT_UPDATE_REQUEST });
    const { data } = await API.put(`/updateAnnouncement`, property);

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_ANNOUNCEMENT_UPDATE_SUCCESS, payload: data?.announcement });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_ANNOUNCEMENT_UPDATE_FAILURE
    });
    toast.error(error?.message)
  }
};

export const getAnnouncement = () => async (dispatch) => {
  try {

    dispatch({ type: GET_ANNOUNCEMENT_LIST });
    const { data } = await API.get(`/getAnnouncement`);

    dispatch({ type: SUCCESS_ANNOUNCEMENT_LIST, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_ANNOUNCEMENT_LIST
    });
    toast.error(error?.message)
  }
};

//Add createTeamLeader action
export const createFaqs = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_FAQS_ADD_REQUEST });
    const { data } = await API.post(`/createFaqs`, property);

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_FAQS_ADD_SUCCESS, payload: data?.faqs });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_FAQS_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};

//Add updateTeamLeader action
export const updateFaqs = (property) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_FAQS_UPDATE_REQUEST });
    const { data } = await API.put(`/updateFaqs`, property);

    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_FAQS_UPDATE_SUCCESS, payload: data?.faqs });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: PROPERTY_FAQS_UPDATE_FAILURE
    });
    toast.error(error?.message)
  }
};

export const getFaqs = () => async (dispatch) => {
  try {
    dispatch({ type: GET_FAQS_LIST });
    const { data } = await API.get(`/getFaqs`);

    dispatch({ type: SUCCESS_FAQS_LIST, payload: data });

  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: FAILURE_FAQS_LIST
    });
    toast.error(error?.message)
  }
};

export const getQas = () => async (dispatch) => {
  try {
    dispatch({ type: GET_QAS_LIST });
    const { data } = await API.get(`/getQas`);
    dispatch({ type: SUCCESS_QAS_LIST, payload: data });
  } catch (error) {
    dispatch({
      type: FAILURE_QAS_LIST
    });
    toast.error(error?.message)
  }
};

// export const statusCreate = (status) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_STATUS_CREATE_REQUEST });
//     const { data } = await API.post(`/statusCreate`, status);
// console.log(data,"llllllooooo")
//     dispatch({ type: USER_STATUS_CREATE_SUCCESS, payload:data });

//         toast.success("Status created successfully.")

//   } catch (error) {
//     dispatch({
//       type: USER_STATUS_CREATE_FAILURE,
//       // payload: error.message && error.message ? error.message : '',
//     });
//   }
// };

// export const statusFetch = () => async (dispatch) => {
//   try {
//     dispatch({ type: USER_STATUS_REQUEST });
//     const { data } = await API.get(`/statusGet`);

//     dispatch({ type: USER_STATUS_SUCCESS, payload:data });

//   } catch (error) {
//     dispatch({
//       type: USER_STATUS_FAILURE,
//       // payload: error.message && error.message ? error.message : '',
//     });
//   }
// };

// export const statusUpdate = (id,status) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_STATUS_UPDATE_REQUEST });
//     const { data } = await API.put(`/statusUpdate?id=${id}`, status);
// console.log(data,"llllllooooo")
//     dispatch({ type: USER_STATUS_UPDATE_SUCCESS, payload:data });

//         toast.success("Status updated successfully.")

//   } catch (error) {
//     dispatch({
//       type: USER_STATUS_UPDATE_FAILURE,
//       // payload: error.message && error.message ? error.message : '',
//     });
//   }
// };

// export const statusDelete = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_STATUS_DELETE_REQUEST });
//     const { data } = await API.delete(`/statusDelete?id=${id}`);
// console.log(data,"llllllooooo")
//     dispatch({ type: USER_STATUS_DELETE_SUCCESS, payload:data });

//     toast.success("Status deleted successfully.")

//   } catch (error) {
//     dispatch({
//       type: USER_STATUS_DELETE_FAILURE,
//       // payload: error.message && error.message ? error.message : '',
//     });
//   }
// };

//Add createLoan action

//Add Create Univesrity Course action
export const createUniversityCourse = (universityCourse) => async (dispatch) => {
  try {
    dispatch({ type: UNIVERSITY_COURSE_ADD_REQUEST });
    const { data } = await API.post(`/createUniversityCourse`, universityCourse);
    if (data.status_code == 200) {
      dispatch({ type: UNIVERSITY_COURSE_ADD_SUCCESS, payload: data?.universityCourse });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: UNIVERSITY_COURSE_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};

export const getUniversityCourses = () => async (dispatch) => {
  try {
    dispatch({ type: GET_UNIVERSITY_COURSE_LIST });
    const { data } = await API.get(`/getUniversityCourse`);
    dispatch({ type: SUCCESS_UNIVERSITY_COURSE_LIST, payload: data });
  } catch (error) {
    dispatch({
      type: FAILURE_UNIVERSITY_COURSE_LIST
    });
    toast.error(error?.message)
  }
};

export const universityCourseDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: UNIVERSITY_COURSE_DELETE_REQUEST });
    const { data } = await API.delete(`/deleteUniversityCourse?id=${id}`);
    dispatch({ type: UNIVERSITY_COURSE_DELETE_SUCCESS, payload: data?.id });
    toast.success("Course deleted successfully.")

  } catch (error) {
    dispatch({
      type: UNIVERSITY_COURSE_DELETE_FAILURE,
      // payload: error.message && error.message ? error.message : '',
    });
  }
};

export const updateUniversityCourse = (course) => async (dispatch) => {
  try {
    dispatch({ type: UNIVERSITY_COURSE_UPDATE_REQUEST });
    const { data } = await API.put(`/updateUniversityCourse`, course);
    if (data.status_code == 200) {
      dispatch({ type: UNIVERSITY_COURSE_UPDATE_SUCCESS, payload: data?.course });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: UNIVERSITY_COURSE_UPDATE_FAILURE
    });
    toast.error(error?.message)
  }
};

export const createOthers = (values) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_OTHERS_ADD_REQUEST })
    const { data } = await API.post(`/createOther`, values);
    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_OTHERS_ADD_SUCCESS, payload: data?.others })
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log("error", error);
    dispatch({ type: PROPERTY_OTHERS_ADD_FAILURE })
  }
}

export const updateOthers = (values) => async (dispatch) => {
  try {

    dispatch({ type: PROPERTY_OTHERS_UPDATE_REQUEST })
    const { data } = await API.put(`/updateOther`, values);
    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_OTHERS_UPDATE_SUCCESS, payload: data?.others })
      toast.success(data?.message)
    }
  } catch (error) {
    dispatch({
      type: PROPERTY_OTHERS_UPDATE_FAILURE
    });
    console.log("error", error);
  }
}
export const getOthers = (values) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_OTHERS_GET_REQUEST })
    const { data } = await API.get(`/getOther`);
    // console.log(data);
    if (data.status_code == 200) {
      dispatch({ type: PROPERTY_OTHERS_GET_SUCCESS, payload: data?.others });
      // toast.success(data?.message)
    } else {
      dispatch({ type: PROPERTY_OTHERS_GET_FAILURE })
      // toast.error(data?.message)
    }
  } catch (error) {
    dispatch({
      type: PROPERTY_OTHERS_GET_FAILURE
    });
    console.log("error", error);
    // toast.error(error?.message)

  }
}
//Add Create Univesrity Course action
export const createCollegeCourse = (collegeCourse) => async (dispatch) => {
  try {
    dispatch({ type: COLLEGE_COURSE_ADD_REQUEST });
    const { data } = await API.post(`/createCollegeCourse`, collegeCourse);
    if (data.status_code == 200) {
      dispatch({ type: COLLEGE_COURSE_ADD_SUCCESS, payload: data?.collegeCourse });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: COLLEGE_COURSE_ADD_FAILURE
    });
    toast.error(error?.message)
  }
};


export const getCollegeCourses = () => async (dispatch) => {
  try {
    dispatch({ type: GET_COLLEGE_COURSE_LIST });
    const { data } = await API.get(`/getCollegeCourse`);
    dispatch({ type: SUCCESS_COLLEGE_COURSE_LIST, payload: data });
  } catch (error) {
    dispatch({
      type: FAILURE_COLLEGE_COURSE_LIST
    });
    toast.error(error?.message)
  }
};

export const updateCollegeCourse = (course) => async (dispatch) => {
  try {
    dispatch({ type: COLLEGE_COURSE_UPDATE_REQUEST });
    const { data } = await API.put(`/updateCollegeCourse`, course);
    if (data.status_code == 200) {
      dispatch({ type: COLLEGE_COURSE_UPDATE_SUCCESS, payload: data?.course });
      toast.success(data?.message)
    } else {
      toast.error(data?.message)
    }
  } catch (error) {
    console.log(error, "error")
    dispatch({
      type: COLLEGE_COURSE_UPDATE_FAILURE
    });
    toast.error(error?.message)
  }
};

export const collegeCourseDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: COLLEGE_COURSE_DELETE_REQUEST });
    const { data } = await API.delete(`/deleteCollegeCourse?id=${id}`);
    dispatch({ type: COLLEGE_COURSE_DELETE_SUCCESS, payload: data?.id });
    toast.success("Course deleted successfully.")

  } catch (error) {
    dispatch({
      type: COLLEGE_COURSE_DELETE_FAILURE,
      // payload: error.message && error.message ? error.message : '',
    });
  }
};

export const getUniversityCoursesForCollege = (requestData) => async (dispatch) => {
  try {
    dispatch({ type: GET_UNIVERSITY_COURSE_FOR_COLLEGE_LIST });
    const { data } = await API.post('/getUniversityCourseForCollege', requestData);
    dispatch({ type: SUCCESS_UNIVERSITY_COURSE_FOR_COLLEGE_LIST, payload: data });
  } catch (error) {
    dispatch({
      type: FAILURE_UNIVERSITY_COURSE_FOR_COLLEGE_LIST
    });
    toast.error(error?.message)
  }
};
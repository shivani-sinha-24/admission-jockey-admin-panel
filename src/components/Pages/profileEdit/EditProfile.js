import React, { useEffect, useState ,useRef} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup";
import moment from 'moment'
import { ImagePreviewCard } from '../../Card/ImagePreviewCard'
import JoditEditor from 'jodit-react';
import { fetchUserById, userUpdate } from '../../../redux/Action/AuthAction';
import { DropImg } from '../Property/StepForm/component/DropImg';

const EditProfile = () => {
  
  const {users} = useSelector(state => ({
    users: state?.userAuth?.users,
  })); 

  const profileData = users?.user
  const {id} = useParams() 
  console.log("params: ",id);
  console.log(sessionStorage.getItem("userId"));

  useEffect(() => {
    dispatch(fetchUserById(id))
  }, [])
  
  const dispatch = useDispatch()  
  const editor = useRef(null);
  const [content, setContent] = useState(profileData?.description || "");

  console.log(profileData?._id);

  const [file, setFile] = useState("");
  const [preview,setPreview] = useState(null)

  const formik = useFormik({
    initialValues:{
      "name":profileData?.name || '',
      // "description": profileData?.description || '',
      "image": profileData?.image || ""
    },
    onSubmit:(values)=>{
      values = { ...formik.values, "description": content, id }
      console.log(values);
      let formData = new FormData();
      for (let value in values) {
          formData.append(value, values[value]);
      }
      dispatch(userUpdate(formData));
    }
  })

  const changeHandler = (e) => {
    const {name} = e.target;
    setFile( e.target.files[0]);  
    console.log(file);
    // setPost({ ...post, [name]:  e.target.files[0] });
    let fileReader = new FileReader()
    fileReader.onload = e =>{
      if(fileReader.readyState==2){
        setPreview(fileReader.result)
        formik.setFieldValue('image',fileReader.result)
        
      }
    }
    fileReader.readAsDataURL(e.target.files[0])
  };

  return (
    <div className="container bg-white p-3 mt-5">
        <div className="row ">
            <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img className="rounded-circle mt-5" src={profileData?.image?`${process.env.REACT_APP_IMG_URL}images/${profileData?.image}`:"https://i.imgur.com/0eg0aG0.jpg"} width="90"/>
                  <span className="font-weight-bold">{profileData?.name}</span>
                  <span className="text-black-50">{profileData?.email}</span>
                  <span className="text-black-50">Member Since: {moment(profileData?.created_at).format("MMM Do YY")}</span>
                </div>
            </div>
            <div className="col-md-8">
                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <Link 
                          to={`${process.env.PUBLIC_URL}/profile`}
                          className="d-flex flex-row align-items-center back">
                            <i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                            <h6>Back to Profile</h6>
                        </Link>
                        <h6 className="text-right">Edit Profile</h6>
                    </div>
                    <form action="post" onSubmit={formik.handleSubmit}>
                      <div className="row mt-2">
                          <label htmlFor="name" className="form-label">User Name</label>
                          <div className="col-lg-12">
                            <input type="text" 
                            className="form-control" 
                            id='name' 
                            placeholder="Please enter User name" 
                            value={formik?.values?.name}
                            onChange={formik?.handleChange}
                            />
                          </div>
                      </div>
                       <div className="row mt-3">
                          <div className="col-lg-12">
                            <label htmlFor="description" className="form-label">Biography</label>
                            {/* <textarea rows="3" 
                            className="form-control" 
                            id='description' 
                            placeholder='Start writing...'
                            value={values?.description}
                            onChange={handleChange}
                            ></textarea> */}
                            <JoditEditor
                              ref={editor}
                              value={content}
                              onChange={newContent => {console.log(content,newContent);setContent(newContent)}}
                            />
                          </div>
                      </div> 
                      
                      <div className='row mt-3"'>
                      {preview
                       ? 
                        <ImagePreviewCard preview={preview} setPreview={setPreview} setFile={setFile} />
                       : 
                        // <div className="row mt-3">
                        //   <label htmlFor="image" className="form-label">Profile Picture</label>
                        //   <div className="col-lg-12">
                        //     <input type="file" 
                        //     id='image' 
                        //     name='image'
                        //     accept='image/*'
                        //     className="form-control"
                        //     // value={values?.image}
                        //     onChange={changeHandler}
                        //     />
                        //   </div>
                        // </div>
                        <div className="row mt-3 ml-0" style={{margin:"initial"}}>
                        <DropImg
                            type="file" className="dropify" imgtype="image"
                            formik ={formik}
                        />
                        </div>
                      }
                      </div>
                      <div className="mt-5 d-flex justify-content-end">
                        <button className="btn btn-primary profile-button" type="button" onClick={()=>formik.handleSubmit()}>
                          Save Profile
                        </button>
                      </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProfile

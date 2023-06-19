import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { statusCreate, statusFetch, statusUpdate } from '../../../redux/Action/Status';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Card, Col, Row } from 'react-bootstrap';
import JoditEditor from 'jodit-react';
import { DropImg } from '../Property/StepForm/component/DropImg';

const AddStatus = ({ open, scroll, handleClose }) => {
    const [editStatus, setEditStatus] = useState();
    const [content, setContent] = useState( "");

    const navigate = useNavigate()

    const statusvalSchema = Yup.object().shape({
        name: Yup.string().required('Status name is required'),
        color_code: Yup.string().required('Color code is required'),
        status_for: Yup.string().required('Status for is required'),
    });

    const descriptionElementRef = React.useRef(null);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const { users } = useSelector(state => ({
    users: state?.userAuth?.loginUser.user,
  })); 


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      "name": editStatus?.name || "",
      "description": editStatus?.description || "",
      "color_code": editStatus?.color_code || "",
      "status_for": editStatus?.status_for || "",
    },
     validationSchema: statusvalSchema,
    onSubmit: values => {
      values = { ...formik.values, "description": content, created_by_user_id :  users._id}
      if (editStatus != undefined) {
      dispatch(statusUpdate(editStatus?._id,values));
      dispatch(statusFetch());
      window.location.reload(false);
      }else{
        dispatch(statusCreate(values));
        navigate('/status',{replace:false})
      }
      formik.resetForm();
      handleClose()
      //alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    
    <Row className=" row-sm">
      <Col lg={12} xl={12} md={12} sm={12}>
          <Card>
            <Card.Header>
              < Card.Title as="h3">{`Add Status`}</Card.Title>
            </Card.Header>
            <Col sm={12} lg={12} md={12} xl={12}>
              <Card >
                  <Row>
                    <section>
                    <form onSubmit={formik.handleSubmit}>
                      {/* <DialogTitle id="scroll-dialog-title">Add Status</DialogTitle> */}
                      <DialogContent dividers={scroll === "paper"}>
                        <DialogContentText
                          ref={descriptionElementRef}
                          tabIndex={-1}
                        >

                          <div className="control-group form-group ">
                            <label className="form-label">Name</label>
                            <input
                              type="text"
                              className="form-control required"
                              placeholder="Name"
                              onChange={formik.handleChange}
                              value={formik.values.name}
                              name="name"
                            />
                              {formik.errors.name && formik.touched.name ? (
                                  <div style={{color:"red"}}>{formik.errors.name}</div>
                                ) : null}
                          </div>
                          <div className="control-group form-group">
                            <label className="form-label">Description</label>
                            {/* <input
                              type="text"
                              className="form-control required"
                              placeholder="Description"
                              onChange={formik.handleChange}
                              value={formik.values.description}
                              name="description"
                            /> */}
                            <JoditEditor
                                // ref={editor}
                                value={content}
                                onChange={newContent => setContent(newContent)}
                            />
                          </div>
                          <div className="control-group form-group">
                            <label className="form-label">Color</label>
                            <input
                              type="color"
                              className="form-control required"
                              placeholder="Color"
                              onChange={formik.handleChange}
                              value={formik.values.color_code}
                              name="color_code"
                            />
                              {formik.errors.color_code && formik.touched.color_code ? (
                                  <div style={{color:"red"}}>{formik.errors.color_code}</div>
                                ) : null}
                          </div>

                          {/* <FormSelect /> */}
                          <div className="control-group form-group">
                            <label className="form-label">Staus For</label>
                            <select
                              onChange={formik.handleChange}
                              value={formik.values.status_for}
                              className="form-control required"
                              name="status_for" id="role">
                              <option >Select</option>
                              <option value="0">User</option>
                              <option value="1">Colleges</option>
                              <option value="2">Property</option>

                            </select>
                            {formik.errors.status_for && formik.touched.status_for ? (
                                  <div style={{color:"red"}}>{formik.errors.status_for}</div>
                                ) : null}
                          </div>



                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        {/* <Button variant="secondary" className="me-1" onClick={handleClose}>Cancel</Button> */}
                        {/* <Button variant="secondary" className="me-1" onClick={()=>formik.resetForm()}>Cancel</Button>
                        <Button type="submit" variant="primary" className="me-1" >Submit</Button> */}
                      </DialogActions>
                    </form>
                      <Button variant="secondary" className="me-1" onClick={()=>{formik.resetForm();setContent('');}}>Cancel</Button>
                      <Button type="submit" variant="primary" className="me-1"  onClick={formik.handleSubmit} >Submit</Button>
                    </section>
                  </Row >
              </Card>
            </Col>
          </Card>
      </Col>
  </Row>

  )
}

export default AddStatus

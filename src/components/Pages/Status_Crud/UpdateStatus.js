import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { statusFetch, statusUpdate } from '../../../redux/Action/Status';
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Button, Card, Col, Row } from 'react-bootstrap';
import JoditEditor from 'jodit-react';

const UpdateStatus = ({ open, scroll, handleClose }) => {
  const dispatch = useDispatch();
  const {id} = useParams()
  const [content, setContent] = useState( "");
  const navigate = useNavigate()
  
  const { status } = useSelector((state) => ({
    status: state?.status?.status?.statuses?.filter(item=>item?._id == id),
  }));
  useEffect(() => {
    dispatch(statusFetch());
  }, []);

  const descriptionElementRef = React.useRef(null);


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      "name": status[0].name || "",
      "description": status[0].description || "",
      "color_code": status[0].color_code || "",
      "status_for": status[0].status_for || "",
    },
    onSubmit: values => {
      values = { ...formik.values, "description": content }
      dispatch(statusUpdate(status[0]._id,values));
      navigate("/status");
    },
  });
  return (
    <Row className=" row-sm">
    <Col lg={12} xl={12} md={12} sm={12}>
        <Card>
          <Card.Header>
            < Card.Title as="h3">{`Update Status`}</Card.Title>
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
                              value={formik.values.description}
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

export default UpdateStatus

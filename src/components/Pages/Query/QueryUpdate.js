import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Form, useFormik } from "formik";
import { statusFetch, statusUpdate } from '../../../redux/Action/Status';
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Button, Card, Col, Row } from 'react-bootstrap';
import JoditEditor from 'jodit-react';
import { fetchQuires, updateQuery } from '../../../redux/Action/WebAction';
import API from '../../../service/API';

const QueryUpdate = ({ open, scroll, handleClose }) => {
  
  const dispatch = useDispatch();
  const {id} = useParams()
  const [content, setContent] = useState( "");
  const [caller,setCaller] = useState()
  const navigate = useNavigate()
  
  
  const { myTeam, queries } = useSelector(state => ({
    queries: state?.webSite?.queries?.filter(item=>item?._id == id)
  }));
  
  useEffect(() => {
    dispatch(fetchQuires());
    API.get(`/findCallerAssigned/${id}`)
    .then(res=>setCaller(res?.data[0]?.name)) 
    .catch(err=>{})
  }, [id]);

  const descriptionElementRef = React.useRef(null);


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      "name": queries[0]?.name || "",
      "status": queries[0]?.status || "",
      'email':queries[0]?.email ||"",
      "phone_number" :queries[0]?.phone_number || "",
      "course" :queries[0]?.course || "",
      "assignedName" :caller || "",
    },
    onSubmit: values => {
      values = {...values,id:id}
      console.log('values :',values)
      dispatch(updateQuery(values))

    //   dispatch(statusUpdate(queries[0]._id,values));
      // navigate("/my-team");
    },
  });
    
  return (
    <Row className=" row-sm">
    <Col lg={12} xl={12} md={12} sm={12}>
        <Card>
          <Card.Header>
            < Card.Title as="h3">{`Update Query Status`}</Card.Title>
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
                              <div className="row">

                                <div className=" col-md-6">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control required"
                                    placeholder="Name"
                                    disabled={true}
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    name="name"
                                />
                                </div>
                                <div className=" col-md-6">
                                <label className="form-label">Email</label>
                                <input
                                    type="text"
                                    className="form-control required"
                                    placeholder="Email"
                                    disabled={true}
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    name="email"
                                />
                                </div>
                                <div className="col-md-6">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="number"
                                    className="form-control required"
                                    placeholder="Phone Number"
                                    disabled={true}
                                    onChange={formik.handleChange}
                                    value={formik.values.phone_number}
                                    name="phone_number"
                                />
                                </div>
                                <div className="col-md-6">
                                <label className="form-label">Enquired for Course</label>
                                <input
                                    type="text"
                                    className="form-control required"
                                    placeholder="Enquired for Course"
                                    disabled={true}
                                    onChange={formik.handleChange}
                                    value={formik.values.course}
                                    name="course"
                                />
                                </div>
                                <div className="col-md-6">
                                <label className="form-label">Assigned to Caller</label>
                                <input
                                    type="text"
                                    className="form-control required"
                                    placeholder="Assigned to Caller"
                                    disabled={true}
                                    onChange={formik.handleChange}
                                    value={formik.values.assignedName}
                                    name="assignedName"
                                />
                                </div>
                                <div className="col-md-6">
                                <label className="form-label">Staus</label>
                                <select
                                    onChange={formik.handleChange}
                                    value={formik.values.status}
                                    className="form-control required"
                                    name="status" id="status">
                                    <option >Select</option>
                                    <option value="Pending">Pending</option>
                                    <option value="On Going">On Going</option>
                                    <option value="Completed">Completed</option>

                                </select>
                                {formik.errors.status && formik.touched.status ? (
                                    <div style={{color:"red"}}>{formik.errors.status_for}</div>
                                ) : null}
                                </div>
                              </div>



                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            {/* <Button variant="secondary" className="me-1" onClick={handleClose}>Cancel</Button> */}
                            {/* <Button variant="secondary" className="me-1" onClick={()=>formik.resetForm()}>Cancel</Button>
                            <Button type="submit" variant="primary" className="me-1" >Submit</Button> */}
                            </DialogActions>
                        </form>
                        <Button variant="secondary" className="me-1" onClick={()=>{formik.resetForm();navigate(-1);}}>Cancel</Button>
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

export default QueryUpdate

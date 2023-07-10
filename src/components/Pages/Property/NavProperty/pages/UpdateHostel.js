import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { getHostel, updateHostel } from '../../../../../redux/Action/PropertyTypeAction';
import JoditEditor from 'jodit-react';

const UpdateHostel = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { hostel } = useSelector((state) => ({
        hostel: state?.propertyType?.hostel.filter(item => item?._id == params.id),
    }));
    const [content, setContent] = useState(hostel[0]?.description || "");
    //   console.log(hostel);
      const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            "id": hostel[0]?._id || "",
            "property_id": params.clgid,
            "title": hostel[0]?.title || "",
            'fees': hostel[0]?.fees || "",            
        },
        onSubmit: values => {
            values = { ...values, "description": content }
            // values = {...values, 'type_of_hostel' : hostel[0]?.type_of_hostel}
            // console.log(values);
                navigate(-1)
                dispatch(updateHostel(values));
                dispatch(getHostel())
                // setAddHostel(false)
        }
    })
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <Row>
                <Col lg={12} xl={12} md={12} sm={12}>
                <Card>
                    <Card.Header>
                        <Card.Title>Update Hostel</Card.Title>
                    </Card.Header>
                    <Col sm={12} lg={12} md={12} xl={12}>
                        {
                        // showGirlsHostelForm&&
                        <Card>
                            <Row>
                                <section>
                                    <div className="row" >
                                    {/* <div className="hostel-title fw-bold fs-6 my-2">Girls Hostel</div> */}
                                        <div className="col-md-6">
                                            <div >
                                                        <label className="form-label">Title</label>
                                                        <input
                                                            type="text"
                                                            className="form-control required"
                                                            placeholder="Name"
                                                            name="title"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.title}
                                                        />
                                                        {/* {formik.errors.title && formik.touched.title ? (
                                                            <div style={{ color: "red" }}>{formik.errors.title}</div>
                                                        ) : null} */}
                                                    </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div >
                                                        <label className="form-label">Fees</label>
                                                        <input
                                                            type="number"
                                                            className="form-control required"
                                                            placeholder="Fees"
                                                            name="fees"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.fees}
                                                        />
                                                        {/* {formik.errors.title && formik.touched.title ? (
                                                            <div style={{ color: "red" }}>{formik.errors.title}</div>
                                                        ) : null} */}
                                                    </div>
                                        </div>
                                        <div className="control-group form-group">
                                                <label className="form-label">Description</label>
                                                <JoditEditor
                                                    // ref={editor}
                                                    value={content}
                                                    onChange={newContent => setContent(newContent)}
                                                />
                                                {/* {formik.errors.description && formik.touched.description ? (
                                                    <div style={{ color: "red" }}>{formik.errors.description}</div>
                                                ) : null} */}
                                            </div>
                                            <div>
                                                <Button type="submit" className="mb-5">
                                                Submit
                                                </Button>
                                            </div>
                                    </div>
                                    
                                </section>
                            </Row>
                        </Card>
                        }
                    </Col>
                </Card>
                </Col>
            </Row>
        </form>
    </div>
  )
}

export default UpdateHostel

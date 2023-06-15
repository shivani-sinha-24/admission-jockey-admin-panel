import React, { useEffect, useState, useRef } from "react";
import { useFormik } from "formik";
import '../../../../App.css'; import {
    Col,
    Row,
    Card,
    Breadcrumb,
    Button,
} from "react-bootstrap";
import JoditEditor from 'jodit-react';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCategory, getCategory } from "../../../../redux/Action/CategoryAction";
import { DropImg } from "../../Property/StepForm/component/DropImg";



export default function CreateCategory() {
    const dispatch = useDispatch();
    const editor = useRef(null);
    const params = useParams();
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const { users, college, tab_status, category } = useSelector(state => ({
        users: state?.userAuth?.loginUser.user,
        college: state?.propertyType?.college.filter(item => item?._id == params.id),
        category: state?.category?.category,
        tab_status: state?.propertyType?.tab_status,
    }));
    useEffect(() => {
        dispatch(getCategory())
    }, []);
    // const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            "name": "",
            "parent": "",
            "image": "",
            "logo": ""
        },
        onSubmit: values => {
            values = { ...values, "description": content, created_by_user_id :  users._id }
            if (typeof values.image == 'object' || typeof values.logo == 'object' || typeof values.image == 'object' && values.logo == 'object') {
                let formData = new FormData();
                for (let value in values) {
                    formData.append(value, values[value]);
                }
                dispatch(createCategory(formData));
                navigate("/category-list");
                dispatch(getCategory())

            } else {
                dispatch(createCategory(values));
                navigate("/category-list");
                dispatch(getCategory())

            }
        },
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Row className=" row-sm mt-5">
                    <Col lg={12} xl={12} md={12} sm={12}>
                        <Card>
                            <Card.Header>
                                < Card.Title as="h3">Create Category</Card.Title>
                            </Card.Header>
                            <Col sm={12} lg={12} md={12} xl={12}>
                                <Row>
                                    <section>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row  d-flex">
                                                    <div className="col-md-6">
                                                        <label className="fw-bold">Name</label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.name}
                                                            placeholder='Name'
                                                            className="form-control required"
                                                            required
                                                        />
                                                        {formik.errors.name && formik.touched.name ? (
                                                            <div style={{ color: "red" }}>{formik.errors.name}</div>
                                                        ) : null}
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="fw-bold">Parent</label>
                                                        {category.length <= 0 ? <input
                                                            type="Text"
                                                            name="parent"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.parent}
                                                            placeholder='Parent'
                                                            className="form-control"
                                                        /> : <select
                                                            name="parent"
                                                            onChange={formik.handleChange}
                                                            className="form-control">
                                                            <option value="">Please select your parent</option>
                                                            {/* {category?.map((item) => {
                                                                return (
                                                                    <option value={item?.name}>{item?.name}</option>
                                                                )
                                                            })} */}
                                                            {users.role&&users.role==2?
                                                            category?.map((item, index) =>{
                                                               if(item.created_by_user_id==users?._id){
                                                                return (
                                                                    <option value={item?.name}>{item?.name}</option>
                                                                )
                                                               }
                                                            }):
                                                            category?.map((item) => {
                                                                return (
                                                                    <option value={item?.name}>{item?.name}</option>
                                                                )
                                                            })
                                                            }
                                                        </select>}
                                                        {formik.errors.parent && formik.touched.parent ? (
                                                            <div style={{ color: "red" }}>{formik.errors.parent}</div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="row  d-flex mt-5">
                                                    <div className="col-md-6">
                                                        <div className="control-group form-group mb-0 drop">
                                                            <label className="form-label">Image</label>
                                                            <DropImg
                                                                type="file" className="dropify" imgtype="image"
                                                                formik={formik}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="control-group form-group mb-0 drop">
                                                            <label className="form-label">Icon</label>
                                                            <DropImg
                                                                type="file" className="dropify" imgtype="logo"
                                                                formik={formik}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row  d-flex">
                                                    <div className="col-md-12">
                                                        <label className="form-label">Description</label>
                                                        <JoditEditor
                                                            ref={editor}
                                                            value={content}
                                                            onChange={newContent => setContent(newContent)}
                                                        />
                                                        {formik.errors.name && formik.touched.name ? (
                                                            <div style={{ color: "red" }}>{formik.errors.name}</div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <Button type="submit" variant="primary" className="me-1 mt-3 mb-5" >Submit</Button>
                                            </div>
                                        </div>
                                    </section>
                                </Row>
                            </Col>
                        </Card>
                    </Col>
                </Row>
            </form>
        </div>
    );
}
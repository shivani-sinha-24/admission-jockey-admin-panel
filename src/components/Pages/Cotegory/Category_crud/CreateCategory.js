import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import '../../../../App.css'; import {
    Col,
    Row,
    Card,
    Breadcrumb,
    Button,
} from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCollegeList } from "../../../../redux/Action/PropertyTypeAction";
import { collegeUpdate } from "../../../../redux/Action/PropertyAction";
import { Chips } from 'primereact/chips';
import { classNames } from 'primereact/utils';



export default function CreateCategory() {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const { users, college, tab_status } = useSelector(state => ({
        users: state?.userAuth?.users,
        college: state?.propertyType?.college.filter(item => item?._id == params.id),
        tab_status: state?.propertyType?.tab_status,
    }));
    useEffect(() => {
        dispatch(getCollegeList())
    }, []);
    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            "email": college[0]?.email || "",
            "website": college[0]?.website || "",
            "phone_no": college[0]?.phone || "",
            "edu_type": college[0]?.edu_type || "",
            "name": college[0]?.name || "",
            "short_name": college[0]?.short_name || "",
            "est_year": college[0]?.est_year || "",
            "approved_by": college[0]?.approve_by || "",
            "affliated_by": college[0]?.affilite_by || []
        },
        onSubmit: values => {
            let _id = params?.id;
            values = {
                "id": _id,
                ...values
            }
            dispatch(collegeUpdate(values));
            dispatch(getCollegeList());
            navigate("/property-list");
            window.location.reload(false);
        },
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Row className=" row-sm">
                    <Col lg={12} xl={12} md={12} sm={12}>
                        <Card>
                            <Card.Header>
                                < Card.Title as="h3">Update Property</Card.Title>
                            </Card.Header>
                            <Col sm={12} lg={12} md={12} xl={12}>
                                <Card >
                                    <Row>
                                        <section>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label className="form-label">Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.email}
                                                        placeholder='email'
                                                        className="form-control required"
                                                    />
                                                    {formik.errors.email && formik.touched.email ? (
                                                        <div style={{ color: "red" }}>{formik.errors.email}</div>
                                                    ) : null}
                                                    <label className="form-label">Website</label>
                                                    <input
                                                        type="url"
                                                        name="website"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.website}
                                                        placeholder='website'
                                                        className="form-control"
                                                    />
                                                    {formik.errors.website && formik.touched.website ? (
                                                        <div style={{ color: "red" }}>{formik.errors.website}</div>
                                                    ) : null}
                                                    <label className='fw-bold mt-5 '>Phone No</label>
                                                    <input
                                                        type="number"
                                                        name="phone_no"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.phone_no}
                                                        placeholder='Phone_no'
                                                        className="form-control required"
                                                    />
                                                    {formik.errors.phone_no && formik.touched.phone_no ? (
                                                        <div style={{ color: "red" }}>{formik.errors.phone_no}</div>
                                                    ) : null}

                                                    <label className="form-label">Type</label>
                                                    <input
                                                        type="text"
                                                        name="type"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.edu_type}
                                                        // placeholder='Type'
                                                        className="form-control required"
                                                        disabled

                                                    />
                                                    {formik.errors.type && formik.touched.type ? (
                                                        <div style={{ color: "red" }}>{formik.errors.type}</div>
                                                    ) : null}

                                                    <label className="form-label">Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.name}
                                                        placeholder='name'
                                                        className="form-control required"

                                                    />
                                                    {formik.errors.name && formik.touched.name ? (
                                                        <div style={{ color: "red" }}>{formik.errors.name}</div>
                                                    ) : null}

                                                    <label className="form-label">Short Name</label>
                                                    <input
                                                        type="text"
                                                        name="short_name"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.short_name}
                                                        placeholder='short name'
                                                        className="form-control required"
                                                    />
                                                    {formik.errors.short_name && formik.touched.short_name ? (
                                                        <div style={{ color: "red" }}>{formik.errors.short_name}</div>
                                                    ) : null}

                                                    <label className="form-label">Est year</label>
                                                    <input
                                                        type="text"
                                                        name="est_year"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.est_year}
                                                        placeholder='Est year'
                                                        className="form-control required"

                                                    />
                                                    {formik.errors.est_year && formik.touched.est_year ? (
                                                        <div style={{ color: "red" }}>{formik.errors.est_year}</div>
                                                    ) : null}

                                                    <label className="form-label">Approved By</label>
                                                    <input
                                                        type="text"
                                                        name="approved_by"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.approved_by}
                                                        placeholder='approved_by'
                                                        className="form-control required"
                                                    />
                                                    {/* <div className="card p-fluid justify-content-center">
                                                        <div className="flex flex-column gap-2">
                                                            <Chips
                                                                inputId="c_chipArray"
                                                                name="chipArray"
                                                                value={formik.values.chipArray}
                                                                className={classNames({ 'p-invalid': isFormFieldInvalid('chipArray') })}
                                                                onChange={(e) => {
                                                                    formik.setFieldValue('chipArray', e.value);
                                                                }}
                                                            />
                                                        </div>
                                                    </div> */}
                                                    {/* <Chips
                                                        inputId="c_chipArray"
                                                        name="chipArray"
                                                        value={formik.values.chipArray}
                                                        className="form-control required"
                                                        onChange={(e) => {
                                                            formik.setFieldValue('chipArray', e.value);
                                                        }}
                                                    /> */}
                                                    {formik.errors.approved_by && formik.touched.approved_by ? (
                                                        <div style={{ color: "red" }}>{formik.errors.approved_by}</div>
                                                    ) : null}

                                                    <label className="form-label">Affliated By</label>
                                                    <input
                                                        type="text"
                                                        name="affliated_by"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.affliated_by}
                                                        placeholder='affliated_by'
                                                        className="form-control required"

                                                    />
                                                    {formik.errors.affliated_by && formik.touched.affliated_by ? (
                                                        <div style={{ color: "red" }}>{formik.errors.affliated_by}</div>
                                                    ) : null}
                                                    <Button type="submit" variant="primary" className="me-1" >Submit</Button>
                                                </div>
                                            </div>
                                        </section>
                                    </Row>
                                </Card>
                            </Col>
                        </Card>
                    </Col>
                </Row>
            </form>
        </div>
    );
}
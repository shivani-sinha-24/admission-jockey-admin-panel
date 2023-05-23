import React, { useEffect, useState, useRef } from "react";
import { useFormik } from "formik";
import '../../../../../App.css'; import {
    Col,
    Row,
    Card,
    Button,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUniversityCourse, getUniversityCourses } from "../../../../../redux/Action/PropertyTypeAction";
import { getCategory } from "../../../../../redux/Action/CategoryAction";
import JoditEditor from 'jodit-react';



export default function UpdateUniversityCourse() {
    const dispatch = useDispatch();
    const params = useParams();
    const editor = useRef(null);
    const deditor = useRef(null);
    const navigate = useNavigate();
    const { universityCourse, category } = useSelector(state => ({
        users: state?.userAuth?.users,
        category: state?.category?.category,
        universityCourse: state?.universityCourse?.universityCourse?.filter(item => item?._id == params?.id),
        tab_status: state?.propertyType?.tab_status,
    }));
    const [streamList, setStreamList] = useState([]);
    const [subcategory, setSubcategory] = useState([]);
    const [categoryOnSelect, setCategoryOnSelect] = useState(universityCourse[0]?.category || "");
    const [subCategoryOnSelect, setSubCategoryOnSelect] = useState(universityCourse[0]?.sub_category || "");
    const [streamOnSelect, setStreamOnSelect] = useState(universityCourse[0]?.stream || "");
    useEffect(() => {
        dispatch(getCategory());
        if (universityCourse[0]?.category) {
            setCategory(universityCourse[0]?.category);
        }
        if (universityCourse[0]?.category && universityCourse[0]?.sub_category) {
            setSubCategory(universityCourse[0]?.sub_category)
        }
    }, []);
    const setCategory = (cat) => {
        setCategoryOnSelect(cat);
        let subCategory = [];
        category?.map((sub_cat) => {
            if (sub_cat?.branch?.length == 1) {
                sub_cat?.branch?.map((sub) => {
                    if (sub == cat) {
                        subCategory.push(sub_cat);
                    }
                })
            }
        });
        if (subCategory?.length > 0) {
            setSubcategory(subCategory);
        }
    }

    const setStream = (stream) => {
        setStreamOnSelect(stream);
    }

    const setSubCategory = (sub_cat) => {
        console.log(sub_cat, "sub");
        setSubCategoryOnSelect(sub_cat);
        let streamArray = [];
        category?.map((stream) => {
            if (stream?.branch?.length > 1) {
                stream?.branch?.map((sub) => {
                    if (sub == sub_cat) {
                        streamArray.push(stream);
                    }
                })
            }
        });
        if (streamArray?.length > 0) {
            setStreamList(streamArray);
        }
    }
    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const [eligibilty, setEligibilty] = useState(universityCourse[0]?.eligibilty || "");
    const [description, setDescription] = useState(universityCourse[0]?.description || "");
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            "name": universityCourse[0]?.name || "",
            "full_name": universityCourse[0]?.full_name || "",
            "duration": universityCourse[0]?.duration || "",
            "type": universityCourse[0]?.type || "",
            "fees": universityCourse[0]?.fees || "",
            // "category": "",
            // "sub_category": ""
            "lateral_entry": universityCourse[0]?.lateral_entry || ""
        },
        onSubmit: values => {
            // let _id = params?.id;
            values = {
                "eligibilty": eligibilty,
                "description": description,
                "universityID": params.id,
                "category": categoryOnSelect,
                "sub_category": subCategoryOnSelect,
                "stream": streamOnSelect,
                "id":params.id,
                ...values
            }
            dispatch(updateUniversityCourse(values));
            navigate(`/property-list/${params.id}/universitycourse`);
            dispatch(getUniversityCourses());
        },
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Row className=" row-sm mt-5">
                    <Col lg={12} xl={12} md={12} sm={12}>
                        <Card>
                            <Card.Header>
                                < Card.Title as="h3">Update Course</Card.Title>
                            </Card.Header>
                            <Col sm={12} lg={12} md={12} xl={12}>
                                <Row>
                                    <section>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row  d-flex">
                                                    <div className="col-md-4">
                                                        <label className="fw-bold">Name</label>
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
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="fw-bold">Full Name</label>
                                                        <input
                                                            type="text"
                                                            name="full_name"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.full_name}
                                                            placeholder='Full Name'
                                                            className="form-control"
                                                        />
                                                        {formik.errors.full_name && formik.touched.full_name ? (
                                                            <div style={{ color: "red" }}>{formik.errors.full_name}</div>
                                                        ) : null}
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className='fw-bold '>Duration (Year)</label>
                                                        <input
                                                            type="number"
                                                            name="duration"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.duration}
                                                            placeholder='Duration'
                                                            className="form-control required"
                                                        />
                                                        {formik.errors.duration && formik.touched.duration ? (
                                                            <div style={{ color: "red" }}>{formik.errors.duration}</div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="row  d-flex">

                                                    <div className="col-md-4">
                                                        <label className="form-label">Fees</label>
                                                        <input
                                                            type="number"
                                                            name="fees"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.fees}
                                                            placeholder='Fees'
                                                            className="form-control required"
                                                        />
                                                        {formik.errors.fees && formik.touched.fees ? (
                                                            <div style={{ color: "red" }}>{formik.errors.fees}</div>
                                                        ) : null}
                                                    </div>
                                                    <div className="col-md-4">

                                                        <label className="form-label">Type</label>
                                                        <select name="type"
                                                            onChange={formik.handleChange}
                                                            className="form-control" value={formik.values.type}>
                                                            <option value="">Please Select Type</option>
                                                            <option value="UG">UG</option>
                                                            <option value="PG">PG</option>
                                                            <option value="Diploma">Diploma</option>
                                                            <option value="Certification">Certification</option>
                                                        </select>
                                                        {formik.errors.est_year && formik.touched.est_year ? (
                                                            <div style={{ color: "red" }}>{formik.errors.est_year}</div>
                                                        ) : null}
                                                    </div>

                                                    <div className="col-md-4">
                                                        <label className="form-label">Lateral Entry</label>
                                                        <select name="lateral_entry"
                                                            onChange={formik.handleChange}
                                                            className="form-control"
                                                            value={formik.values.lateral_entry}>
                                                            <option value="">Please Select Lateral Entry</option>
                                                            <option value="YES">YES</option>
                                                            <option value="No">NO</option>
                                                        </select>
                                                        {formik.errors.lateral_entry && formik.touched.lateral_entry ? (
                                                            <div style={{ color: "red" }}>{formik.errors.lateral_entry}</div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="row  d-flex">
                                                    <div className="col-md-4">
                                                        <label className="form-label">Category</label>
                                                        <select name="category"
                                                            onChange={(e) => setCategory(e.target.value)}
                                                            id="category"
                                                            className="form-control"
                                                            value={categoryOnSelect}>
                                                            <option value="">Please Select Category</option>
                                                            {category?.length > 0 ? category.map((item) => {
                                                                if (item?.parent?.length == "") {
                                                                    return (
                                                                        <option value={item?.name}>{item?.name}</option>
                                                                    )
                                                                }
                                                            }) : ""}
                                                        </select>
                                                        {formik.errors.category && formik.touched.category ? (
                                                            <div style={{ color: "red" }}>{formik.errors.category}</div>
                                                        ) : null}
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label">Sub Category</label>
                                                        <select name="sub_category"
                                                            onChange={(e) => setSubCategory(e.target.value)}
                                                            className="form-control"
                                                            value={subCategoryOnSelect}>
                                                            {subcategory.length > 0 ? <option value="">Please Select Sub Category</option> : <option value="">Please Select Category First</option>}
                                                            {subcategory?.length > 0 ? subcategory.map((item) => {
                                                                return (
                                                                    <option value={item?.name}>{item?.name}</option>
                                                                )
                                                            }) : ""}
                                                        </select>
                                                        {formik.errors.sub_category && formik.touched.sub_category ? (
                                                            <div style={{ color: "red" }}>{formik.errors.sub_category}</div>
                                                        ) : null}
                                                    </div>

                                                    <div className="col-md-4">
                                                        <label className="form-label">Stream</label>
                                                        <select name="stream"
                                                            onChange={(e) => setStream(e.target.value)}
                                                            className="form-control"
                                                            value={streamOnSelect}>
                                                            {streamList.length > 0 ? <option value="">Please Select Stream </option> : <option value="">Please Select Sub Category First</option>}

                                                            {streamList?.length > 0 ? streamList.map((item) => {
                                                                return (
                                                                    <option value={item?.name}>{item?.name}</option>
                                                                )
                                                            }) : ""}
                                                        </select>
                                                        {formik.errors.stream && formik.touched.stream ? (
                                                            <div style={{ color: "red" }}>{formik.errors.stream}</div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="row  d-flex">
                                                    <div className="col-md-6">
                                                        <label className="form-label">Eligibilty</label>
                                                        <JoditEditor
                                                            ref={editor}
                                                            value={eligibilty}
                                                            onChange={newContent => setEligibilty(newContent)}
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Description</label>
                                                        <JoditEditor
                                                            ref={deditor}
                                                            value={description}
                                                            onChange={newContent => setDescription(newContent)}
                                                        />
                                                    </div>
                                                </div>
                                                <Button type="submit" variant="primary" className="me-1 mt-3 mb-5" >Submit</Button>
                                                <Button onClick={() => navigate(`/property-list/${params?.id}/universitycourse`)} variant="danger" className="me-1 mt-3 mb-5" >Cancle</Button>
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
import React, { useEffect, useState,useRef } from "react";
import { useFormik } from "formik";
import '../../../../App.css';
import {
    Col,
    Row,
    Card,
    Breadcrumb,
    Button,
} from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import ChipInput from 'material-ui-chip-input';
import { useDispatch, useSelector } from "react-redux";
import { fetchUserByRole, userDelete, userListUpdate, createTeamLeader, getTeamLeader } from "../../../../redux/Action/AuthAction";
import { createSeo, updateSeo } from "../../../../redux/Action/SeoAction";


export default function AddTeamLeader() {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const editor = useRef(null);
    const { seo } = useSelector(state => ({
        seo: state?.seo?.seo.filter(item => item._id == params.id)
    }));
    const [content, setContent] = useState(seo[0].description || "");
    const [focusKeyword, setFocusKeyword] = useState(seo[0]?.focus_keyword || []);
    const formik = useFormik({
        initialValues: {
            "title": seo[0].title || "",
            "url": seo[0].url || ""
        },
        onSubmit: values => {
            let _id = params?.id;
            values = { ...values, "description": content, "id": _id, "focus_keyword": focusKeyword }
            dispatch(updateSeo(values));
            navigate("/seo")
        },
    });
    const setChip = (chip) => {
        console.log(chip,"test");
        setFocusKeyword(chip);
    }
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Row className=" row-sm">
                    <Col lg={12} xl={12} md={12} sm={12}>
                        <Card>
                            <Card.Header>
                                < Card.Title as="h3">Add Seo</Card.Title>
                            </Card.Header>
                            <Col sm={12} lg={12} md={12} xl={12}>
                                <Card >
                                    <Row>
                                        <section>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <Row>
                                                        <Col className="sm-12 lg-4 md-4">
                                                            <label className="form-label">Title</label>
                                                            <input
                                                                type="text"
                                                                name="title"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.title}
                                                                placeholder='Title'
                                                                className="form-control"
                                                            />
                                                            {formik.errors.title && formik.touched.title ? (
                                                                <div style={{ color: "red" }}>{formik.errors.title}</div>
                                                            ) : null}
                                                        </Col>
                                                        <Col className="sm-12 lg-4 md-4">
                                                            <label className="form-label">URL</label>
                                                            <input
                                                                type="text"
                                                                name="url"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.url}
                                                                placeholder='URL'
                                                                className="form-control"
                                                            />
                                                            {formik.errors.url && formik.touched.url ? (
                                                                <div style={{ color: "red" }}>{formik.errors.url}</div>
                                                            ) : null}
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="sm-12 lg-12 md-12">
                                                            <label className="form-label">Focus Keyword</label>
                                                            <ChipInput
                                                                defaultValue={focusKeyword}
                                                                fullWidth
                                                                placeholder='Type and press enter to add focused keyword'
                                                                onChange={(chip) => setChip(chip)}
                                                            />
                                                            {formik.errors.focus_keyword && formik.touched.focus_keyword ? (
                                                                <div style={{ color: "red" }}>{formik.errors.focus_keyword}</div>
                                                            ) : null}
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="sm-12 lg-12 md-12">
                                                            <label className='fw-bold mt-5 '>Description</label>
                                                            <JoditEditor
                                                                ref={editor}
                                                                value={content}
                                                                onChange={(newContent) => setContent(newContent)}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Button type="submit" variant="primary" className="me-1 mt-5" >Submit</Button>
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
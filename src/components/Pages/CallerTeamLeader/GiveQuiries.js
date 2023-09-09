import React, { useEffect, useState, useRef } from "react";
import { useFormik } from "formik";
import '../../../App.css';
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
import { fetchMyTeam, fetchQuires,setQuires } from "../../../redux/Action/WebAction";
import * as Yup from "yup";

export default function AddTeamLeader() {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const editProfileSchema = Yup.object().shape({
        callerName: Yup.string().required(),
        query: Yup.string().required()
    })
    const { myTeam, queries } = useSelector(state => ({
        myTeam: state?.webSite?.myTeam?.filter((item) => item._id !== sessionStorage.getItem('userId')),
        queries: state?.webSite?.queries?.filter(item=> item.isAssigned == false)
    }));
    const formik = useFormik({
        initialValues: {
            "callerName": "",
            "query": ""
        },
        validationSchema: editProfileSchema,
        onSubmit: values => {
            dispatch( setQuires(values));
            navigate("/my-team");
        }
    });
    useEffect(() => {
        dispatch(fetchMyTeam(sessionStorage.getItem("name")));
        dispatch(fetchQuires());
    }, []);

    console.log('myTeam :',myTeam)
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
                                                            <label className="form-label">Caller</label>
                                                            <select name="callerName"
                                                                className="form-control"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.callerName}>
                                                                <option value="">Please select caller</option>
                                                                {myTeam.length > 0 ? myTeam.map((item) => { return <option value={item._id}>{item?.name}</option> }) : ""}
                                                            </select>
                                                            {formik.errors.callerName && formik.touched.callerName ? (
                                                                <div style={{ color: "red" }}>{formik.errors.callerName}</div>
                                                            ) : null}
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="sm-12 lg-4 md-4">
                                                            <label className="form-label">Quires</label>
                                                            <select
                                                                name="query"
                                                                className="form-control"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.query}>
                                                                <option value="">Please select queries</option>
                                                                {queries.length > 0 ? queries?.map((item) => { return <option value={item._id}>{item?.name}</option> }) : ""}
                                                            </select>
                                                            {formik.errors.query && formik.touched.query ? (
                                                                <div style={{ color: "red" }}>{formik.errors.query}</div>
                                                            ) : null}
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
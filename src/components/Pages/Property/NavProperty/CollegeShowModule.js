import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import * as datatable from "../../../../data/Table/datatable/datatable";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import PropertyDetails from "../PropertyDetails";
import { Card, Col, Row } from "react-bootstrap";
import { WarningModal } from "../../../Modal/WarningModal";
import { getCollegeList, getUniversityCourses, getUniversityCoursesForCollege } from "../../../../redux/Action/PropertyTypeAction";

const CollegeShowModule = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [universityCourseList, setUniversityCourseList] = useState([]);
    const { universityCourse, universityCoursesForCollege } = useSelector(state => ({
        users: state?.userAuth?.users,
        universityCourse: state?.universityCourse?.universityCourse?.filter(item => item?.universityID == params?.unrid),
        universityCoursesForCollege :state?.universityCourse?.universityCoursesForCollege,
    }));
    useEffect(() => {
        dispatch(getUniversityCourses());
        let requestData = { "universityData": params?.unrid, "collegeId": params?.clgid }
        dispatch(getUniversityCoursesForCollege(requestData));
    }, []);

    return (
        <>
            <PropertyDetails>
                <Row>
                    <Col>
                        <Card className="Relatedpost nested-media ">
                            <Card.Header>
                                <Card.Title>
                                    <h1 className="card-title">Choose Course</h1>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col lg={12} md={12} sm={12} xl={12}>
                                        <Row>
                                            {universityCoursesForCollege?.length > 0 ?
                                                universityCoursesForCollege.map((cors) => {
                                                    return (
                                                        <Col lg={6} md={12} sm={12} xl={4}>
                                                            <Card className="card overflow-hidden">
                                                                <NavLink to={`/property-list/${params?.clgid}/${cors._id}/addcollegecourse`}>
                                                                    <Card.Body className="card-body" style={{ background: "#FFA500" }} >
                                                                        <Row>
                                                                            <button className="btn btn-primary">{cors.full_name}</button>
                                                                        </Row>
                                                                    </Card.Body>
                                                                </NavLink>
                                                            </Card>
                                                        </Col>
                                                    )
                                                })
                                                : ""}
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </PropertyDetails>
        </>
    )
}

export default CollegeShowModule;
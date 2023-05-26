import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as datatable from "../../../../data/Table/datatable/datatable";
import { NavLink, useParams } from "react-router-dom";
import CountUp from "react-countup";
import PropertyDetails from "../PropertyDetails";
import { Card, Col, Row } from "react-bootstrap";
import { WarningModal } from "../../../Modal/WarningModal";
import { getCollegeList, getUniversityCourses } from "../../../../redux/Action/PropertyTypeAction";

const CollegeShowModule = () => {
    const dispatch = useDispatch();
    const params = useParams();
    console.log(params?.id);
    const [universityList, setUniversityList] = useState([]);
    const { users, college, tab_status, category, universityCourse, university } = useSelector(state => ({
        users: state?.userAuth?.users,
        category: state?.category?.category,
        college: state?.propertyType?.college,
        university: state?.propertyType?.college.filter(item => item?.edu_type == "University"),
        universityCourse: state?.universityCourse?.universityCourse.filter(item => item?.universityID == params?.unrid),
    }));
    console.log(params?.unrid,universityCourse,"universityCourse")
    useEffect(() => {
        dispatch(getCollegeList());
        dispatch(getUniversityCourses());
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
                                            {universityCourse?.length > 0 ?
                                                universityCourse.map((cors) => {
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
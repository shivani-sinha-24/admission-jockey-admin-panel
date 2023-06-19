import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as datatable from "../../../../data/Table/datatable/datatable";
import { NavLink, useParams } from "react-router-dom";
import CountUp from "react-countup";
import PropertyDetails from "../PropertyDetails";
import { Card, Col, Row } from "react-bootstrap";
import { WarningModal } from "../../../Modal/WarningModal";
import { getCollegeList } from "../../../../redux/Action/PropertyTypeAction";

const CollegeUniversityView = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const [universityList, setUniversityList] = useState([]);
    const { users, college, tab_status, category, university } = useSelector(state => ({
        users: state?.userAuth?.users,
        category: state?.category?.category,
        college: state?.propertyType?.college.filter(item => item?._id == params?.clgid),
        university: state?.propertyType?.college.filter(item => item?.edu_type == "University")
    }));
    useEffect(() => {
        dispatch(getCollegeList());
        let universityListForFetch = [];
        let temp = college[0]?.affilite_by[0].split(",");
        temp.map((unv) => {
            universityListForFetch.push({ name: unv });
        });
        var result = university.filter(function (o1) {
            return universityListForFetch.some(function (o2) {
                return o1.name === o2.name;       // assumes unique id
            });
        });
        if (result?.length > 0) {
            setUniversityList(result);
        }
    }, []);

    return (
        <>
            <PropertyDetails>
                <Row>
                    <Col>
                        <Card className="Relatedpost nested-media ">
                            <Card.Header>
                                <Card.Title>
                                    <h1 className="card-title">Choose University</h1>
                                </Card.Title>
                                <div className="ms-auto pageheader-btn">
                                    <NavLink to={`/property-list/${params?.clgid}/collegecourselist`} className="btn btn-primary btn-icon text-white me-3">
                                        {/* <span>
                                            <i className="fe fe-plus"></i>&nbsp;
                                        </span> */}
                                        Course List
                                    </NavLink>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col lg={12} md={12} sm={12} xl={12}>
                                        <Row>
                                            {universityList?.length > 0 ?
                                                universityList.map((unv) => {
                                                    return (
                                                        <Col lg={6} md={12} sm={12} xl={4}>
                                                            <NavLink to={`/property-list/${params?.clgid}/${unv?._id}/collegeshowModule`}>
                                                                <Card className="card overflow-hidden">
                                                                    <Card.Body className="card-body" style={{ background: "#FFA500" }} >
                                                                        <Row>
                                                                            <div className="col col-auto">
                                                                                <img
                                                                                    className="avatar avatar-xxl brround cover-image"
                                                                                    crossOrigin="annonymous"
                                                                                    src={`${process.env.REACT_APP_API_BASE_URL}/${unv?.image}`}
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                            <div className="col">
                                                                                <h6 className="">{`${unv?.name}(${unv?.est_year})`}</h6>
                                                                                <p className="number-font">
                                                                                    Contact no. : {unv?.phone}
                                                                                </p>
                                                                                <p className="text-muted mb-0">
                                                                                    Email :
                                                                                    <span className="text-success me-1">
                                                                                        <span> {unv?.email}</span>
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                        </Row>
                                                                    </Card.Body>
                                                                </Card>
                                                            </NavLink>
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

export default CollegeUniversityView;
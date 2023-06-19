import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as datatable from "../../../../data/Table/datatable/datatable";
import { NavLink, useParams } from "react-router-dom";
import PropertyDetails from "../PropertyDetails";
import { Card, Col, Row } from "react-bootstrap";
import { WarningModal } from "../../../Modal/WarningModal";
import { getCollegeCourses,collegeCourseDelete } from "../../../../redux/Action/PropertyTypeAction";

const Course = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { users, college, tab_status, category, universityCourse,collegeCourse } = useSelector(state => ({
        users: state?.userAuth?.users,
        category: state?.category?.category,
        collegeCourse: state?.collegeCourse?.collegeCourse.filter(item => item?.CollegeID == params?.clgid),
    }));
    const [deleteId, setDeleteId] = useState();
    const [show, setShow] = useState(false);
    const handleShow = (id) => () => {
        setDeleteId(id)
        setShow(true)
    };
    useEffect(() => {
        dispatch(getCollegeCourses());
    }, []);
    const handleStatusUpdate = (row) => () => {
        // dispatch(userUpdate(row?._id, { ...row, type: "property" }));
        // dispatch(getCollegeList())
    };

    const courseDeleteAction = (id) => {
    dispatch(collegeCourseDelete(deleteId));
    dispatch(getCollegeCourses())
    }
    return (
        <>
            <PropertyDetails>
                <Row>
                    <Col>
                        <Card className="Relatedpost nested-media ">
                            <Card.Header>
                                <Card.Title>
                                    <h1 className="card-title">Course List</h1>
                                </Card.Title>
                                {/* <div className="ms-auto pageheader-btn">
                                    <NavLink to={`/property-list/${params?.id}/adduniversitycourse`} className="btn btn-primary btn-icon text-white me-3">
                                        <span>
                                            <i className="fe fe-plus"></i>&nbsp;
                                        </span>
                                        Add Course
                                    </NavLink>
                                </div> */}
                            </Card.Header>
                            <Card.Body>
                                <datatable.CollegeCourseTable
                                    handleStatusUpdate={handleStatusUpdate}
                                    // universityId={params.id}
                                    clgid={params.clgid}
                                    handleShow={handleShow}
                                    universityCourse={collegeCourse} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <WarningModal setShow={setShow} propertyDeleteAction={courseDeleteAction} show={show} handleShow={handleShow} />
            </PropertyDetails>
        </>
    )
}

export default Course
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import PropertyDetails from "../PropertyDetails";
import { Card, Col, Row } from "react-bootstrap";




const Course = () => {
    const dispatch = useDispatch();

    return (
        <>
            <PropertyDetails>
                <Row>
                    <Col>
                        <Card className="Relatedpost nested-media ">
                            <Card.Header>
                                <Card.Title>
                                    <h1 className="card-title">Course</h1>
                                </Card.Title>
                                <div className="ms-auto pageheader-btn">
                                    <NavLink to="#" className="btn btn-primary btn-icon text-white me-3">
                                        <span>
                                            <i className="fe fe-plus"></i>&nbsp;
                                        </span>
                                        Add Course
                                    </NavLink>
                                </div>
                            </Card.Header>

                        </Card>
                    </Col>
                </Row>
            </PropertyDetails>
        </>
    )
}

export default Course
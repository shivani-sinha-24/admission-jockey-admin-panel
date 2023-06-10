import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { DropImg } from "../Property/StepForm/component/DropImg";
import { permission } from "../../../redux/Action/AuthAction";
import ReactSwitch from 'react-switch';


export default function Permission() {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const { users, college, tab_status } = useSelector(state => ({
        users: state?.userAuth?.users,
        college: state?.propertyType?.college.filter(item => item?._id == params.id),
        tab_status: state?.propertyType?.tab_status,
    }));
    const [checked, setChecked] = useState(true);
    const [universityCreate, setUniversityCreate] = useState(true);
    const [collegeCreate, setCollegeCreate] = useState(true);
    const [statusCreate, setStatusCreate] = useState(true);
    const [categoryCreate, setCategoryCreate] = useState(true);
    const [propertyTypeCreate, setPropertyTypeCreate] = useState(true);
    const [universityView, setUniversityView] = useState(true);
    const [collegeView, setCollegeView] = useState(true);
    const [statusView, setStatusView] = useState(true);
    const [categoryView, setCategoryView] = useState(true);
    const [proprtyTypeView, setPropertyTypeView] = useState(true);
    const [universityUpate, setUniversityUpate] = useState(true);
    const [collegeUpate, setCollegeUpate] = useState(true);
    const [statusUpate, setStatusUpate] = useState(true);
    const [categoryUpate, setCategoryUpate] = useState(true);
    const [propertyTypeUpate, setPropertyTypeUpate] = useState(true);
    const [universityDelete, setUniversityDelete] = useState(true);
    const [collegeDelete, setCollegeDelete] = useState(true);
    const [statusDelete, setStatusDelete] = useState(true);
    const [categoryDelete, setCategoryDelete] = useState(true);
    const [propertyTypeDelete, setPropertyTypeDelete] = useState(true);
    const handleSetUniversityCreate = val => {
        setUniversityCreate(val);
    };
    const handleSetUniversityView = val => {
        setUniversityView(val);
    };
    const handleSetStatusView = val => {
        setStatusView(val);
    };
    const handleSetUniversityUdpate = val => {
        setUniversityUpate(val);
    }
    const handleSetStatusUdpate = val => {
        setStatusUpate(val);
    }
    const handleSetUniversityDelete = val => {
        setUniversityDelete(val);
    }
    const handleSetStatusDelete = val => {
        setStatusDelete(val);
    }
    const handleSetCollegeCreate = val => {
        setCollegeCreate(val);
    };
    const handleSetProprtyTypeCreate = val => {
        setPropertyTypeCreate(val);
    };
    const handleSetStatusCreate = val => {
        setStatusCreate(val);
    };
    const handleSetCategoryCreate = val => {
        setCategoryCreate(val);
    };
    const handleSetCollegeView = val => {
        setCollegeView(val);
    };
    const handleSetPropertyTypeView = val => {
        setPropertyTypeView(val);
    };
    const handleSetCategoryView = val => {
        setCategoryView(val);
    };
    const handleSetCollegeUdpate = val => {
        setCollegeUpate(val);
    }
    const handleSetCategoryUdpate = val => {
        setCategoryUpate(val);
    }
    const handleSetPropertyTypeUdpate = val => {
        setPropertyTypeUpate(val);
    }
    const handleSetCollegeDelete = val => {
        setCollegeDelete(val);
    }
    const handleSetCategoryDelete = val => {
        setCategoryDelete(val);
    }
    const handleSetPropertyTypeDelete = val => {
        setPropertyTypeDelete(val);
    }
    let onSubmit = () => {
        let data = {
            "userId": params?.id,
            "universityCreate": universityCreate,
            "collegeCreate": collegeCreate,
            "statusCreate": statusCreate,
            "categoryCreate": categoryCreate,
            "propertyTypeCreate": propertyTypeCreate,
            "universityView": universityView,
            "collegeView": collegeView,
            "statusView": statusView,
            "categoryView": categoryView,
            "proprtyTypeView": proprtyTypeView,
            "universityUpate": universityUpate,
            "collegeUpate": collegeUpate,
            "statusUpate": statusUpate,
            "categoryUpate": categoryUpate,
            "propertyTypeUpate": propertyTypeUpate,
            "universityDelete": universityDelete,
            "collegeDelete": collegeDelete,
            "statusDelete": statusDelete,
            "categoryDelete": categoryDelete,
            "propertyTypeDelete": propertyTypeDelete
        }
        console.log("testdataa",data)
        dispatch(permission(data));
    }
    return (
        <div>
            {/* <form onSubmit={formik.handleSubmit}> */}
            <Row className=" row-sm">
                <Col lg={12} xl={12} md={12} sm={12}>
                    <Card>
                        <Card.Header>
                            < Card.Title as="h3">Permission</Card.Title>
                        </Card.Header>
                        <Col sm={12} lg={12} md={12} xl={12}>
                            <Card >
                                <Row>
                                    {/* <form> */}

                                    <table>
                                        <tr>
                                            <th>Name</th>
                                            <th>Create</th>
                                            <th>View</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                        <tr>
                                            <td>University Property</td>
                                            <td><ReactSwitch
                                                checked={universityCreate}
                                                onChange={handleSetUniversityCreate}
                                            /></td>
                                            <td><ReactSwitch
                                                checked={universityView}
                                                onChange={handleSetUniversityView}
                                            /></td>
                                            <td><ReactSwitch
                                                checked={universityUpate}
                                                onChange={handleSetUniversityUdpate}
                                            /></td>
                                            <td><ReactSwitch
                                                checked={universityDelete}
                                                onChange={handleSetUniversityDelete}
                                            /></td>
                                        </tr>
                                        <tr>
                                            <td>College Property</td>
                                            <td><ReactSwitch
                                                checked={collegeCreate}
                                                onChange={handleSetCollegeCreate}
                                            /></td>
                                            <td><ReactSwitch
                                                checked={collegeView}
                                                onChange={handleSetCollegeView}
                                            /></td>
                                            <td><ReactSwitch
                                                checked={collegeUpate}
                                                onChange={handleSetCollegeUdpate}
                                            /></td>
                                            <td><ReactSwitch
                                                checked={collegeDelete}
                                                onChange={handleSetCollegeDelete}
                                            /></td>
                                        </tr>
                                        <tr>
                                            <td>Status</td>
                                            <td><ReactSwitch
                                                checked={statusCreate}
                                                onChange={handleSetStatusCreate}
                                            /></td>
                                            <td><ReactSwitch
                                                checked={statusView}
                                                onChange={handleSetStatusView}
                                            /></td>
                                            <td><ReactSwitch
                                                checked={statusUpate}
                                                onChange={handleSetStatusUdpate}
                                            /></td>
                                            <td><ReactSwitch
                                                checked={statusDelete}
                                                onChange={handleSetStatusDelete}
                                            /></td>
                                        </tr>
                                        <tr>
                                            <td>Category</td>
                                            <td><ReactSwitch
                                                checked={categoryCreate}
                                                onChange={handleSetCategoryCreate}
                                            /></td>
                                            <td><ReactSwitch
                                                checked={categoryView}
                                                onChange={handleSetCategoryView}
                                            /></td>
                                            <td><ReactSwitch
                                                checked={categoryUpate}
                                                onChange={handleSetCategoryUdpate}
                                            /></td>
                                            <td><ReactSwitch
                                                checked={categoryDelete}
                                                onChange={handleSetCategoryDelete}
                                            /></td>
                                        </tr>
                                        <tr>
                                            <td>Property Type</td>
                                            <td><ReactSwitch
                                                checked={propertyTypeCreate}
                                                onChange={handleSetProprtyTypeCreate}
                                            /></td>
                                            <td><ReactSwitch
                                                checked={proprtyTypeView}
                                                onChange={handleSetPropertyTypeView}
                                            /></td>
                                            <td><ReactSwitch
                                                checked={propertyTypeUpate}
                                                onChange={handleSetPropertyTypeUdpate}
                                            /></td>
                                            <td><ReactSwitch
                                                checked={propertyTypeDelete}
                                                onChange={handleSetPropertyTypeDelete}
                                            /></td>
                                        </tr>
                                    </table>
                                    <div className="d-flex justify-content-end">
                                        <button className="btn btn-primary mt-2 " onClick={() => onSubmit()} >Submit</button>
                                    </div>
                                    {/* </form> */}
                                </Row>
                            </Card>
                        </Col>
                    </Card>
                </Col>
            </Row>
            {/* </form> */}

        </div>
    );
}
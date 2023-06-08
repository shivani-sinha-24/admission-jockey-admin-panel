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
import { fetchUserByRole, register, userUpdate } from "../../../redux/Action/AuthAction";
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
    const [universityView, setUniversityView] = useState(true);
    const [universityUpate, setUniversityUpate] = useState(true);
    const [universityDelete, setUniversityDelete] = useState(true);
    const handleSetUniversityCreate = val => {
        setUniversityCreate(val);
    };
    const handleSetUniversityView = val => {
        setUniversityView(val);
    };
    const handleSetUniversityUdpate = val => {
        setUniversityUpate(val);
    }
    const handleSetUniversityDelete = val => {
        setUniversityDelete(val);
    }
    const handleChange = val => {
        setChecked(val);
    }
    const formik = useFormik({
        initialValues: {
            "name": "",
            "email": "",
            "contact_no": "",
            "tab_status": "",
            "image": "",
            "role": 2,
        },
        onSubmit: values => {
            if (typeof values.image == 'object') {
                let formData = new FormData();
                for (let value in values) {
                    formData.append(value, values[value]);
                }
                dispatch(register(formData));
                navigate("/editor");
            } else {
                dispatch(register(values));
                navigate("/editor");
            }
        },
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Row className=" row-sm">
                    <Col lg={12} xl={12} md={12} sm={12}>
                        <Card>
                            <Card.Header>
                                < Card.Title as="h3">Permission</Card.Title>
                            </Card.Header>
                            <Col sm={12} lg={12} md={12} xl={12}>
                                <Card >
                                    <Row>
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
                                                    checked={checked}
                                                    onChange={handleChange}
                                                /></td>
                                                <td><ReactSwitch
                                                    checked={checked}
                                                    onChange={handleChange}
                                                /></td>
                                                <td><ReactSwitch
                                                    checked={checked}
                                                    onChange={handleChange}
                                                /></td>
                                                <td><ReactSwitch
                                                    checked={checked}
                                                    onChange={handleChange}
                                                /></td>
                                            </tr>
                                            <tr>
                                                <td>Status</td>
                                                <td><ReactSwitch
                                                    checked={checked}
                                                    onChange={handleChange}
                                                /></td>
                                                <td><ReactSwitch
                                                    checked={checked}
                                                    onChange={handleChange}
                                                /></td>
                                                <td><ReactSwitch
                                                    checked={checked}
                                                    onChange={handleChange}
                                                /></td>
                                                <td><ReactSwitch
                                                    checked={checked}
                                                    onChange={handleChange}
                                                /></td>
                                            </tr>
                                            <tr>
                                                <td>Category</td>
                                                <td><ReactSwitch
                                                    checked={checked}
                                                    onChange={handleChange}
                                                /></td>
                                                <td><ReactSwitch
                                                    checked={checked}
                                                    onChange={handleChange}
                                                /></td>
                                                <td><ReactSwitch
                                                    checked={checked}
                                                    onChange={handleChange}
                                                /></td>
                                                <td><ReactSwitch
                                                    checked={checked}
                                                    onChange={handleChange}
                                                /></td>
                                            </tr>
                                            <tr>
                                                <td>Property Type</td>
                                                <td><ReactSwitch
                                                    checked={checked}
                                                    onChange={handleChange}
                                                /></td>
                                                <td><ReactSwitch
                                                    checked={checked}
                                                    onChange={handleChange}
                                                /></td>
                                                <td><ReactSwitch
                                                    checked={checked}
                                                    onChange={handleChange}
                                                /></td>
                                                <td><ReactSwitch
                                                    checked={checked}
                                                    onChange={handleChange}
                                                /></td>
                                            </tr>
                                        </table>
                                        <div className="d-flex justify-content-end">
                                            <button className="btn btn-primary mt-2 " type="submit">Submit</button>
                                        </div>
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
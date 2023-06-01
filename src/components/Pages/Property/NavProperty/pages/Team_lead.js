import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    Col,
    Row,
    Card,
    Breadcrumb,
    Button,
} from "react-bootstrap";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { DropImg } from "../../StepForm/component/DropImg";
import * as Yup from 'yup';
import { createTeamLeader, getTeamLead, updateTeamLeader } from "../../../../../redux/Action/PropertyTypeAction";
import { ImagePreviewCard } from "../../../../Card/ImagePreviewCard";
import { TeamLeadImgPreviewCard } from "../../../../Card/TeamLeadImgPreviewCard";

export default function Team_lead({ setAddTeam, editTeam }) {
    const dispatch = useDispatch();
    const params = useParams()
    const { team_lead } = useSelector(state => ({
        team_lead: state?.property?.team_lead,
    }));

    useEffect(() => {
        dispatch(getTeamLead())
    }, [])
    
    // const [file, setFile] = useState("");
    // const [preview,setPreview] = useState(null)
    // const [fileDataURL, setFileDataURL] = useState(null);
    
    // console.log(team_lead);
    
    const TeamLeadvalSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        designation: Yup.string().required('Designation is required'),
    });
    
    const [editTeamLeadPic,setEditTeamLeadPic] = useState(editTeam?.image?true:false)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            "id": editTeam?._id || "",
            "property_id": params.clgid,
            "name": editTeam?.name || "",
            "designation": editTeam?.designation || "",
            "image": editTeam?.image || ""
        },
        validationSchema: TeamLeadvalSchema,
        onSubmit: values => {
            if (editTeam != undefined) {
                if (typeof values.image == 'object') {
                    let formData = new FormData();
                    for (let value in values) {
                        formData.append(value, values[value]);
                    }
                    dispatch(updateTeamLeader(formData));
                    setAddTeam(false)
                } else {
                    dispatch(updateTeamLeader(values));
                    setAddTeam(false)
                }
            } else {
                if (typeof values.image == 'object') {
                    let formData = new FormData();
                    for (let value in values) {
                        formData.append(value, values[value]);
                    }
                    dispatch(createTeamLeader(formData));
                    setAddTeam(false)
                } else {
                    dispatch(createTeamLeader(values));
                    setAddTeam(false)
                }
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
                                <Card.Title as="h3">Add Team Lead</Card.Title>
                            </Card.Header>
                            <Col sm={12} lg={12} md={12} xl={12}>
                                <Card >
                                    <Row>
                                        <section>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div >
                                                        <label className="form-label">Name</label>
                                                        <input
                                                            type="name"
                                                            className="form-control required"
                                                            placeholder="Name"
                                                            name="name"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.name}
                                                        />
                                                        {formik.errors.name && formik.touched.name ? (
                                                            <div style={{ color: "red" }}>{formik.errors.name}</div>
                                                        ) : null}
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="control-group form-group">
                                                <label className="form-label">Designation</label>
                                                <input
                                                    type="text"
                                                    className="form-control required"
                                                    placeholder="Designation"
                                                    name="designation"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.designation}
                                                />
                                                {formik.errors.designation && formik.touched.designation ? (
                                                    <div style={{ color: "red" }}>{formik.errors.designation}</div>
                                                ) : null}
                                            </div>
                                            
                                            {editTeamLeadPic
                                                ? 
                                                    <TeamLeadImgPreviewCard 
                                                    mage={editTeam?.image}   
                                                    setEditTeamLeadPic={setEditTeamLeadPic}/>
                                                    
                                                : 
                                                    <div className="control-group form-group mb-0 drop">
                                                        <label className="form-label">Team Leader Image</label>
                                                        <DropImg
                                                            type="file" className="dropify" imgtype="image"
                                                            formik={formik}
                                                        />
                                                    </div>
                                            }
                                            <Button type="submit" variant="primary" className="me-1" >Submit</Button>
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

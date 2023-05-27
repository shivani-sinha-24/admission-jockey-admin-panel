import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Col, Row, Card, Breadcrumb, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import JoditEditor from 'jodit-react';
import { DropImg } from "../../StepForm/component/DropImg";
import * as Yup from "yup";
import {
  createLoan,
  createTeamLeader,
  getLoan,
  getTeamLead,
  updateLoan,
  updateTeamLeader,
} from "../../../../../redux/Action/PropertyTypeAction";

export default function Loan_pages({ setAddTeam, editTeam }) {
  const dispatch = useDispatch();
  const params = useParams();
  const [content, setContent] = useState(editTeam?.description || "");
  const editor = useRef(null);

  const { loan } = useSelector((state) => ({
    loan: state?.propertyType?.loan,
  }));

  useEffect(() => {
    dispatch(getLoan());
  }, []);

  const TeamLeadvalSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: editTeam?._id || "",
      property_id: params?.clgid,
      title: editTeam?.title || ""
    },
    validationSchema: TeamLeadvalSchema,
    onSubmit: (values) => {
      values = { ...values, "description": content }
      if (editTeam != undefined) {
        // if (typeof values.loan_img == 'object') {
        //     let formData = new FormData();
        //     for (let value in values) {
        //         formData.append(value, values[value]);
        //     }
        //     dispatch(updateLoan(formData));
        //     setAddTeam(false)
        // } else {
        dispatch(updateLoan(values));
        setAddTeam(false);
        // }
      } else {
        // if (typeof values.loan_img == 'object') {
        //     let formData = new FormData();
        //     for (let value in values) {
        //         formData.append(value, values[value]);
        //     }
        //     dispatch(createLoan(formData));
        //     setAddTeam(false)
        // } else {
        dispatch(createLoan(values));
        setAddTeam(false);
        // }
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
                <Card.Title as="h3">Add Loan</Card.Title>
              </Card.Header>
              <Col sm={12} lg={12} md={12} xl={12}>
                <Card>
                  <Row>
                    <section>
                      <div className="row">
                        <div className="col-md-12">
                          <div>
                            <label className="form-label">Ttile</label>
                            <input
                              type="text"
                              className="form-control required"
                              placeholder="Name"
                              name="title"
                              onChange={formik.handleChange}
                              value={formik.values.title}
                            />
                            {formik.errors.title && formik.touched.title ? (
                              <div style={{ color: "red" }}>
                                {formik.errors.title}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="control-group form-group">
                        <label className="form-label">Description</label>
                        {/* <textarea
                          type="text"
                          className="form-control required"
                          placeholder="Description"
                          name="description"
                          onChange={formik.handleChange}
                          value={formik.values.description}
                        /> */}
                        <JoditEditor
                          ref={editor}
                          value={content}
                          onChange={newContent => setContent(newContent)}
                        />
                        {formik.errors.description &&
                          formik.touched.description ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.description}
                          </div>
                        ) : null}
                      </div>
                      {/* <div className="control-group form-group mb-0 drop">
                                                <label className="form-label">Loan Image</label>
                                                <DropImg
                                                    type="file" className="dropify" imgtype="loan_img"
                                                    formik={formik}
                                                />
                                            </div> */}

                      <Button type="submit" variant="primary" className="me-1">
                        Submit
                      </Button>
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

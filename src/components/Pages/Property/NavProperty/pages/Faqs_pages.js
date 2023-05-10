import React, { useEffect, useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Col, Row, Card, Breadcrumb, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { DropImg } from "../../StepForm/component/DropImg";
import * as Yup from "yup";
import {
  createFaqs,
  createTeamLeader,
  getFaqs,
  getTeamLead,
  updateFaqs,
  updateTeamLeader,
} from "../../../../../redux/Action/PropertyTypeAction";

export default function Faqs_pages({ setAddTeam, editTeam }) {
  const dispatch = useDispatch();
  const params = useParams();

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const { faqs } = useSelector((state) => ({
    faqs: state?.property?.faqs,
  }));

  console.log(faqs, "faqs");
  useEffect(() => {
    dispatch(getFaqs());
  }, []);

  const TeamLeadvalSchema = Yup.object().shape({
    ques: Yup.string().required("Question is required"),
    answer: Yup.string().required("Answer is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: editTeam?._id || "",
      property_id: params.id,
      ques: editTeam?.ques || "",
      answer: editTeam?.answer || "",
    },
    validationSchema: TeamLeadvalSchema,
    onSubmit: (values) => {
      console.log(values, "dfjhgjahgjdh");
      if (editTeam != undefined) {
        dispatch(updateFaqs(values));
        setAddTeam(false);
      } else {
        dispatch(createFaqs(values));
        setAddTeam(false);
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
                <Card.Title as="h3">Add Faqs</Card.Title>
              </Card.Header>
              <Col sm={12} lg={12} md={12} xl={12}>
                <Card>
                  <Row>
                    <section>
                      <div className="row">
                        <div className="col-md-12">
                          <div>
                            <label className="form-label">Question</label>
                            <input
                              type="text"
                              className="form-control required"
                              placeholder="Question"
                              name="ques"
                              onChange={formik.handleChange}
                              value={formik.values.ques}
                            />
                            {formik.errors.ques && formik.touched.ques ? (
                              <div style={{ color: "red" }}>
                                {formik.errors.ques}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="control-group form-group">
                        <label className="form-label">Answer</label>
                        {/* <input
                                                    type="text"
                                                    className="form-control required"
                                                    placeholder="Answer"
                                                    name="answer"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.answer}
                                                /> */}
                        <JoditEditor
                          ref={editor}
                          value={content}
                          onChange={(newContent) => setContent(newContent)}
                        />
                        {formik.errors.answer && formik.touched.answer ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.answer}
                          </div>
                        ) : null}
                      </div>

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

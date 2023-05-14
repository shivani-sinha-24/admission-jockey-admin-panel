import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { createProperty } from "../../../redux/Action/PropertyAction";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, useNavigate, Routes, Route, NavLink } from "react-router-dom";
import { getCollegeList } from "../../../redux/Action/PropertyTypeAction";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";

import {
  Col,
  Row,
  Card,
  Breadcrumb
} from "react-bootstrap";
import validator from "validator";
// import { DropImg } from "../../StepForm/component/DropImg";
import { DropImg } from "../../../components/Pages/Property/StepForm/component/DropImg";


//WizardForm
function Name({ nextStep, handleFormData, values }) {
  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(values.email) ||
      validator.isEmpty(values.phonenumber) ||
      validator.isEmpty(values.website)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Form onSubmit={submitFormData}>
        <Row className=" row-sm mt-5">
          <Col lg={12} xl={12} md={12} sm={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Add Property Details</Card.Title>
              </Card.Header>
              <Col sm={12} lg={12} md={12} xl={12}>
                <Row>
                  <section>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            style={{ border: error ? "2px solid #ff0000" : "" }}
                            name="email"
                            defaultValue={values.email}
                            type="text"
                            placeholder="Email"
                            onChange={handleFormData("email")}
                          />
                          {error ? (
                            <Form.Text style={{ color: "#ff0000" }}>
                              This is a required field
                            </Form.Text>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group className="">
                          <Form.Label>Website</Form.Label>
                          <Form.Control
                            style={{ border: error ? "2px solid #ff0000" : "" }}
                            name="website"
                            defaultValue={values.website}
                            type="text"
                            placeholder="Website"
                            onChange={handleFormData("website")}
                          />
                          {error ? (
                            <Form.Text style={{ color: "#ff0000" }}>
                              This is a required field
                            </Form.Text>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group className="">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            style={{ border: error ? "2px solid #ff0000" : "" }}
                            name="phonenumber"
                            pattern="[789][0-9]{9}"
                            defaultValue={values.phonenumber}
                            type="text"
                            placeholder="Phone Number"
                            onChange={handleFormData("phonenumber")}
                          />
                          {error ? (
                            <Form.Text style={{ color: "#ff0000" }}>
                              This is a required field
                            </Form.Text>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Button type="submit" className="mb-5">
                          Continue
                        </Button>
                      </div>
                    </div>
                  </section>
                </Row>
              </Col>
            </Card>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
function StepTwo({ nextStep, handleFormData, prevStep, values }) {

  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();
    if (validator.isEmpty(values.type) || validator.isEmpty(values.name) || validator.isEmpty(values.shortName) || validator.isEmpty(values.estyr) || validator.isEmpty(values.affilatedBy) || validator.isEmpty(values.aprovedBy)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <div>
      <Form onSubmit={submitFormData}>
        <Row className=" row-sm mt-3">
          <Col lg={12} xl={12} md={12} sm={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Add Property Details</Card.Title>
              </Card.Header>
              <Col sm={12} lg={12} md={12} xl={12}>
                <Row>
                  <section>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="mb-3">
                          <Form.Label>Type</Form.Label>
                          <Form.Select
                            style={{ border: error ? "2px solid red" : "" }}
                            onChange={handleFormData("type")}>
                            <option >Select Type</option>
                            <option value="University">University</option>
                            <option value="College">College</option>
                          </Form.Select>
                          {error ? (
                            <Form.Text style={{ color: "red" }}>
                              This is a required field
                            </Form.Text>
                          ) : (
                            ""
                          )}
                        </Form.Group>

                        <div className="row d-flex">
                          <div className="col-md-6">
                            <Form.Group className="mb-3">
                              <Form.Label>Name</Form.Label>
                              <Form.Control
                                style={{ border: error ? "2px solid red" : "" }}
                                type="text"
                                placeholder="Name"
                                onChange={handleFormData("name")}
                              />
                              {error ? (
                                <Form.Text style={{ color: "red" }}>
                                  This is a required field
                                </Form.Text>
                              ) : (
                                ""
                              )}
                            </Form.Group>
                          </div>
                          <div className="col-md-6">
                            <Form.Group className="mb-3">
                              <Form.Label>Short Name</Form.Label>
                              <Form.Control
                                style={{ border: error ? "2px solid red" : "" }}
                                type="text"
                                placeholder="Short Name"
                                onChange={handleFormData("shortName")}
                              />
                              {error ? (
                                <Form.Text style={{ color: "red" }}>
                                  This is a required field
                                </Form.Text>
                              ) : (
                                ""
                              )}
                            </Form.Group>
                          </div>
                        </div>
                        <Form.Group className="mb-3">
                          <Form.Label>Est. Year</Form.Label>
                          <Form.Control
                            style={{ border: error ? "2px solid #ff0000" : "" }}
                            name="estyr"
                            defaultValue={values.estyr}
                            pattern="^(19|20)\d{2}$"
                            type="number"
                            placeholder="1900-2050"
                            onChange={handleFormData("estyr")}
                          />
                          {error ? (
                            <Form.Text style={{ color: "#ff0000" }}>
                              This is a required field
                            </Form.Text>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Approved By</Form.Label>
                          <Form.Control
                            style={{ border: error ? "2px solid #ff0000" : "" }}
                            name="aprovedBy"
                            defaultValue={values.aprovedBy}
                            type="text"
                            placeholder="aprovedBy"
                            onChange={handleFormData("aprovedBy")}
                          />
                          {error ? (
                            <Form.Text style={{ color: "#ff0000" }}>
                              This is a required field
                            </Form.Text>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Affilated By</Form.Label>
                          <Form.Control
                            style={{ border: error ? "2px solid #ff0000" : "" }}
                            name="affilatedBy"
                            defaultValue={values.affilatedBy}
                            type="text"
                            placeholder="affilatedBy"
                            onChange={handleFormData("affilatedBy")}
                          />
                          {error ? (
                            <Form.Text style={{ color: "#ff0000" }}>
                              This is a required field
                            </Form.Text>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <div>
                          <Button className="float-start mb-5" onClick={prevStep}>
                            Previous
                          </Button>

                          <Button className="float-end mb-5" type="submit">
                            Continue
                          </Button>
                        </div>
                      </div>
                    </div>
                  </section>
                </Row>
              </Col>
            </Card>
          </Col>
        </Row>
        {/* <h1 style={{ fontSize: "5 rem", fontWeight: "600" }}> Add Property Details</h1> */}
      </Form>
    </div>
  );
};
function ThirdStep({ nextStep, handleFormData, prevStep, values }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      "email": values.email || "",
      "phone": values.phonenumber || "",
      "website": values.website || "",
      "edu_type": values.type || "",
      "college_type": "Gov",
      "name": values.name || "",
      "short_name": values.shortName || "",
      "est_year": values.estyr || "",
      "approve_by": values.aprovedBy || "",
      "affilite_by": values.affilatedBy || "",
      "image": ""
    },
    onSubmit: values => {
      if (typeof values.image == 'object') {
        let formData = new FormData();
        for (let value in values) {
          formData.append(value, values[value]);
        }
        dispatch(createProperty(formData));
        dispatch(getCollegeList())
        document.getElementById("propertyList").click();
        window.location.reload(false);
      } else {
        dispatch(createProperty(values));
        dispatch(getCollegeList())
        document.getElementById("propertyList").click();
        window.location.reload(false);
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
                <Card.Title as="h3">Add Property Details</Card.Title>
              </Card.Header>
              <Col sm={12} lg={12} md={12} xl={12}>
                <Row>
                  <section>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="">
                          <div className="control-group form-group mb-0 drop">
                            <label className="form-label">Logo</label>
                            <DropImg
                              type="file" className="dropify" imgtype="image"
                              formik={formik}
                            />
                          </div>
                        </Form.Group>
                        <div >
                          <Button className="float-start mb-5" onClick={prevStep}>
                            Previous
                          </Button>
                          <Button className="float-end" type="submit">
                            Continue
                          </Button>
                          <NavLink
                            to={`/property-list`}
                            id="propertyList"
                            disabled
                          ></NavLink>
                        </div>
                      </div>
                    </div>
                  </section>
                </Row>
              </Col>
            </Card>
          </Col>
        </Row>
      </form>
    </div>
  );
}
// function Final({ values }) {
//   const dispatch = useDispatch();
//   // const { email, phonenumber, website, type, name, shortName, estyr, aprovedBy, affilatedBy, logo } = values;
//   // let data = {
//   //   "email": email,
//   //   "phone": phonenumber,
//   //   "website": website,
//   //   "edu_type": type,
//   //   "college_type": "Gov",
//   //   "name": name,
//   //   "short_name": shortName,
//   //   "est_year": estyr,
//   //   "approve_by": aprovedBy,
//   //   "affilite_by": affilatedBy,
//   //   "logo":logo
//   // };
//   if (typeof values.logo == 'object') {
//     let formData = new FormData();
//     for (let value in values) {
//       formData.append(value, values[value]);
//     }
//     dispatch(createProperty(formData));
//     dispatch(getCollegeList())
//     document.getElementById("propertyList").click();
//     window.location.reload(false);
//   } else {
//     dispatch(createProperty(values));
//     dispatch(getCollegeList())
//     document.getElementById("propertyList").click();
//     window.location.reload(false);
//   }
// };

export function PropertyAdd() {
  const [step, setstep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    phonenumber: "",
    type: "",
    name: "",
    shortName: "",
    estyr: "",
    affilatedBy: "",
    aprovedBy: ""
  })
  const nextStep = () => {
    setstep(step + 1);
  };
  const prevStep = () => {
    setstep(step - 1);
  };
  const handleInputData = input => e => {
    const { value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }));
  }
  switch (step) {
    case 1:
      return (
        <div className="custom-margin">
          <Name nextStep={nextStep} handleFormData={handleInputData} values={formData} />
        </div>
      );
    case 2:
      return (
        <div className="custom-margin">
          <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
        </div>
      );
    default:
      return (
        <div className="custom-margin">
          <ThirdStep nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
        </div>
      )
  }
}
//End
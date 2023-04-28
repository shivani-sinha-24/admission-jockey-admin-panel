import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Col, Form, Row, } from "react-bootstrap";
import validator from "validator";
import StepZilla from "react-stepzilla";

//WizardForm
function Name({ nextStep, handleFormData, values }) {
  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Form onSubmit={submitFormData}>
        <Form.Group className="">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            style={{ border: error ? "2px solid #6259ca" : "" }}
            name="firstName"
            defaultValue={values.firstName}
            type="text"
            placeholder="First Name"
            onChange={handleFormData("firstName")}
          />
          {error ? (
            <Form.Text style={{ color: "#6259ca" }}>
              This is a required field
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group className="">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            style={{ border: error ? "2px solid #6259ca" : "" }}
            name="lastName"
            defaultValue={values.lastName}
            type="text"
            placeholder="Last Name"
            onChange={handleFormData("lastName")}
          />
          {error ? (
            <Form.Text style={{ color: "#6259ca" }}>
              This is a required field
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <Button type="submit">
          Continue
        </Button>
      </Form>
    </div>
  );
}
function StepTwo({ nextStep, handleFormData, prevStep, values }) {

  const [error, setError] = useState(false);


  const submitFormData = (e) => {
    e.preventDefault();


    if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <div>
      <Form onSubmit={submitFormData}>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            style={{ border: error ? "2px solid red" : "" }}
            type="number"
            placeholder="Age"
            onChange={handleFormData("age")}
          />
          {error ? (
            <Form.Text style={{ color: "red" }}>
              This is a required field
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            style={{ border: error ? "2px solid red" : "" }}
            type="email"
            placeholder="email"
            onChange={handleFormData("email")}
          />
          {error ? (
            <Form.Text style={{ color: "red" }}>
              This is a required field
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <div >
          <Button className="float-start" onClick={prevStep}>
            Previous
          </Button>

          <Button className="float-end" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
function Final({ values }) {


  const { firstName, lastName, age, email } = values;
  return (

    <div style={{ textAlign: "left" }}>
      <div>
        <p>
          <strong>First Name :</strong> {firstName}
        </p>
        <p>
          <strong>Last Name :</strong> {lastName}
        </p>
        <p>
          <strong>Age :</strong> {age}
        </p>
        <p>
          <strong>Email :</strong> {email}
        </p>
      </div>
    </div>

  );
};
export function WizardForm() {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: ""
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

    default:
      return (

        <div className="custom-margin">
          <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
        </div>
      );

    case 3:
      return (
        <div className="">
          <div className="custom-margin">
            <Final values={formData} />
          </div>
        </div>


      );


  }
}
//End

//BasicContentWizard
export const BasicContentWizard = () => {
  const [goSteps, setGoSteps] = useState(0);

  return (
    <div>
      <Stepper activeStep={goSteps}>
        <Step onClick={() => setGoSteps(0)} label="Personal Information" />
        <Step onClick={() => setGoSteps(1)} label="Billing Information" />
        <Step onClick={() => setGoSteps(2)} label="Payment Details" />
      </Stepper>
      {goSteps === 0 && (
        <div>
          <h3>Contact Details</h3>
          <section>

            <div className="row">
              <div className="col-md-6">
                <div >
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control required"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div >
                  <label className="form-label">Verify</label>
                  <input
                    type="email"
                    className="form-control required"
                    placeholder="Email Address"
                  />
                </div>
              </div>

            </div>
            <div className="control-group form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control required"
                placeholder="Number"
              />
            </div>
            <div className="control-group form-group mb-0">
              <label className="form-label">Website</label>
              <input
                type="text"
                className="form-control required"
                placeholder="Address"
              />
            </div>
          </section>
          <button
            className="btn btn-primary mt-2 float-end"
            onClick={() => setGoSteps(1)}
          >
            Next
          </button>
          <button
            className="btn btn-primary mt-2 float-start"
            onClick={() => setGoSteps(0)}
            disabled
          >
            Previous
          </button>
        </div>
      )}
      {goSteps === 1 && (
        <div>
          <h3>College/University Details</h3>
          <section>

            <div className="control-group form-group">
              <label className="form-label">Type</label>
              <select
                // onChange={formik.handleChange}
                // value={formik.values.status_for}
                className="form-control required"
                name="status_for" id="role">
                <option >Select</option>
                <option value="0">User</option>
                <option value="1">Colleges</option>

              </select>
            </div>
            <div className="control-group form-group">
              <label className="form-label">College Type</label>
              <Row className="row row-sm">
                <Col className="col-md-4">
                  <label className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="example-radios"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <span className="custom-control-label">Private</span>
                  </label>
                </Col>
                <Col className="col-lg-4">
                  <label className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="example-radios"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <span className="custom-control-label">Government</span>
                  </label>
                </Col>
                <Col className="col-lg-4">
                  <label className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="example-radios"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <span className="custom-control-label">Semi-Government</span>
                  </label>
                </Col>
              </Row>



            </div>
            <div className="control-group form-group mb-0">
              <Row className="row row-sm">
                <Col className="col-md-6">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control required"
                    placeholder="Name"
                  />
                </Col>
                <Col className="col-md-6">
                  <label className="form-label">Short Name</label>
                  <input
                    type="text"
                    className="form-control required"
                    placeholder="Short Name"
                  />
                </Col>
              </Row>
            </div>
            <div className="control-group form-group mb-0">
              <Row className="row row-sm">
                <Col className="col-md-6">
                  <label className="form-label">Est. Year</label>
                  <input
                    type="text"
                    className="form-control required"
                    placeholder="Est. Year"
                  />
                </Col>
                <Col className="col-md-6">
                  <label className="form-label">Approve By</label>
                  <input
                    type="text"
                    className="form-control required"
                    placeholder="Approve By"
                  />
                </Col>
              </Row>
            </div>
            <div className="form-group">
              <label className="form-label">Affiliated By</label>
              <input
                type="text"
                className="form-control"
                id="name1"
                placeholder="Affiliated By"
              />
            </div>
          </section>
          <button
            className="btn btn-primary mt-2 float-end"
            onClick={() => setGoSteps(2)}
          >
            Next
          </button>
          <button
            className="btn btn-primary mt-2 float-start"
            onClick={() => setGoSteps(0)}
            disabled
          >
            Previous
          </button>
        </div>
      )}
      {goSteps === 2 && (<div>
        <h3>College/University Details</h3>
        <section>


          <div className="control-group form-group mb-0">
            <Row className="row row-sm">
              <Col className="col-md-6">
                <label className="form-label">Logo</label>
                <div style={{ width: "180px", height: "165px", border: "1px solid black", marginBottom: "5px" }}></div>
                <div className="input-group mb-5 file-browser">

                  <input
                    type="text"
                    className="form-control browse-file"
                    placeholder="Choose"
                    readOnly
                  // onClick={() => sweetalerts.Infoalertbutton()}
                  />
                  <Form.Label className="input-group-text btn btn-primary mt-0">
                    Browse
                    <input
                      type="file"
                      className="file-browserinput"
                      style={{ display: "none" }}
                      multiple
                    />
                  </Form.Label>
                </div>
              </Col>
              <Col className="col-md-6">
                <label className="form-label">Featured Image</label>
                <div style={{ width: "180px", height: "165px", border: "1px solid black", marginBottom: "5px" }}></div>
                <div className="input-group mb-5 file-browser">
                  <input
                    type="text"
                    className="form-control browse-file"
                    placeholder="Choose"
                    readOnly
                  //onClick={() => sweetalerts.Infoalertbutton()}
                  />
                  <Form.Label className="input-group-text btn btn-primary mt-0">
                    Browse
                    <input
                      type="file"
                      className="file-browserinput"
                      style={{ display: "none" }}
                      multiple
                    />
                  </Form.Label>
                </div>
              </Col>
            </Row>
          </div>
          <div className="control-group form-group mb-0">
            <Row className="row row-sm">
              <Col className="col-md-6">
                <label className="form-label">Broucher</label>
                <div className="input-group mb-5 file-browser">
                  <input
                    type="text"
                    className="form-control browse-file"
                    placeholder="Choose"
                    readOnly
                  //onClick={() => sweetalerts.Infoalertbutton()}
                  />
                  <Form.Label className="input-group-text btn btn-primary mt-0">
                    Browse
                    <input
                      type="file"
                      className="file-browserinput"
                      style={{ display: "none" }}
                      multiple
                    />
                  </Form.Label>
                </div>
              </Col>
              <Col className="col-md-6">
                <label className="form-label">Info Video Link</label>
                <input
                  type="text"
                  className="form-control required"
                  placeholder="Approve By"
                />
              </Col>
            </Row>
          </div>
          <div className="form-group">
            <Row className="row row-sm">
              <Col className="col-md-6">
                <label className="form-label">Podcast Lang.</label>
                <div className="input-group mb-5 file-browser">
                  <input
                    type="text"
                    className="form-control browse-file"
                    placeholder="Choose"
                    readOnly
                  //onClick={() => sweetalerts.Infoalertbutton()}
                  />
                  <Form.Label className="input-group-text btn btn-primary mt-0">
                    Browse
                    <input
                      type="file"
                      className="file-browserinput"
                      style={{ display: "none" }}
                      multiple
                    />
                  </Form.Label>
                </div>
              </Col>
              <Col className="col-md-6">
                <label className="form-label">Application Link</label>
                <input
                  type="text"
                  className="form-control required"
                  placeholder="Approve By"
                />
              </Col>
            </Row>
          </div>
        </section>
        <button
          className="btn btn-primary mt-2 float-end"
          onClick={() => setGoSteps(0)}
        >
          Finish
        </button>
        <button
          className="btn btn-primary mt-2 float-start"
          onClick={() => setGoSteps(1)}
          disabled
        >
          Previous
        </button>
      </div>)}
    </div>
  );
};
//End

//Formwizard
function getSteps() {
  return ["Personal Information", "Billing Information", "Payment Details"];
}
function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div id="step-10" className="">
          <form>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail6"
                placeholder="Enter email address"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="passwsord"
                className="form-control"

                placeholder="Password"
              />
            </div>
            <div className="form-group mb-0 justify-content-end">
              <div className="">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                  />
                  <span className="custom-control-label">Check me Out</span>
                </label>
              </div>
            </div>
          </form>
        </div>
      );
    case 1:
      return (
        <div id="step-11" className="">
          <form>
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                id="inputtext"
                placeholder="Enter User Name"
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail8"
                placeholder="Enter Your Number"
              />
            </div>
            <div className="form-group mb-0 justify-content-end">
              <div className="">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                  />
                  <span className="custom-control-label">Check me Out</span>
                </label>
              </div>
            </div>
          </form>
        </div>
      );
    case 2:
      return (
        <div id="step-12" className="">
          <div className="form-group mb-0 justify-content-end">
            <div className="">
              <label className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="example-checkbox2"
                  value="option2"
                />
                <span className="custom-control-label">
                  I agree terms & Conditions
                </span>
              </label>
            </div>
          </div>
        </div>
      );
    default:
      return "unknown step";
  }
}
export function Formwizard() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const isStepOptional = (step) => {
    return step === 1;
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = "";
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            All steps completed
            <Button onClick={handleReset} className="float-end">
              Reset
            </Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>

              <Button
                variant="contained"
                className="float-end"
                color="primary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
//End

//VerticalOrientationWizard
const steps = [
  {
    label: "Contact Details",
    description: (
      <> <section>
        <div className="row">
          <div className="col-md-12">
            <div >
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control required"
                placeholder="Email Address"
              />
            </div>
          </div>
          {/* <div className="col-md-6">
            <div >
              <label className="form-label">Verify</label>
              <input
                type="email"
                className="form-control required"
                placeholder="Email Address"
              />
            </div>
          </div> */}

        </div>
        <div className="control-group form-group">
          <label className="form-label">Phone Number</label>
          <input
            type="number"
            className="form-control required"
            placeholder="Number"
          />
        </div>
        <div className="control-group form-group mb-0">
          <label className="form-label">Website</label>
          <input
            type="text"
            className="form-control required"
            placeholder="Address"
          />
        </div>
      </section></>
    ),
  },
  {
    label: "College/University Details",
    description: (
      <div>
        <h3>College/University Details</h3>
        <section>

          <div className="control-group form-group">
            <label className="form-label">Type</label>
            <select
              // onChange={formik.handleChange}
              // value={formik.values.status_for}
              className="form-control required"
              name="status_for" id="role">
              <option >Select</option>
              <option value="0">User</option>
              <option value="1">Colleges</option>

            </select>
          </div>
          <div className="control-group form-group">
            <label className="form-label">College Type</label>
            <Row className="row row-sm">
              <Col className="col-md-4">
                <label className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="example-radios"
                    defaultValue="option1"
                    defaultChecked
                  />
                  <span className="custom-control-label">Private</span>
                </label>
              </Col>
              <Col className="col-lg-4">
                <label className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="example-radios"
                    defaultValue="option1"
                    defaultChecked
                  />
                  <span className="custom-control-label">Government</span>
                </label>
              </Col>
              <Col className="col-lg-4">
                <label className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="example-radios"
                    defaultValue="option1"
                    defaultChecked
                  />
                  <span className="custom-control-label">Semi-Government</span>
                </label>
              </Col>
            </Row>



          </div>
          <div className="control-group form-group mb-0">
            <Row className="row row-sm">
              <Col className="col-md-6">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control required"
                  placeholder="Name"
                />
              </Col>
              <Col className="col-md-6">
                <label className="form-label">Short Name</label>
                <input
                  type="text"
                  className="form-control required"
                  placeholder="Short Name"
                />
              </Col>
            </Row>
          </div>
          <div className="control-group form-group mb-0">
            <Row className="row row-sm">
              <Col className="col-md-6">
                <label className="form-label">Est. Year</label>
                <input
                  type="text"
                  className="form-control required"
                  placeholder="Est. Year"
                />
              </Col>
              <Col className="col-md-6">
                <label className="form-label">Approve By</label>
                <input
                  type="text"
                  className="form-control required"
                  placeholder="Approve By"
                />
              </Col>
            </Row>
          </div>
          <div className="form-group">
            <label className="form-label">Affiliated By</label>
            <input
              type="text"
              className="form-control"
              id="name1"
              placeholder="Affiliated By"
            />
          </div>
        </section>

      </div>
    ),
  },
  {
    label: "Other Details ",
    description: (<section>


      <div className="control-group form-group mb-0">
        <Row className="row row-sm">
          <Col className="col-md-6">
            <label className="form-label">Logo</label>
            <div style={{ width: "180px", height: "165px", border: "1px solid black", marginBottom: "5px" }}></div>
            <div className="input-group mb-5 file-browser">

              <input
                type="text"
                className="form-control browse-file"
                placeholder="Choose"
                readOnly
              // onClick={() => sweetalerts.Infoalertbutton()}
              />
              <Form.Label className="input-group-text btn btn-primary mt-0">
                Browse
                <input
                  type="file"
                  className="file-browserinput"
                  style={{ display: "none" }}
                  multiple
                />
              </Form.Label>
            </div>
          </Col>
          <Col className="col-md-6">
            <label className="form-label">Featured Image</label>
            <div style={{ width: "180px", height: "165px", border: "1px solid black", marginBottom: "5px" }}></div>
            <div className="input-group mb-5 file-browser">
              <input
                type="text"
                className="form-control browse-file"
                placeholder="Choose"
                readOnly
              //onClick={() => sweetalerts.Infoalertbutton()}
              />
              <Form.Label className="input-group-text btn btn-primary mt-0">
                Browse
                <input
                  type="file"
                  className="file-browserinput"
                  style={{ display: "none" }}
                  multiple
                />
              </Form.Label>
            </div>
          </Col>
        </Row>
      </div>
      <div className="control-group form-group mb-0">
        <Row className="row row-sm">
          <Col className="col-md-6">
            <label className="form-label">Broucher</label>
            <div className="input-group mb-5 file-browser">
              <input
                type="text"
                className="form-control browse-file"
                placeholder="Choose"
                readOnly
              //onClick={() => sweetalerts.Infoalertbutton()}
              />
              <Form.Label className="input-group-text btn btn-primary mt-0">
                Browse
                <input
                  type="file"
                  className="file-browserinput"
                  style={{ display: "none" }}
                  multiple
                />
              </Form.Label>
            </div>
          </Col>
          <Col className="col-md-6">
            <label className="form-label">Info Video Link</label>
            <input
              type="text"
              className="form-control required"
              placeholder="Approve By"
            />
          </Col>
        </Row>
      </div>
      <div className="form-group">
        <Row className="row row-sm">
          <Col className="col-md-6">
            <label className="form-label">Podcast Lang.</label>
            <div className="input-group mb-5 file-browser">
              <input
                type="text"
                className="form-control browse-file"
                placeholder="Choose"
                readOnly
              //onClick={() => sweetalerts.Infoalertbutton()}
              />
              <Form.Label className="input-group-text btn btn-primary mt-0">
                Browse
                <input
                  type="file"
                  className="file-browserinput"
                  style={{ display: "none" }}
                  multiple
                />
              </Form.Label>
            </div>
          </Col>
          <Col className="col-md-6">
            <label className="form-label">Application Link</label>
            <input
              type="text"
              className="form-control required"
              placeholder="Approve By"
            />
          </Col>
        </Row>
      </div>
    </section>),
  },
];

export function VerticalOrientationWizard() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? <Typography variant="caption"></Typography> : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div className="buts">
                  <Button
                    className="me-2 mt-2"

                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    className="me-2 mt-2"
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>&nbsp;&nbsp;
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button
            className="me-2 resets mt-2"
            onClick={handleReset}
            sx={{ mt: 1, mr: 1 }}
          >
            Reset
          </Button>&nbsp;&nbsp;
        </Paper>
      )}
    </Box>
  );
}
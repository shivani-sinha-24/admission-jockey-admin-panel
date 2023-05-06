import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { createProperty } from "../../../redux/Action/PropertyAction";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, useNavigate, Routes, Route, NavLink } from "react-router-dom";
import { getCollegeList } from "../../../redux/Action/PropertyTypeAction";
import { Form } from "react-bootstrap";
import validator from "validator";

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
        <h1 style={{ fontSize: "5 rem", fontWeight: "600" }}> Add Property Details</h1>
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
    if (validator.isEmpty(values.type) || validator.isEmpty(values.name) || validator.isEmpty(values.shortName) || validator.isEmpty(values.estyr) || validator.isEmpty(values.affilatedBy) || validator.isEmpty(values.aprovedBy)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <div>
      <Form onSubmit={submitFormData}>
        <h1 style={{ fontSize: "5 rem", fontWeight: "600" }}> Add Property Details</h1>
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
        <div >
          <Button className="float-start" onClick={prevStep}>
            Previous
          </Button>

          <Button className="float-end" type="submit">
            Submit
          </Button>
        </div>
        <NavLink
          to={`/property-list`}
          id="propertyList"
          disabled
        ></NavLink>
      </Form>
    </div>
  );
};
function Final({ values }) {
  const dispatch = useDispatch();
  const { email, phonenumber, website, type, name, shortName, estyr, aprovedBy, affilatedBy } = values;
  let data = {
    "email": email,
    "phone": phonenumber,
    "website": website,
    "edu_type": type,
    "college_type": "Gov",
    "name": name,
    "short_name": shortName,
    "est_year": estyr,
    "approve_by": aprovedBy,
    "affilite_by": affilatedBy
  };
  dispatch(createProperty(data));
  dispatch(getCollegeList())
  document.getElementById("propertyList").click();
  window.location.reload(false);
};

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
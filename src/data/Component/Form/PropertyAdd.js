import React, { useEffect, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import { createProperty } from "../../../redux/Action/PropertyAction";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, useNavigate, Routes, Route, NavLink } from "react-router-dom";
import { getCollegeList } from "../../../redux/Action/PropertyTypeAction";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';



import {
  Col,
  Row,
  Card,
  Breadcrumb
} from "react-bootstrap";
import validator from "validator";
// import { DropImg } from "../../StepForm/component/DropImg";
import { DropImg } from "../../../components/Pages/Property/StepForm/component/DropImg";
import JoditEditor from "jodit-react";


//WizardForm
function Name({ nextStep, handleFormData, values, setFormData }) {
  const [error, setError] = useState(false);

  const [phonenumber, setphonenumber] = useState(values.phonenumber || "");
  const [property_address, setproperty_address] = useState(values.property_address || "");
  const [property_state, setproperty_state] = useState(values.property_state || "");
  const [property_district, setproperty_district] = useState(values.property_district || "");
  const [isphonenumberTouched, setIsphonenumberTouched] = useState(false);
  const [ispropertyAddressTouched, setIsPropertyAddressTouched] = useState(false);
  const [ispropertyStateTouched, setIsPropertyStateTouched] = useState(false);
  const [ispropertyDistrictTouched, setIsPropertyDistrictTouched] = useState(false);

  const [website, setwebsite] = useState(values.website || "");
  const [iswebsiteTouched, setIswebsiteTouched] = useState(false);

  const [email, setEmail] = useState(values.email || "");
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const isphonenumberValid = phonenumber.trim() !== "";
  const hasphonenumberError = !isphonenumberValid && isphonenumberTouched;

  const iswebsiteValid = website.trim() !== "";
  const haswebsiteError = !iswebsiteValid && iswebsiteTouched;


  const ispropertyAddressValid = property_address.trim() !== "";
  const haspropertyAddressError = !ispropertyAddressValid && ispropertyAddressTouched;

  const ispropertyStateValid = property_state.trim() !== "";
  const haspropertyStateError = !ispropertyStateValid && ispropertyStateTouched;

  const ispropertyDistrictValid = property_district.trim() !== "";
  const haspropertyDistrictError = !ispropertyDistrictValid && ispropertyDistrictTouched;

  const isEmailValid =
    email.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const hasEmailError = !isEmailValid && isEmailTouched;

  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    setIsFormValid(isphonenumberValid && iswebsiteValid && isEmailValid && ispropertyAddressValid && ispropertyDistrictValid && ispropertyStateValid);
  }, [isphonenumberValid, iswebsiteValid, isEmailValid, ispropertyAddressValid, ispropertyDistrictValid, ispropertyStateValid]);

  const submitFormData = (e) => {
    e.preventDefault();
    if (isFormValid) {
      nextStep();
    } else {
      setIsphonenumberTouched(true);
      setIswebsiteTouched(true);
      setIsEmailTouched(true);
      setIsPropertyAddressTouched(true);
      setIsPropertyStateTouched(true);
      setIsPropertyDistrictTouched(true);
    }
  };


  const phonenumberChangeHandler = (e) => {
    setphonenumber(e.target.value);
    setFormData({ ...values, [e.target.name]: e.target.value })
  };

  const phonenumberBlurHandler = (e) => {
    setIsphonenumberTouched(true);
  };

  const propertyAddressBlurHandler = (e) => {
    setIsPropertyAddressTouched(true);
  };
  const propertyStateBlurHandler = (e) => {
    setIsPropertyStateTouched(true);
  };
  const propertyDistrictBlurHandler = (e) => {
    setIsPropertyDistrictTouched(true);
  };

  const websiteChangeHandler = (e) => {
    setwebsite(e.target.value);
    setFormData({ ...values, [e.target.name]: e.target.value })
  };

  const propertyAddressChangeHandler = (e) => {
    setproperty_address(e.target.value);
    setFormData({ ...values, [e.target.name]: e.target.value })
  };

  const propertyStateChangeHandler = (e) => {
    setproperty_state(e.target.value);
    setFormData({ ...values, [e.target.name]: e.target.value })
  };

  const propertyDistrictChangeHandler = (e) => {
    setproperty_district(e.target.value);
    setFormData({ ...values, [e.target.name]: e.target.value })
  };

  const websiteBlurHandler = (e) => {
    setIswebsiteTouched(true);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    setFormData({ ...values, [e.target.name]: e.target.value })
  };

  const emailBlurHandler = (e) => {
    setIsEmailTouched(true);
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
                        <div className="row">
                          <div className="col-md-6">
                            <Form.Group className="">
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                style={{ border: hasEmailError ? "2px solid #ff0000" : "" }}
                                name="email"
                                defaultValue={values.email}
                                type="text"
                                placeholder="Email"
                                onChange={(e) => { emailChangeHandler(e); handleFormData("email") }}
                                onBlur={emailBlurHandler}

                              />
                              {hasEmailError ? (
                                <Form.Text style={{ color: "#ff0000" }}>
                                  This is a required field
                                </Form.Text>
                              ) : (
                                ""
                              )}
                            </Form.Group>
                          </div>
                          <div className="col-md-6">
                            <Form.Group className="">
                              <Form.Label>Website</Form.Label>
                              <Form.Control
                                style={{ border: haswebsiteError ? "2px solid #ff0000" : "" }}
                                name="website"
                                defaultValue={values.website}
                                type="text"
                                placeholder="Website"
                                onChange={(e) => { websiteChangeHandler(e); handleFormData("website") }}
                                onBlur={websiteBlurHandler}
                              />
                              {haswebsiteError ? (
                                <Form.Text style={{ color: "#ff0000" }}>
                                  This is a required field
                                </Form.Text>
                              ) : (
                                ""
                              )}
                            </Form.Group>
                          </div>
                          <div className="col-md-6">
                            <Form.Group className="">
                              <Form.Label>Phone Number</Form.Label>
                              <Form.Control
                                style={{ border: hasphonenumberError ? "2px solid #ff0000" : "" }}
                                name="phonenumber"
                                pattern="[789][0-9]{9}"
                                defaultValue={values.phonenumber}
                                type="text"
                                placeholder="Phone Number"
                                onChange={(e) => { phonenumberChangeHandler(e); handleFormData("phonenumber") }}
                                onBlur={phonenumberBlurHandler}
                              />
                              {hasphonenumberError ? (
                                <Form.Text style={{ color: "#ff0000" }}>
                                  This is a required field
                                </Form.Text>
                              ) : (
                                ""
                              )}
                            </Form.Group>
                          </div>
                          <div className="col-md-6">

                            <Form.Group className="">
                              <Form.Label>Property Address</Form.Label>
                              <Form.Control
                                style={{ border: haspropertyAddressError ? "2px solid #ff0000" : "" }}
                                name="property_address"
                                defaultValue={values.property_address}
                                type="text"
                                placeholder="Property Address"
                                onChange={(e) => { propertyAddressChangeHandler(e); handleFormData("property_address") }}
                                onBlur={propertyAddressBlurHandler}
                              />
                              {haspropertyAddressError ? (
                                <Form.Text style={{ color: "#ff0000" }}>
                                  This is a required field
                                </Form.Text>
                              ) : (
                                ""
                              )}
                            </Form.Group>
                          </div>
                          <div className="col-md-6">
                            <Form.Group className="">
                              <Form.Label>Property State</Form.Label>
                              <Form.Control
                                style={{ border: haspropertyStateError ? "2px solid #ff0000" : "" }}
                                name="property_state"
                                defaultValue={values.property_state}
                                type="text"
                                placeholder="Property State"
                                onChange={(e) => { propertyStateChangeHandler(e); handleFormData("property_state") }}
                                onBlur={propertyStateBlurHandler}
                              />
                              {haspropertyStateError ? (
                                <Form.Text style={{ color: "#ff0000" }}>
                                  This is a required field
                                </Form.Text>
                              ) : (
                                ""
                              )}
                            </Form.Group>
                          </div>
                          <div className="col-md-6">
                            <Form.Group className="">
                              <Form.Label>Property Distrct</Form.Label>
                              <Form.Control
                                style={{ border: haspropertyDistrictError ? "2px solid #ff0000" : "" }}
                                name="property_district"
                                defaultValue={values.property_district}
                                type="text"
                                placeholder="Property District"
                                onChange={(e) => { propertyDistrictChangeHandler(e); handleFormData("property_state") }}
                                onBlur={propertyDistrictBlurHandler}
                              />
                              {haspropertyDistrictError ? (
                                <Form.Text style={{ color: "#ff0000" }}>
                                  This is a required field
                                </Form.Text>
                              ) : (
                                ""
                              )}
                            </Form.Group>
                          </div>
                          <div>
                            <Button type="submit" className="mb-5" >
                              Continue
                            </Button>
                          </div>
                        </div>
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


function StepTwo({ setFormData, nextStep, handleFormData, prevStep, values, university, handleChange, personName }) {
  const editor = useRef(null);
  const [content, setContent] = useState("");
   // const ITEM_HEIGHT = 48;
  // const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        // maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const theme = useTheme();



  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const [error, setError] = useState(false);

  const [type, settype] = useState(values.type || "");
  const [istypeTouched, setIstypeTouched] = useState(false);

  const [name, setname] = useState(values.name || "");
  const [isnameTouched, setIsnameTouched] = useState(false);

  const [shortName, setshortName] = useState(values.shortName || "");
  const [isshortNameTouched, setIsshortNameTouched] = useState(false);

  
  const [description, setdescription] = useState(values.description || "");
  const [isdescriptionTouched, setIsdescriptionTouched] = useState(false);

  const [estyr, setestyr] = useState(values.estyr || "");
  const [isestyrTouched, setIsestyrTouched] = useState(false);

  const [aprovedBy, setaprovedBy] = useState(values.aprovedBy || "");
  const [isaprovedByTouched, setIsaprovedByTouched] = useState(false);

  const istypeValid = type.trim() !== "";
  const hastypeError = !istypeValid && istypeTouched;

  const isnameValid = name.trim() !== "";
  const hasnameError = !isnameValid && isnameTouched;

  const isshortNameValid = shortName.trim() !== "";
  const hasshortNameError = !isshortNameValid && isshortNameTouched;
  
  const isdescriptionValid = content.trim() !== "";
  const hasdescriptionError = !isdescriptionValid && isdescriptionTouched;

  const isestyrValid = estyr.trim() !== "";
  const hasestyrError = !isestyrValid && isestyrTouched;

  const isaprovedByValid = aprovedBy.trim() !== "";
  const hasaprovedByError = !isaprovedByValid && isaprovedByTouched;

  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    setIsFormValid(istypeValid && isnameValid && isshortNameValid && isdescriptionValid && isestyrValid && isaprovedByValid);
  }, [istypeValid, isnameValid, isshortNameValid, isestyrValid, isaprovedByValid, isdescriptionValid]);

  const submitFormData = (e) => {
    e.preventDefault();
    // if (validator.isEmpty(values.type) || validator.isEmpty(values.name) || validator.isEmpty(values.shortName) || validator.isEmpty(values.estyr) || validator.isEmpty(values.aprovedBy)) {
    //   setError(true);
    // } else {
    //   nextStep();
    // }
    if (isFormValid) {
      nextStep();
    } else {
      setIsaprovedByTouched(true);
      setIsestyrTouched(true);
      setIsdescriptionTouched(true)
      setIsshortNameTouched(true);
      setIsnameTouched(true);
      setIstypeTouched(true)
    }
  };

  const typeChangeHandler = (e) => {
    settype(e.target.value);
    setFormData({ ...values, type: e.target.value })
  };

  const typeBlurHandler = (e) => {
    setIstypeTouched(true);
  };

  const nameChangeHandler = (e) => {
    setname(e.target.value);
    setFormData({ ...values, [e.target.name]: e.target.value })
  };

  const nameBlurHandler = (e) => {
    setIsnameTouched(true);
  };

  const estyrBlurHandler = (e) => {
    setIsestyrTouched(true);
  };
  const estyrChangeHandler = (e) => {
    setestyr(e.target.value);
    setFormData({ ...values, [e.target.name]: e.target.value })
  };

  const aprovedByChangeHandler = (e) => {
    setaprovedBy(e.target.value);
    setFormData({ ...values, [e.target.name]: e.target.value })
  };
  const aprovedByBlurHandler = (e) => {
    setIsaprovedByTouched(true);
  };
  const shortNameChangeHandler = (e) => {
    setshortName(e.target.value);
    setFormData({ ...values, [e.target.name]: e.target.value })
  };

  const shortNameBlurHandler = (e) => {
    setIsshortNameTouched(true);
  };
  const descriptionChangeHandler = (content) => {
    setdescription(content);
    setFormData({ ...values, description: content })
  };

  const descriptionBlurHandler = (e) => {
    setIsdescriptionTouched(true);
    if (content.trim() === "") {
      setError(true);
    } else {
      setError(false);
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
                            style={{ border: hastypeError ? "2px solid red" : "" }}
                            // onChange={handleFormData("type")}
                            onChange={(e) => { typeChangeHandler(e); handleFormData("type") }}
                            onBlur={typeBlurHandler}
                            value={values.type}
                          >
                            <option value="">Select Type</option>
                            <option value="University" >University</option>
                            <option value="College" >College</option>
                            <option value="OnlineLearning" >Online Learning</option>
                            <option value="Eduversity" >Eduversity</option>
                          </Form.Select>
                          {hastypeError ? (
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
                                style={{ border: hasnameError ? "2px solid red" : "" }}
                                type="text"
                                placeholder="Name"
                                name="name"
                                defaultValue={values.name}
                                // onChange={handleFormData("name")}
                                onChange={(e) => { nameChangeHandler(e); handleFormData("name") }}
                                onBlur={nameBlurHandler}
                              />
                              {hasnameError ? (
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
                                style={{ border: hasshortNameError ? "2px solid red" : "" }}
                                type="text"
                                placeholder="Short Name"
                                defaultValue={values.shortName}
                                name="shortName"
                                // onChange={handleFormData("shortName")}
                                onChange={(e) => { shortNameChangeHandler(e); handleFormData("shortName") }}
                                onBlur={shortNameBlurHandler}
                              />
                              {hasshortNameError ? (
                                <Form.Text style={{ color: "red" }}>
                                  This is a required field
                                </Form.Text>
                              ) : (
                                ""
                              )}
                            </Form.Group>
                          </div>
                        </div>
                        <div className="row  d-flex">
                            <div className="col-md-12">
                                <label className="form-label">Description</label>
                                <JoditEditor
                                  style={{ border: hasdescriptionError ? "2px solid red" : "" }}
                                  ref={editor}
                                  value={content}
                                  onChange={newContent => {setContent(newContent);descriptionChangeHandler(newContent);handleFormData("description")}}
                                  onBlur={descriptionBlurHandler}
                                />
                                {hasdescriptionError ? (
                                <Form.Text style={{ color: "red" }}>
                                  This is a required field
                                </Form.Text>
                              ) : (
                                ""
                              )}
                            </div>
                        </div>
                        <div className="row d-flex">
                          <div className="col-md-4">
                            <Form.Group className="mb-3">
                              <Form.Label>Est. Year</Form.Label>
                              <Form.Control
                                style={{ border: hasestyrError ? "2px solid #ff0000" : "" }}
                                name="estyr"
                                defaultValue={values.estyr}
                                pattern="^(19|20)\d{2}$"
                                type="number"
                                placeholder="1900-2050"
                                // onChange={handleFormData("estyr")}
                                onChange={(e) => { estyrChangeHandler(e); handleFormData("estyr") }}
                                onBlur={estyrBlurHandler}
                              />
                              {hasestyrError ? (
                                <Form.Text style={{ color: "#ff0000" }}>
                                  This is a required field
                                </Form.Text>
                              ) : (
                                ""
                              )}
                            </Form.Group>
                          </div>
                          <div className="col-md-4">
                            <Form.Group className="mb-3">
                              <Form.Label>Approved By</Form.Label>
                              <Form.Control
                                style={{ border: hasaprovedByError ? "2px solid #ff0000" : "" }}
                                name="aprovedBy"
                                defaultValue={values.aprovedBy}
                                type="text"
                                placeholder="aprovedBy"
                                // onChange={handleFormData("aprovedBy")}
                                onChange={(e) => { aprovedByChangeHandler(e); handleFormData("aprovedBy") }}
                                onBlur={aprovedByBlurHandler}
                              />
                              {hasaprovedByError ? (
                                <Form.Text style={{ color: "#ff0000" }}>
                                  This is a required field
                                </Form.Text>
                              ) : (
                                ""
                              )}
                            </Form.Group>
                          </div>
                          <div className="col-md-4">
                            <Form.Group className="mb-3">
                              <Form.Label>Affilated By</Form.Label>
                              <FormControl sx={{ width: 300 }} >
                                <Select
                                  labelId="demo-multiple-chip-label"
                                  defaultValue={values.affilatedBy}
                                  id="demo-multiple-chip"
                                  multiple
                                  onChange={handleChange}
                                  renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                      {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                      )
                                      )}

                                    </Box>
                                  )}
                                  MenuProps={MenuProps}
                                >
                                  {university.map((item) => (
                                    (
                                      <MenuItem
                                        key={item?.name}
                                        value={item?.name}
                                        style={getStyles(item.name, personName, theme)}
                                      >
                                        {item?.name}
                                      </MenuItem>)
                                  ))}
                                </Select>
                              </FormControl>
                              {error ? (
                                <Form.Text style={{ color: "#ff0000" }}>
                                  This is a required field
                                </Form.Text>
                              ) : (
                                ""
                              )}
                            </Form.Group>
                          </div>
                        </div>
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

function ThirdStep({ nextStep, handleFormData, prevStep, values, personName }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { users } = useSelector(state => ({
    users: state?.userAuth?.loginUser?.user,
  }));
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      "email": values.email || "",
      "phone": values.phonenumber || "",
      "property_address": values.property_address || "",
      "property_state": values.property_state || "",
      "property_district": values.property_district || "",
      "website": values.website || "",
      "edu_type": values.type || "",
      "college_type": "Gov",
      "name": values.name || "",
      "short_name": values.shortName || "",
      "description": values.description || "",
      "est_year": values.estyr || "",
      "approve_by": values.aprovedBy || "",
      "logo": "",
      "image": ""
    },
    onSubmit: values => {
      values = {
        ...values,
        "affilite_by": personName,
        created_by_user_id: users?._id
      }
      if (typeof values.image == 'object' && typeof values.logo == 'object') {
        let formData = new FormData();
        for (let value in values) {
          formData.append(value, values[value]);
        }
        dispatch(createProperty(formData));
        { values.edu_type == "University" ? navigate('/university-property-list') : values.edu_type == "OnlineLearning" ? navigate('/online-learning-property-list') : values.edu_type == "eduversity" ? navigate('/online-learning-property-list') : navigate('/property-list') }
        dispatch(getCollegeList());
      } else {
        dispatch(createProperty(values));
        { values.edu_type == "University" ? navigate('/university-property-list') : values.edu_type == "OnlineLearning" ? navigate('/online-learning-property-list') : navigate('/property-list') }
        dispatch(getCollegeList())
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
                              type="file" className="dropify" imgtype="logo"
                              formik={formik}
                            />
                          </div>
                        </Form.Group>
                        <br />
                        <Form.Group className="">
                          <div className="control-group form-group mb-0 drop">
                            <label className="form-label">Featured Image</label>
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

export function PropertyAdd() {
  const [step, setstep] = useState(1);
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const [formData, setFormData] = useState({
    email: "",
    phonenumber: "",
    type: "",
    name: "",
    shortName: "",
    description:"",
    estyr: "",
    affilatedBy: [],
    aprovedBy: ""
  });
  const { users, college, tab_status } = useSelector(state => ({
    users: state?.userAuth?.loginUser?.user,
    college: state?.propertyType?.college.filter(item => item?.edu_type == "University"),
    tab_status: state?.propertyType?.tab_status,
  }));
  const nextStep = () => {
    setstep(step + 1);
  };
  const prevStep = () => {
    setstep(step - 1);
  };
  const handleInputData = input => e => {
    const { value, name } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }));
  }

  switch (step) {
    case 1:
      return (
        <div className="custom-margin">
          <Name nextStep={nextStep} handleFormData={handleInputData} values={formData} setFormData={setFormData} />
        </div>
      );
    case 2:
      return (
        <div className="custom-margin">
          <StepTwo setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} university={college} handleChange={handleChange} personName={personName} />
        </div>
      );
    default:
      return (
        <div className="custom-margin">
          <ThirdStep nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} personName={personName} />
        </div>
      )
  }
}
//End
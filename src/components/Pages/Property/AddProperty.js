import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Col,
  Row,
  Card,
  Breadcrumb,
} from "react-bootstrap";
import { StatusModal } from "../../Modal/StatusModal";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createStatus } from "../../../redux/Action/Status";
import { getPropertyType } from "../../../redux/Action/PropertyAction";
import { StepForm } from "./StepForm/StepForm";
export default function AddProperty() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [activeId, setActiveId] = React.useState();
  const [activeChildId, setChildActiveId] = React.useState();


  const { property } = useSelector(state => ({
    property: state?.property?.property,
  }));
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getPropertyType())
  }, [])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      "status_for": ""
    },
    // validationSchema: SignupSchema,
    onSubmit: values => {
      dispatch(createStatus(values));
    },
  });

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Add Property</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Property
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Add Property
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

      </div>


      <form onSubmit={formik.handleSubmit}>
        <Row className=" row-sm">
          <Col lg={12} xl={12} md={12} sm={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Add Property</Card.Title>
              </Card.Header>
              {activeChildId == undefined ?
                <div className="p-4">

                  <div style={{
                    display: "flex",
                    flexWrap: "wrap"
                  }}>
                    {property?.map((item, i) => {
                      return (
                        <>
                          {
                            item?.parent == "0" &&
                            <Col sm={12} lg={6} md={12} xl={4}>
                              <Card >
                                <Row onClick={() => { setActiveId(item?._id); setChildActiveId(); }} className={activeId == item?._id ? "highlight_border" : ""}>
                                  <Col className="col-3">
                                    <div className="circle-icon bg-primary text-center align-self-center box-primary-shadow">
                                      <i className="lnr lnr-user fs-30  text-white mt-4"></i>
                                    </div>
                                  </Col>
                                  <Col className="col-9">
                                    <Card.Body className=" p-4">
                                      <h2 className="mb-2 fw-normal mt-2">{item?.property_name}</h2>
                                      <h5 className="fw-normal mb-0">{item?.property_desc}</h5>
                                    </Card.Body>
                                  </Col>
                                </Row>
                              </Card>
                              <div className={activeId == item?._id ? "arrow-down-custom" : "arrow-down-hide"}>
                                <img style={{ width: "26px" }} src="https://gos3.ibcdn.com/arrowDown_image-1553515160.png" />
                              </div>
                            </Col>
                          }
                        </>
                      )
                    })}
                  </div>

                  <div style={{
                    display: "flex",
                    flexWrap: "wrap"
                  }}>
                    {property?.map((item, i) => {
                      return (
                        <>
                          {
                            item?.parent == activeId &&
                            <Col sm={12} lg={6} md={12} xl={4}>
                              <Card >
                                <Row onClick={() => {
                                  setChildActiveId(item?._id);
                                  navigate(`/form-property/${item?.form_url}`)
                                }} className={activeChildId == item?._id ? "highlight_border" : ""}>
                                  <Col className="col-3">
                                    <div className="circle-icon bg-primary text-center align-self-center box-primary-shadow">
                                      <i className="lnr lnr-user fs-30  text-white mt-4"></i>
                                    </div>
                                  </Col>
                                  <Col className="col-9">
                                    <Card.Body className=" p-4">
                                      <h2 className="mb-2 fw-normal mt-2">{item?.property_name}</h2>
                                      <h5 className="fw-normal mb-0">{item?.property_desc}</h5>
                                    </Card.Body>
                                  </Col>
                                </Row>
                              </Card>

                            </Col>
                          }
                        </>
                      )
                    })}
                  </div>

                </div> :
                <div style={{ display: "contents" }}>
                  <div >
                    <button
                      className="btn btn-primary mt-2 float-start"
                      onClick={() => setChildActiveId()}

                    >
                      Back
                    </button>
                  </div>

                  <Card.Body>
                    <StepForm />
                  </Card.Body>
                </div>
              }


            </Card>
          </Col>
        </Row>
      </form>
      <StatusModal open={open} scroll={scroll} handleClose={handleClose} />
    </div>
  );
}

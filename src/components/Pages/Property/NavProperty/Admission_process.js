import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getAdmission_process } from "../../../../redux/Action/PropertyTypeAction";
import PropertyDetails from "../PropertyDetails";
import Admission_process_pages from "./pages/Admission_process_pages";
import parse from 'html-react-parser';

const Admission_process = () => {
  const dispatch = useDispatch();
  const params = useParams()
  const [addTeam, setAddTeam] = useState(false);
  const [editTeam, setEditTeam] = useState();
  const { admission_process } = useSelector((state) => ({
    admission_process: state?.propertyType?.admission_process.filter(item => item?.property_id == params.clgid),
  }));

  useEffect(() => {
    dispatch(getAdmission_process());
  }, []);

  const setDataForm = () => {
    setEditTeam(admission_process[0]);
  }
  console.log('admission_process: ',admission_process);
  return (
    <>
      <PropertyDetails>
        {addTeam == false ? (
          <>
            <Row>
              <Col>
                <Card className="Relatedpost nested-media ">
                  <Card.Header>
                    <Card.Title>
                      <h1 className="card-title">Admission Process</h1>
                    </Card.Title>
                    <div
                      onClick={() => {
                        setAddTeam(true);
                        setDataForm();
                      }}
                      className="ms-auto pageheader-btn"
                    >
                      <NavLink
                        to="#"
                        className="btn btn-primary btn-icon text-white me-3"
                      >
                        <span>
                          <i className="fe fe-plus"></i>&nbsp;
                        </span>
                        {admission_process.length > 0 ? "Edit" : "Add Admission Process"}
                      </NavLink>
                    </div>
                  </Card.Header>
                  {admission_process?.map((item, i) => {
                    if (item?.property_id == params.clgid) {
                      return (
                        <Card.Body>
                          <>
                            <div className="example">
                              <div className="media media-lg mt-0">
                                <div className=" mt-0">
                                  <h4 className="mt-0 mb-4">
                                    <strong> {item?.title}</strong>
                                  </h4>
                                <p>{item?.description ? parse(item?.description) : ""}</p>
                                </div>
                                {/* <div
                                  onClick={() => {
                                    setAddTeam(true);
                                    setEditTeam(item);
                                  }}
                                  className="ms-auto pageheader-btn"
                                >
                                  <NavLink
                                    to="#"
                                    className="btn btn-primary btn-icon text-white me-3"
                                  >
                                    <span>
                                      <i className="fe fe-edit"></i>&nbsp;
                                    </span>
                                    Edit
                                  </NavLink>
                                </div> */}
                                {/* <img
                                className="ms-2 mt-3 mb-3 avatar avatar-xl brround"
                                crossOrigin="annonymous"
                                src={`${process.env.REACT_APP_API_BASE_URL}/${item?.admission_process_img}`}
                                alt=""
                              /> */}
                              </div>
                            </div>
                          </>
                        </Card.Body>
                      );
                    }
                  })}
                </Card>
              </Col>
            </Row>
          </>
        ) : (<>
          <Admission_process_pages
            setAddTeam={setAddTeam}
            editTeam={editTeam}
          /></>

        )}
      </PropertyDetails>
    </>
  );
};

export default Admission_process;

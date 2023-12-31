import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getScholarship } from "../../../../redux/Action/PropertyTypeAction";
import PropertyDetails from "../PropertyDetails";
import Scholarship_pages from "./pages/Scholarship_pages.js";
import parse from 'html-react-parser';


const Scholarship = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [addTeam, setAddTeam] = useState(false);
  const [editTeam, setEditTeam] = useState();
  const { scholarship } = useSelector((state) => ({
    scholarship: state?.propertyType?.scholarship.filter(item => item?.property_id == params.clgid),
  }));

  useEffect(() => {
    dispatch(getScholarship());
  }, []);

  const setDataForm = () => {
    setEditTeam(scholarship[0]);
  }
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
                      <h1 className="card-title">Scholarship</h1>
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
                        {scholarship.length > 0 ? "Edit" : "Add Scholarship"}
                      </NavLink>
                    </div>
                  </Card.Header>
                  {scholarship?.map((item, i) => {
                    if (item?.property_id == params.clgid) {
                      return (
                        <Card.Body>
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
                                  src={`${process.env.REACT_APP_API_BASE_URL}/${item?.announcement_img}`}
                                  alt=""
                                /> */}
                            </div>
                          </div>
                        </Card.Body>)
                    }
                  })}
                </Card>
              </Col>
            </Row>
          </>
        ) : (
          <Scholarship_pages setAddTeam={setAddTeam} editTeam={editTeam} />
        )}
      </PropertyDetails>
    </>
  );
};

export default Scholarship;

import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getLoan } from "../../../../redux/Action/PropertyTypeAction";
import PropertyDetails from "../PropertyDetails";
import Loan_pages from "./pages/Loan_pages.js";

const Loan = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [addTeam, setAddTeam] = useState(false);
  const [editTeam, setEditTeam] = useState();
  const { loan } = useSelector((state) => ({
    loan: state?.propertyType?.loan,
  }));

  console.log(loan, "loan");
  useEffect(() => {
    dispatch(getLoan());
  }, []);

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
                      <h1 className="card-title">Loan</h1>
                    </Card.Title>
                    <div
                      onClick={() => {
                        setAddTeam(true);
                        setEditTeam();
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
                        Add Loan
                      </NavLink>
                    </div>
                  </Card.Header>
                  {loan?.map((item, i) => {
                    if (item?.property_id == params.id) {
                      return (
                        <Card.Body>
                          <div className="example">
                            <div className="media media-lg mt-0">
                              <div className=" mt-0">
                                <h4 className="mt-0 mb-4">
                                  <strong> {item?.title}</strong>
                                </h4>
                                <p>{item?.description}</p>
                              </div>
                              <div
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
                              </div>
                              {/* <img
                                  className="ms-2 mt-3 mb-3 avatar avatar-xl brround"
                                  crossOrigin="annonymous"
                                  src={`${process.env.REACT_APP_API_BASE_URL}/${item?.announcement_img}`}
                                  alt=""
                                /> */}
                            </div>
                          </div>
                        </Card.Body>
                      );
                    }
                  })}
                </Card>
              </Col>
            </Row>
          </>
        ) : (
          <Loan_pages setAddTeam={setAddTeam} editTeam={editTeam} />
        )}
      </PropertyDetails>
    </>
  );
};

export default Loan;

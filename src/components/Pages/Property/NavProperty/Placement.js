import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getPlacement } from "../../../../redux/Action/PropertyTypeAction";
import PropertyDetails from "../PropertyDetails";
import Placement_pages from "./pages/Placement.js";

const Placement = () => {
  const dispatch = useDispatch();
  const [addTeam, setAddTeam] = useState(false);
  const [editTeam, setEditTeam] = useState();
  const { placement } = useSelector((state) => ({
    placement: state?.propertyType?.placement,
  }));

  console.log(placement, "placement");
  useEffect(() => {
    dispatch(getPlacement());
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
                      <h1 className="card-title">Placement</h1>
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
                        Add Placement
                      </NavLink>
                    </div>
                  </Card.Header>
                  {placement?.map((item, i) => {
                    return (
                      <Card.Body>
                        <>
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
                                src={`${process.env.REACT_APP_API_BASE_URL}/${item?.placement_img}`}
                                alt=""
                              /> */}
                            </div>
                          </div>
                        </>
                      </Card.Body>
                    );
                  })}
                </Card>
              </Col>
            </Row>
          </>
        ) : (
          <Placement_pages setAddTeam={setAddTeam} editTeam={editTeam} />
        )}
      </PropertyDetails>
    </>
  );
};

export default Placement;

import React, { useEffect, useState } from "react";
import { Accordion, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getQas } from "../../../../redux/Action/PropertyTypeAction";
import PropertyDetails from "../PropertyDetails";
import Faqs_pages from "./pages/Faqs_pages";
import { Card, Col, Row } from "react-bootstrap";

const Faqs = () => {
  const dispatch = useDispatch();
  const [addTeam, setAddTeam] = useState(false);
  const [editTeam, setEditTeam] = useState();
  const { qas } = useSelector(state => ({
    qas: state?.propertyType?.qas,
  }));

  useEffect(() => {
    dispatch(getQas())
  }, [])
  return (
    <>
      <PropertyDetails>
        {addTeam === false ?
          <Row>
            <Col>
              <Card className=" Relatedpost nested-media" >

                <Card.Header className="border-bottom-0">
                  <Card.Title as="h3">Q&A</Card.Title>
                  {/* <div className="ms-auto pageheader-btn">
                    <NavLink onClick={() => {
                      setAddTeam(true);
                      setEditTeam();
                    }} to="#" className="btn btn-primary btn-icon text-white me-3">
                      <span>
                        <i className="fe fe-plus"></i>&nbsp;
                      </span>
                      Add FAQ
                    </NavLink>
                  </div> */}
                </Card.Header>
              </Card>


              < Card>

                <Card.Body className="faqaccordion">
                  <div
                    aria-multiselectable="true"
                    className="accordion"
                    id="accordion"
                    role="tablist"
                  >
                    {
                      qas?.map((item, i) => {
                        return (
                          <>
                            <Accordion className="acc-card mb-4 " flush>
                              <Accordion.Item eventKey="0">
                                <Accordion.Header className="acc-header">
                                  {item?.ques}
                                  <div className="ms-auto pageheader-btn">
                                    <span>
                                      <i onClick={() => {
                                        setAddTeam(true);
                                        setEditTeam(item);
                                      }} className="fe fe-edit"></i>&nbsp;
                                    </span>
                                  </div>
                                </Accordion.Header>
                                <Accordion.Body className="border">
                                  {item?.answer}
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </>
                        )
                      })
                    }



                  </div>
                </Card.Body>

              </Card>

            </Col>
          </Row>

          :
          <Faqs_pages setAddTeam={setAddTeam} editTeam={editTeam} />}
      </PropertyDetails>
    </>
  )
}

export default Faqs
import React, { useEffect, useState } from "react";
import { Accordion, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getFaqs } from "../../../../redux/Action/PropertyTypeAction";
import PropertyDetails from "../PropertyDetails";
import Faqs_pages from "./pages/Faqs_pages";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Faqs = () => {
  const dispatch = useDispatch();
  const params = useParams()
  const [addTeam, setAddTeam] = useState(false);
  const [editTeam, setEditTeam] = useState();
  const { faqs } = useSelector(state => ({
    faqs: state?.propertyType?.faqs.filter(item => item?.property_id == params.clgid),
  }));

  useEffect(() => {
    dispatch(getFaqs())
  }, [])
  return (
    <>
      <PropertyDetails>
        {addTeam === false ?
          <Row>
            <Col>
              <Card className=" Relatedpost nested-media" >

                <Card.Header className="border-bottom-0">
                  <Card.Title as="h3">Faqs</Card.Title>
                  <div className="ms-auto pageheader-btn">
                    <NavLink onClick={() => {
                      setAddTeam(true);
                      setEditTeam();
                    }} to="#" className="btn btn-primary btn-icon text-white me-3">
                      <span>
                        <i className="fe fe-plus"></i>&nbsp;
                      </span>
                      Add FAQ
                    </NavLink>
                  </div>
                </Card.Header>
              </Card>


              < Card>

                {
                  faqs?.map((item, i) => {
                  return (
                  <Card.Body className="faqaccordion">
                    <div
                      aria-multiselectable="true"
                      className="accordion"
                      id="accordion"
                      role="tablist"
                    >
                      <Accordion className="acc-card mb-4 " flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header className="acc-header">
                            <div className=" pageheader-btn">
                              <span>
                                <i onClick={() => {
                                  setAddTeam(true);
                                  setEditTeam(item);
                                }} className="fe fe-edit">
                                  <button></button></i>&nbsp;
                              </span>
                            </div>
                            {item?.ques}
                          </Accordion.Header>
                          <Accordion.Body className="border">
                              {item?.answer}
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>                       
                    </div>
                  </Card.Body>
                  )})
                }

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
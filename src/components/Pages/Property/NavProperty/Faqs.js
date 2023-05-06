import React, { useEffect, useState } from "react";
import { Accordion, Card, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getFaqs } from "../../../../redux/Action/PropertyTypeAction";
import PropertyDetails from "../PropertyDetails";
import Faqs_pages from "./pages/Faqs_pages";

const Faqs = () => {
  const dispatch = useDispatch();
  const [addTeam, setAddTeam] = useState(false);
  const [editTeam, setEditTeam] = useState();
  const { faqs } = useSelector(state => ({
    faqs: state?.property?.faqs,
  }));

  console.log(faqs, "faqs")
  useEffect(() => {
    dispatch(getFaqs())
  }, [])
  return (
    <>
      <PropertyDetails>
        {addTeam == false ?
          <Card>
            <Card.Header className="border-bottom-0">
              <Card.Title as="h3">Faqs</Card.Title>
            </Card.Header>


            <div className="ms-auto pageheader-btn">
              <NavLink onClick={() => {
                setAddTeam(true);
                setEditTeam();
              }} to="#" className="btn btn-primary btn-icon text-white me-3">
                <span>
                  <i className="fe fe-plus"></i>&nbsp;
                </span>
                Add Gallery
              </NavLink>
            </div>
            <Card.Body className="faqaccordion">
              <div
                aria-multiselectable="true"
                className="accordion"
                id="accordion"
                role="tablist"
              >
                {
                  faqs?.map((item, i) => {
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
          :
          <Faqs_pages setAddTeam={setAddTeam} editTeam={editTeam} />}
      </PropertyDetails>
    </>
  )
}

export default Faqs
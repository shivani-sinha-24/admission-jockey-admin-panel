import React, { useState } from 'react';
import { Breadcrumb, Card, Col, Nav, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Aminities from './NavProperty/Aminities';
import Faqs from './NavProperty/Faqs';
import Gallery from './NavProperty/Gallery';
import TeamLead from './NavProperty/TeamLead';

const PropertyDetails = ({children}) => {
  const navigate = useNavigate();
  const params = useParams();
  const [navState,setNavState] = useState();

  return (
    <>
      <div>
        <div className="page-header">
          <div>
            <h1 className="page-title">Property Details</h1>
            <Breadcrumb className="breadcrumb">
              <Breadcrumb.Item className="breadcrumb-item" href="#">
                Property
              </Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
                Property Details
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>

        </div>



        <Row className=" row-sm">
          <Col lg={12}>
            <Card>
              <Card.Header>
                <h3 className="card-title">Property Details</h3>
              </Card.Header>
              <Card.Body>
                <Nav
                  className="nav niv nav-pills nav-pills-circle"
                  id="tabs_2"
                  role="tablist"
                  defaultActiveKey="videos"
                >
                  <Nav.Item onClick={()=>navigate(`/property-list`)} className="nav-item">
                    <Nav.Link
                      className="nav-link border py-2 px-4 m-1"
                      id="tab1"
                      role="tab"
                      aria-selected="false"
                      eventKey="home"
                    >
                      <span className="nav-link-icon d-block">
                        <i className="fe fe-home"></i> Home
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item onClick={()=>navigate(`/property-list/${params?.id}/admission-process`)} className="nav-item">
                    <Nav.Link
                      className="nav-link border py-2 px-4 m-1"
                      id="tab2"
                      role="tab"
                      aria-selected="false"
                      eventKey="lock"
                    >
                      <span className="nav-link-icon d-block">
                        <i className="fe fe-unlock"></i> Admission Process
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item onClick={()=>navigate(`/property-list/${params?.id}/placement`)} className="nav-item">
                    <Nav.Link
                      className="nav-link py-2 px-4  border show m-1"
                      id="tab3"
                      role="tab"
                      aria-selected="true"
                      eventKey="placement"
                    >
                      <span className="nav-link-icon d-block">
                        <i className="fe fe-play"></i> Placement
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item onClick={()=>navigate(`/property-list/${params?.id}/course`)} className="nav-item">
                    <Nav.Link
                      className="nav-link py-2 px-4  border show m-1"
                      id="tab3"
                      role="tab"
                      aria-selected="true"
                      eventKey="course"
                    >
                      <span className="nav-link-icon d-block">
                        <i className="fe fe-play"></i> Course
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item onClick={()=>navigate(`/property-list/${params?.id}/loan`)} className="nav-item">
                    <Nav.Link
                      className="nav-link border py-2 px-4 m-1"
                      id="tab4"
                      role="tab"
                      aria-selected="false"
                      eventKey="loan"
                    >
                      <span className="nav-link-icon d-block">
                        <i className="fe fe-layers"></i> Loan
                      </span>
                    </Nav.Link>

                  </Nav.Item>
                  <Nav.Item onClick={()=>navigate(`/property-list/${params?.id}/hostel`)} className="nav-item">
                    <Nav.Link
                      className="nav-link border py-2 px-4 m-1"
                      id="tab5"
                      role="tab"
                      aria-selected="false"
                      eventKey="hostel"
                    >
                      <span className="nav-link-icon d-block">
                        <i className="fe fe-layers"></i> Hostel
                      </span>
                    </Nav.Link>

                  </Nav.Item>
                  <Nav.Item onClick={()=>navigate(`/property-list/${params?.id}/scholarship`)} className="nav-item">
                    <Nav.Link
                      className="nav-link border py-2 px-4 m-1"
                      id="tab6"
                      role="tab"
                      aria-selected="false"
                      eventKey="scholarship"
                    >
                      <span className="nav-link-icon d-block">
                        <i className="fe fe-layers"></i> Scholorship
                      </span>
                    </Nav.Link>

                  </Nav.Item>
                  <Nav.Item onClick={()=>navigate(`/property-list/${params?.id}/announcement`)} className="nav-item">
                    <Nav.Link
                      className="nav-link border py-2 px-4 m-1"
                      id="tab7"
                      role="tab"
                      aria-selected="false"
                      eventKey="announcement"
                    >
                      <span className="nav-link-icon d-block">
                        <i className="fe fe-layers"></i> Announcement
                      </span>
                    </Nav.Link>

                  </Nav.Item>
                  <Nav.Item onClick={()=>navigate(`/property-list/${params?.id}/faqs`)} className="nav-item">
                    <Nav.Link
                      className="nav-link border py-2 px-4 m-1"
                      id="tab8"
                      role="tab"
                      aria-selected="false"
                      eventKey="faq"
                    >
                      <span  className="nav-link-icon d-block">
                        <i className="fe fe-layers"></i> Faq's
                      </span>
                    </Nav.Link>

                  </Nav.Item>
                  <Nav.Item onClick={()=>navigate(`/property-list/${params?.id}/team-lead`)} className="nav-item">
                    <Nav.Link
                      className="nav-link border py-2 px-4 m-1"
                      id="tab9"
                      role="tab"
                      aria-selected="false"
                      eventKey="team"
                    >
                      <span className="nav-link-icon d-block">
                        <i className="fe fe-layers"></i> Team lead
                      </span>
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item onClick={()=>navigate(`/property-list/${params?.id}/review`)} className="nav-item">
                    <Nav.Link
                      className="nav-link border py-2 px-4 m-1"
                      id="tab10"
                      role="tab"
                      aria-selected="false"
                      eventKey="review"
                    >
                      <span className="nav-link-icon d-block">
                        <i className="fe fe-layers"></i> Review
                      </span>
                    </Nav.Link>

                  </Nav.Item>
                  <Nav.Item onClick={()=>navigate(`/property-list/${params?.id}/gallery`)}  className="nav-item">
                    <Nav.Link
                      className="nav-link border py-2 px-4 m-1"
                      id="tab11"
                      role="tab"
                      aria-selected="false"
                      eventKey="gallery"
                    >
                      <span className="nav-link-icon d-block">
                        <i className="fe fe-image"></i> Gallery
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item onClick={()=>navigate(`/property-list/${params?.id}/aminities`)}  className="nav-item">
                    <Nav.Link
                      className="nav-link border py-2 px-4 m-1"
                      id="tab11"
                      role="tab"
                      aria-selected="false"
                      eventKey="aminities"
                    >
                      <span className="nav-link-icon d-block">
                        <i className="fe fe-image"></i> Aminities
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item onClick={()=>navigate(`/property-list/${params?.id}/QA`)} className="nav-item">
                    <Nav.Link
                      className="nav-link border py-2 px-4 m-1"
                      id="tab12"
                      role="tab"
                      aria-selected="false"
                      eventKey="QA"
                    >
                      <span className="nav-link-icon d-block">
                        <i className="fe fe-layers"></i> Q&A
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Body>
            </Card>
           
           {/* NAVIGATION COMPONENT RENDER */}
           {/* {
            navState == "gallery" &&  <Gallery />
           }
           {
            navState == "faqs" && <Faqs />
           }
           {
            navState == "aminities" && <Aminities />
           }
           {
            navState == "teamLead"  && <TeamLead />
           } */}

           {children}
          </Col>
        </Row>

      </div>
    </>
  )
}

export default PropertyDetails;
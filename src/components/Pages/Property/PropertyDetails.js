import React, { useState } from 'react';
import { Breadcrumb, Card, Col, Nav, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Aminities from './NavProperty/Aminities';
import Faqs from './NavProperty/Faqs';
import Gallery from './NavProperty/Gallery';
import TeamLead from './NavProperty/TeamLead';
const PropertyDetails = ({ children }) => {
  const navigate = useNavigate();
  const params = useParams();
  const [navState, setNavState] = useState();
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

                {params.edu_type == "University" ?
                  <Nav
                    className="nav niv nav-pills nav-pills-circle"
                    id="tabs_3"
                    role="tablist"
                    defaultActiveKey="videos"
                  >
                    <Nav.Item onClick={() => navigate(`/university-property-list`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params.edu_type}/${params?.clgid}/admission-process`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params.edu_type}/${params?.clgid}/placement`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params.edu_type}/${params?.clgid}/universitycourse`)} className="nav-item">
                      <Nav.Link
                        className="nav-link py-2 px-4 border show m-1"
                        id="tab3"
                        role="tab"
                        aria-selected="true"
                        eventKey="course"
                      >
                        <span className="nav-link-icon d-block">
                          <i className="fe fe-play"></i> University Course
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={() => navigate(`/property-list/${params.edu_type}/${params?.clgid}/hostel`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params.edu_type}/${params?.clgid}/scholarship`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params.edu_type}/${params?.clgid}/announcement`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params.edu_type}/${params?.clgid}/faqs`)} className="nav-item">
                      <Nav.Link
                        className="nav-link border py-2 px-4 m-1"
                        id="tab8"
                        role="tab"
                        aria-selected="false"
                        eventKey="faq"
                      >
                        <span className="nav-link-icon d-block">
                          <i className="fe fe-layers"></i> Faq's
                        </span>
                      </Nav.Link>

                    </Nav.Item>
                    <Nav.Item onClick={() => navigate(`/property-list/${params.edu_type}/${params?.clgid}/others`)} className="nav-item">
                      <Nav.Link
                        className="nav-link border py-2 px-4 m-1"
                        id="tab17"
                        role="tab"
                        aria-selected="false"
                        eventKey="lock"
                      >
                        <span className="nav-link-icon d-block">
                          <i className="fe fe-unlock"></i> Others
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={() => navigate(`/property-list/${params.edu_type}/${params?.clgid}/team-lead`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params.edu_type}/${params?.clgid}/review`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params.edu_type}/${params?.clgid}/gallery`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params.edu_type}/${params?.clgid}/aminities`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params.edu_type}/${params?.clgid}/QA`)} className="nav-item">
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
                  </Nav> :
                  <Nav
                    className="nav niv nav-pills nav-pills-circle"
                    id="tabs_2"
                    role="tablist"
                    defaultActiveKey="videos"
                  >
                    <Nav.Item onClick={() => navigate(`/property-list`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params?.clgid}/admission-process`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params?.clgid}/placement`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params?.clgid}/collegecourse`)} className="nav-item">
                      <Nav.Link
                        className="nav-link py-2 px-4  border show m-1"
                        id="tab3"
                        role="tab"
                        aria-selected="true"
                        eventKey="course"
                      >
                        <span className="nav-link-icon d-block">
                          <i className="fe fe-play"></i> College Course
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={() => navigate(`/property-list/${params?.clgid}/hostel`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params?.clgid}/scholarship`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params?.clgid}/announcement`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params?.clgid}/faqs`)} className="nav-item">
                      <Nav.Link
                        className="nav-link border py-2 px-4 m-1"
                        id="tab8"
                        role="tab"
                        aria-selected="false"
                        eventKey="faq"
                      >
                        <span className="nav-link-icon d-block">
                          <i className="fe fe-layers"></i> Faq's
                        </span>
                      </Nav.Link>


                    </Nav.Item>
                    <Nav.Item onClick={() => navigate(`/property-list/${params?.clgid}/team-lead`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params?.clgid}/review`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params?.clgid}/gallery`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params?.clgid}/aminities`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params?.clgid}/QA`)} className="nav-item">
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
                    <Nav.Item onClick={() => navigate(`/property-list/${params?.clgid}/others`)} className="nav-item">
                      <Nav.Link
                        className="nav-link border py-2 px-4 m-1"
                        id="tab17"
                        role="tab"
                        aria-selected="false"
                        eventKey="QA"
                      >
                        <span className="nav-link-icon d-block">
                          <i className="fe fe-layers"></i>Others
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>}
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
      </div >
    </>
  )
}
export default PropertyDetails;
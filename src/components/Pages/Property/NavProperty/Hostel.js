import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import PropertyDetails from "../PropertyDetails";
import { Button, Card, Col, Row } from "react-bootstrap";
import Hostel_page from "./pages/Hostel_page";
import { getHostel } from "../../../../redux/Action/PropertyTypeAction";
import parse from 'html-react-parser';


const Hostel = () => {
    const dispatch = useDispatch();
    const [addHostel, setAddHostel] = useState(false);
    const [editHostel, setEditHostel] = useState();
    const navigate = useNavigate()
    const params = useParams()
    const { hostel } = useSelector((state) => ({
        hostel: state?.propertyType?.hostel?.filter(item => item?.property_id == params.clgid),
      }));

    const girlsHostel = hostel?.filter(item=>item?.type_of_hostel=='girls')
    const boysHostel = hostel?.filter(item=>item?.type_of_hostel=='boys')
    const girlsContent = girlsHostel && girlsHostel[0]?.description
    const boysContent = boysHostel && boysHostel[0]?.description

    // const setDataForm = () => {
    //     setEditHostel(hostel);
    // }

    useEffect(() => {
        dispatch(getHostel())
    }, [])

    return (
        <>
            <PropertyDetails>
                {!addHostel?(
                    <Row>
                    <Col>
                        <Card className="Relatedpost nested-media ">
                            <Card.Header>
                                <Card.Title>
                                <h1 className="card-title">Hostel</h1>
                                </Card.Title>

                                    <div 
                                    onClick={() => {
                                        setAddHostel(true);
                                        // setDataForm();
                                      }}
                                    className="ms-auto pageheader-btn">
                                        {
                                        // !hostel&&
                                        <NavLink to="#" className="btn btn-primary btn-icon text-white me-3">
                                            <span>
                                                <i className="fe fe-plus"></i>&nbsp;
                                            </span>
                                            {girlsHostel?.length||boysHostel?.length?`Edit `:`Add ` } Hostel
                                        </NavLink>
                                        }
                                    </div>
                            </Card.Header>
                            {hostel?.map((item, i) => {
                    if (item?.property_id == params.clgid) {
                      return (
                        <Card.Body key={i}>
                          <>
                            <div className="example">
                              <div className="media media-lg mt-0">
                                <div className="mt-0">
                                    <h3 className="mt-0 mb-4">Hostel type :{item?.type_of_hostel}</h3>
                                  <h4 className="mt-0 mb-4">
                                    <strong>Title: {item?.title}</strong>
                                  </h4>
                                <p>Description: {item?.description ? parse(item?.description) : ""}</p>
                                <p>Fees: {item?.fees ? parse(item?.fees) : ""}/-per month</p>
                                {/* <Button onClick={()=>navigate(`/update-hostel/${item?._id}`)}>Edit</Button> */}
                                </div>
                               
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
                ):(
                    <Hostel_page
                        setAddHostel={setAddHostel}
                        girlsHostel={girlsHostel[0]}
                        boysHostel={boysHostel[0]}
                        girlsContent={girlsContent}
                        boysContent={boysContent}
                    />
                )}
        </PropertyDetails >
        </>
    )
}

export default Hostel
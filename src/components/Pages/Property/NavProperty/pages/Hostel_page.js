import JoditEditor from 'jodit-react'
import React, { useState,useRef, useEffect } from 'react'
import { Button, Card, Col, NavLink, Row } from 'react-bootstrap'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createHostel, getHostel, updateHostel } from '../../../../../redux/Action/PropertyTypeAction';


const Hostel_page = ({setAddHostel,girlsContent, boysContent, girlsHostel,boysHostel}) =>{
    const [showGirlsHostelForm,setShowGirlsHostelForm] = useState(false)
    const [showBoysHostelForm,setShowBoysHostelForm] = useState(false)
    const [type_of_hostel,set_type_of_hostel] = useState('')
    const params = useParams()
    const dispatch = useDispatch()
    const { hostel } = useSelector(state => ({
        hostel: state?.propertyType?.hostel?.filter(item => item?.property_id == params.clgid),
    }));
    
    const [girlsformContent, setGirlsContent] = useState(girlsContent||"");
    const [boysformContent, setBoysContent] = useState(boysContent||"");
    
    useEffect(()=>{
        if(showGirlsHostelForm){
            set_type_of_hostel('girls')
        }else if(showBoysHostelForm){
            set_type_of_hostel('boys')
        }else{
            set_type_of_hostel('')
        }
        girlsformik.resetForm()
        boysformik.resetForm()
    },[showGirlsHostelForm,showBoysHostelForm])
    
    useEffect(() => {
        dispatch(getHostel())
    }, [])

    const girlsformik = useFormik({
        enableReinitialize: true,
        initialValues: {
            "id": girlsHostel?._id || "",
            "property_id": params.clgid,
            "title": girlsHostel?.title || "",
            'fees': girlsHostel?.fees || "",            
        },
        onSubmit: values => {
            values = { ...values, "description": girlsformContent }
            values = {...values, 'type_of_hostel' : type_of_hostel}
            if(girlsHostel!= undefined){
                    dispatch(updateHostel(values));
                dispatch(getHostel())
                setAddHostel(false)
            }else{
                dispatch(createHostel(values));
                dispatch(getHostel())
                setAddHostel(false)
            }
            setShowGirlsHostelForm(false)
        }
    })
    const boysformik = useFormik({
        enableReinitialize: true,
        initialValues: {
            "id": boysHostel?._id || "",
            "property_id": params.clgid,
            "title": boysHostel?.title || "",
            'fees': boysHostel?.fees || "",            
        },
        onSubmit: values => {
            values = { ...values, "description": boysformContent }
            values = {...values, 'type_of_hostel' : type_of_hostel}
            if(boysHostel!= undefined){
                dispatch(updateHostel(values));
                setAddHostel(false)
            }else{
                dispatch(createHostel(values));
                dispatch(getHostel())
                setAddHostel(false)
            }
            setShowBoysHostelForm(false)
        }
    })
  return (
            <Row>
                <Col lg={12} xl={12} md={12} sm={12}>
                <Card>
                    <Card.Header>
                        <Card.Title>{girlsHostel||boysHostel?`Edit `:`Add ` }Hostel</Card.Title>
                        <div className='ms-auto pageheader-btn'>
                            <Button 
                                className='m-1' 
                                onClick={()=>{
                                    setShowGirlsHostelForm(!showGirlsHostelForm)
                                    setShowBoysHostelForm(false)
                                }}
                            >
                                <span><i className="fe fe-plus"></i>&nbsp;</span>Girls Hostel
                            </Button>
                            <Button 
                                className='m-1' 
                                onClick={()=>{
                                    setShowBoysHostelForm(!showBoysHostelForm)
                                    setShowGirlsHostelForm(false)
                                }}
                            >
                                <span><i className="fe fe-plus"></i>&nbsp;</span>Boys Hostel
                            </Button>
                        </div>
                    </Card.Header>
                    <Col sm={12} lg={12} md={12} xl={12}>
                        {showGirlsHostelForm&&
                        <form onSubmit={girlsformik.handleSubmit}>
                        <Card>
                            <Row>
                                <section>
                                    <div className="row" >
                                    <div className="hostel-title fw-bold fs-6 my-2">Girls Hostel</div>
                                        <div className="col-md-6">
                                            <div >
                                                        <label className="form-label">Title</label>
                                                        <input
                                                            type="text"
                                                            className="form-control required"
                                                            placeholder="Name"
                                                            name="title"
                                                            onChange={girlsformik.handleChange}
                                                            value={girlsformik.values.title}
                                                        />
                                                        {/* {girlsformik.errors.title && girlsformik.touched.title ? (
                                                            <div style={{ color: "red" }}>{girlsformik.errors.title}</div>
                                                        ) : null} */}
                                                    </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div >
                                                        <label className="form-label">Fees</label>
                                                        <input
                                                            type="number"
                                                            className="form-control required"
                                                            placeholder="Fees"
                                                            name="fees"
                                                            onChange={girlsformik.handleChange}
                                                            value={girlsformik.values.fees}
                                                        />
                                                        {/* {girlsformik.errors.title && girlsformik.touched.title ? (
                                                            <div style={{ color: "red" }}>{girlsformik.errors.title}</div>
                                                        ) : null} */}
                                                    </div>
                                        </div>
                                        <div className="control-group form-group">
                                                <label className="form-label">Description</label>
                                                <JoditEditor
                                                    // ref={editor}
                                                    value={girlsformContent}
                                                    onChange={newContent => setGirlsContent(newContent)}
                                                />
                                                {/* {girlsformik.errors.description && girlsformik.touched.description ? (
                                                    <div style={{ color: "red" }}>{girlsformik.errors.description}</div>
                                                ) : null} */}
                                            </div>
                                            <div>
                                                <Button type="submit" className="mb-5">
                                                Submit
                                                </Button>
                                            </div>
                                    </div>
                                    
                                </section>
                            </Row>
                        </Card>
                        </form>
                        }
                        {showBoysHostelForm&&
                        <form onSubmit={boysformik.handleSubmit}>
                        <Card>
                            <Row>
                                <section>
                                    <div className="row" >
                                    <div className="hostel-title fw-bold fs-6 my-2">Boys Hostel</div>
                                        <div className="col-md-6">
                                            <div >
                                                        <label className="form-label">Title</label>
                                                        <input
                                                            type="text"
                                                            className="form-control required"
                                                            placeholder="Name"
                                                            name="title"
                                                            onChange={boysformik.handleChange}
                                                            value={boysformik.values.title}
                                                        />
                                                        {/* {boysformik.errors.title && boysformik.touched.title ? (
                                                            <div style={{ color: "red" }}>{boysformik.errors.title}</div>
                                                        ) : null} */}
                                                    </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div >
                                                        <label className="form-label">Fees</label>
                                                        <input
                                                            type="number"
                                                            className="form-control required"
                                                            placeholder="Fees"
                                                            name="fees"
                                                            onChange={boysformik.handleChange}
                                                            value={boysformik.values.fees}
                                                        />
                                                        {/* {boysformik.errors.title && boysformik.touched.title ? (
                                                            <div style={{ color: "red" }}>{boysformik.errors.title}</div>
                                                        ) : null} */}
                                                    </div>
                                        </div>
                                        <div className="control-group form-group">
                                                <label className="form-label">Description</label>
                                                <JoditEditor
                                                    // ref={editor}
                                                    value={boysformContent}
                                                    onChange={newContent => setBoysContent(newContent)}
                                                />
                                                {/* {boysformik.errors.description && boysformik.touched.description ? (
                                                    <div style={{ color: "red" }}>{boysformik.errors.description}</div>
                                                ) : null} */}
                                            </div>
                                            <div>
                                                <Button type="submit" className="mb-5">
                                                Submit
                                                </Button>
                                            </div>
                                    </div>
                                    
                                </section>
                            </Row>
                        </Card>
                        </form>
                        }
                    </Col>
                </Card>
                </Col>
            </Row>
  )
}

export default Hostel_page
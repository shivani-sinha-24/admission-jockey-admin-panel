import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import {  Button, Col, Card, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { createPropertyType } from '../../../redux/Action/PropertyTypeAction';
import JoditEditor from 'jodit-react';
import { DropImg } from '../Property/StepForm/component/DropImg';


const AddPropertyType = () => {

  const [content, setContent] = useState( "");

    const PropertyTypeSchema = Yup.object().shape({
        parent: Yup.string().required('Please select parent property.'),
        property_name: Yup.string().required('Property name is required.'),
        form_url: Yup.string().required('Property url is required.'),
    });

  const { property } = useSelector(state => ({
    property: state?.property?.property,
  }));

  const { users } = useSelector(state => ({
    users: state?.userAuth?.loginUser.user,
  })); 

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      "parent": "",
      "property_name": "",
      "property_desc": "",
      "form_url":  "",
      "property_img": "",
    },
    validationSchema: PropertyTypeSchema,
    onSubmit: values => {
      values = { ...formik.values, "property_desc": content , created_by_user_id :  users._id }
      if (typeof values.property_img == 'object') {
        let formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value]);
        }
        dispatch(createPropertyType(formData));
        navigate("/property-type");
      } else {
        dispatch(createPropertyType(values));
        navigate("/property-type");
      }
    },
  });

  return (
    <Row className=" row-sm">
      <Col lg={12} xl={12} md={12} sm={12}>
          <Card>
            <Card.Header>
              < Card.Title as="h3">{`Add Property Type`}</Card.Title>
            </Card.Header>
            <Col sm={12} lg={12} md={12} xl={12}>
              <Card >
                  <Row>
                    <section>
                      <form onSubmit={formik.handleSubmit} className="control-group form-group ">
                        <label className="form-label">Parent</label>
                        <select
                          onChange={formik.handleChange}
                          value={formik.values.parent}
                          className="form-control required"
                          name="parent" id="role">
                          <option >Select</option>
                          <option value="0">Uncategorized</option>
                          {
                            property?.map((item,i)=>{
                                return (
                                    <>
                                    <option value={item?._id}>{item?.property_name}</option>
                                    </>
                                )
                            })
                          }
                        </select>
                        {formik.errors.parent && formik.touched.parent ? (
                          <div style={{color:"red"}}>{formik.errors.parent}</div>
                          ) : null}
                        <div className="control-group form-group">
                          <label className="form-label">Property Name</label>
                          <input
                            type="text"
                            className="form-control required"
                            placeholder="Property Name"
                            onChange={formik.handleChange}
                            value={formik.values.property_name}
                            name="property_name"
                          />
                            {formik.errors.property_name && formik.touched.property_name ? (
                                <div style={{color:"red"}}>{formik.errors.property_name}</div>
                              ) : null}
                        </div>
                        <div className="control-group form-group">
                          <label className="form-label">Property Url</label>
                          <input
                            type="text"
                            className="form-control required"
                            placeholder="Property Url"
                            onChange={formik.handleChange}
                            value={formik.values.form_url}
                            name="form_url"
                          />
                            {formik.errors.form_url && formik.touched.form_url ? (
                                <div style={{color:"red"}}>{formik.errors.form_url}</div>
                              ) : null}
                        </div>
                        <div className="control-group form-group">
                          <label className="form-label">Property Description</label>
                          {/* <input
                            type="text"
                            className="form-control required"
                            placeholder="Property Description"
                            onChange={formik.handleChange}
                            value={formik.values.property_desc}
                            name="property_desc"
                          /> */}
                          <JoditEditor
                            // ref={editor}
                            value={content}
                            onChange={newContent => setContent(newContent)}
                          />
                        </div>
                        <div className="input-group mb-5 file-browser">
                          <label htmlFor="property_img" className="form-label">Property Picture</label>
                          <DropImg
                            type="file" className="dropify" imgtype="property_img"
                            formik ={formik}
                          />
                        </div>
                      </form>
                      <Button variant="secondary" className="me-1" onClick={()=>{formik.resetForm();setContent('');}}>Cancel</Button>
                      <Button type="submit" variant="primary" className="me-1"  onClick={formik.handleSubmit} >Submit</Button>
                    </section>
                  </Row >
              </Card>
            </Col>
          </Card>
      </Col>
  </Row>
  )
}

export default AddPropertyType

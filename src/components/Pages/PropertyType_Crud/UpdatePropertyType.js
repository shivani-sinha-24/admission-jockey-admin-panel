import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { deletePropertyType, getPropertyType, updatePropertyType } from '../../../redux/Action/PropertyTypeAction';
import { Button, Card, Col, Row } from 'react-bootstrap';
import JoditEditor from 'jodit-react';
import { DropImg } from '../Property/StepForm/component/DropImg';
import { ImagePreviewCard } from '../../Card/ImagePreviewCard';

const UpdatePropertyType = () => {
    const {id} = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [content, setContent] = useState( "");
    useEffect(()=>{
        dispatch(getPropertyType())
      },[])
    const { property } = useSelector(state => ({
        property: state?.propertyType?.property.filter(item=>item?._id == id),
        
      }));

    const [propertyTypePic,setPropertyTypePic] = useState(property[0].property_img?true:false)


    const propertyDeleteAction = (id) => {
      dispatch(deletePropertyType(id))
      dispatch(getPropertyType());
      window.location.reload(false);
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          "parent": property[0].parent ||"",
          "property_name": property[0].property_name ||"",
          "property_desc": property[0].property_desc ||"",
          "form_url":  property[0].form_url ||"",
          "property_img": property[0].property_img ||"",
        },
        // validationSchema: PropertyTypeSchema,
        onSubmit: values => {
          values = { ...formik.values, "property_desc": content }
          if (typeof values.property_img == 'object') {
            let formData = new FormData();
            for (let value in values) {
                formData.append(value, values[value]);
            }
            dispatch(updatePropertyType(id,formData));
            navigate("/property-type");
          } else {
            dispatch(updatePropertyType(id,values));
            navigate("/property-type");
          }
        },
      });

  return (
    <Row className=" row-sm">
      <Col lg={12} xl={12} md={12} sm={12}>
          <Card>
            <Card.Header>
              < Card.Title as="h3">{`Update Property Type`}</Card.Title>
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
                            value={formik.values.property_desc}
                            onChange={newContent => setContent(newContent)}
                          />
                        </div>
                        {propertyTypePic
                        ?
                        <ImagePreviewCard
                            image={property[0].property_img}   
                            setEditProfilePic={setPropertyTypePic}
                        />
                        :
                        <div className="input-group mb-5 file-browser">
                          <label htmlFor="property_img" className="form-label">Property Picture</label>
                          <DropImg
                            type="file" className="dropify" imgtype="property_img"
                            formik ={formik}
                            />
                        </div>
                        }
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

export default UpdatePropertyType

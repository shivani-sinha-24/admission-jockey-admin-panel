import React, { useEffect } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { DropImg } from '../Property/StepForm/component/DropImg'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getGallery, updateGalleryImage } from '../../../redux/Action/PropertyTypeAction';
import { replace, useFormik } from "formik";
import * as Yup from 'yup';
import { GalleryImagePreviewCard } from '../../Card/GalleryImagePreviewCard';

const UpdateGallery = () => {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getGallery());
      }, []);

    const { gallery } = useSelector((state) => ({
        gallery: state?.propertyType?.gallery.filter(item => item?.property_id == params.clgid),
        // gallery: state?.propertyType?.gallery,
      }));

      const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          "title": gallery[0]?.title || "",
          "property_id": gallery[0]?.property_id || "",
          "gallery_img": gallery[0]?.gallery_img || ""
        },
        // validationSchema: gallery[0]?statusvalSchema:null,
        onSubmit: values => {       
            if (typeof values.gallery_img[0] != 'string') {
              let formData = new FormData();
              formData.append("property_id", values.property_id);
              formData.append("id", gallery[0]._id);
              formData.append("title", values.title);
              formData.append("type", "edit");
              for (const image of values.gallery_img) {
                formData.append("gallery_img", image);
              }
            //   dispatch(createGallery(formData))
            dispatch(updateGalleryImage(formData))
            dispatch(getGallery());
            } else {
    
              dispatch(updateGalleryImage({
                property_id: values.property_id,
                id: gallery[0]._id,
                title: values.title,
                type: "edit",
                gallery_img: values.gallery_img
              }));
            }
          dispatch(getGallery());
          formik.resetForm();
          // alert(JSON.stringify(values, null, 2));
        },
      });
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <Row className=" row-sm mt-5">
                <Col lg={12} xl={12} md={12} sm={12}>
                    <Card>
                        <Card.Header>
                            < Card.Title as="h3">Update Gallery</Card.Title>
                        </Card.Header>
                        <Col sm={12} lg={12} md={12} xl={12}>
                            <Row>
                            <div className="control-group form-group ">
                                <label className="form-label">Title</label>
                                <input
                                type="text"
                                className="form-control required"
                                placeholder="Title"
                                onChange={formik.handleChange}
                                value={formik.values.title}
                                name="title"
                                />
                                {formik.errors.title && formik.touched.title ? (
                                <div style={{ color: "red" }}>{formik.errors.title}</div>
                                ) : null}
                            </div>

                            </Row> 
                            <Row className="d-flex justify-content-start">
                            {gallery[0]?.gallery_img?.length?
                            gallery[0].gallery_img.map((image,index)=>
                            {
                                console.log(image, index)
                                return(
                                <GalleryImagePreviewCard
                                    image={image}
                                    name={'Gallery Image'}
                                    id={gallery[0]?._id}
                                    key={index}
                                    // handleDelete={handleDelete}
                                    index={index}
                                />
                                )
                            }
                                )
                                :null
                            }
                            </Row>
                            <div className="control-group form-group drop">
                                <label className="form-label">Gallery Img</label>

                                <DropImg
                                type="file" className="dropify" imgtype="gallery"
                                formik={formik}
                                />
                            </div>
                            <Button variant="secondary" className="me-1" onClick={()=>formik.resetForm()}>Cancel</Button>
                            <Button type="submit" variant="primary" className="me-1" >Submit</Button>
                        </Col>
                    </Card>
                </Col>
            </Row>
        </form>
    </div>
  )
}

export default UpdateGallery

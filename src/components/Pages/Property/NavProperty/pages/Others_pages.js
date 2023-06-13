import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from 'formik'
import * as Yup from "yup";
import { createOthers, updateOthers } from '../../../../../redux/Action/PropertyTypeAction';
import { useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

const Others_pages = ({setAddTeam, editTeam,others}) => {
  
  const params = useParams()
  const dispatch = useDispatch();
  const [mouseHover,setMouseHover] = useState({})
  
  const otherSchema = Yup.object({
      nba:Yup.string().required(),
      nirf:Yup.string().required(),
      nba:Yup.string().required(),
      bengalCreditCard:Yup.string().required(),
      cuet:Yup.string().required(),
      aj_ranking:Yup.string().required()
  })
  
  const {values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({

      initialValues:{
          naac: others?.naac || "",
          nirf: others?.nirf || "",
          nba: others?.nba || "",
          bengalCreditCard: others?.bengalCreditCard || "",
          cuet: others?.cuet || "",
          aj_ranking: others?.aj_ranking || "",
          property_id: params.id,
      },
      // validationSchema:otherSchema,
      onSubmit:values=>{          
          
          // if (editTeam != undefined) {
          //   console.log(values);
          //   dispatch(updateOthers(values));
          //   setAddTeam(false);
          // } else {
          //   console.log(values);
          //   dispatch(createOthers(values));
          //   setAddTeam(false);
          // }
          if (others) {
            console.log(values);
            dispatch(updateOthers(values));
            setAddTeam(false);
          } else {
            console.log(values);
            dispatch(createOthers(values));
            setAddTeam(false);
          }
      }
  })
  console.log(values);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Row>
            <Col>
            <Card>
              {!others
              ?
              <Card.Header>
                <Card.Title as="h3">Add Others</Card.Title>
              </Card.Header>
              :
              null
              }
              <Card.Body>
                  <Row>
                    <section>
                      <div className="row">
                        <div className="col-lg-6">
                          <div>
                            <label className="form-label">NAAC</label>
                            <input
                              type="text"
                              className="form-control required"
                              style={errors.naac&&touched.naac&&{border:'1px solid red'}}
                              placeholder="Please enter Naac"
                              name="naac"
                              onBlur={handleBlur}
                              value={values.naac}
                              onChange={handleChange}
                              onMouseEnter={e=>{console.log('mouse hover');setMouseHover({...mouseHover,naac:'true'})}}
                              onMouseLeave={()=>setMouseHover({...mouseHover,naac:'false'})}
                            />
                            {/* {mouseHover?.naac=='true'&& <span><EditIcon color='disabled'/></span>} */}
                            {errors.naac && touched.naac ? (
                              <div style={{ color: "red" }}>
                                {errors.naac}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <label className="form-label">NIRF</label>
                            <input
                              type="text"
                              className="form-control required"
                              style={errors.nirf&&touched.nirf&&{border:'1px solid red'}}
                              placeholder="Please enter Nirf"
                              name="nirf"
                              onBlur={handleBlur}
                              value={values.nirf}
                              onChange={handleChange}
                              onMouseEnter={e=>{console.log('mouse hover');setMouseHover({...mouseHover,nirf:'true'})}}
                              onMouseLeave={()=>setMouseHover({...mouseHover,nirf:'false'})}
                            />
                            {/* {mouseHover?.nirf=='true'&& <span><EditIcon color='disabled'/></span>} */}
                            {errors.nirf && touched.nirf ? (
                              <div style={{ color: "red" }}>
                                {errors.nirf}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <label className="form-label">NBA</label>
                            <input
                              type="text"
                              className="form-control required"
                              style={errors.nba&&touched.nba&&{border:'1px solid red'}}
                              placeholder="Please enter NBA"
                              name="nba"
                              onBlur={handleBlur}
                              value={values.nba}
                              onChange={handleChange}
                              onMouseEnter={e=>{console.log('mouse hover');setMouseHover({...mouseHover,nba:'true'})}}
                              onMouseLeave={()=>setMouseHover({...mouseHover,nba:'false'})}
                            />
                            {/* {mouseHover?.nba=='true'&& <span><EditIcon color='disabled'/></span>} */}
                            {errors.nba && touched.nba ? (
                              <div style={{ color: "red" }}>
                                {errors.nba}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <label className="form-label">AJ Ranking</label>
                            <input
                              type="text"
                              className="form-control required"
                              style={errors.aj_ranking&&touched.aj_ranking&&{border:'1px solid red'}}
                              placeholder="Please enter AJ ranking"
                              name="aj_ranking"
                              onBlur={handleBlur}
                              value={values.aj_ranking}
                              onChange={handleChange}
                              onMouseEnter={e=>{console.log('mouse hover');setMouseHover({...mouseHover,aj_ranking:'true'})}}
                              onMouseLeave={()=>setMouseHover({...mouseHover,aj_ranking:'false'})}
                            />
                            {/* {mouseHover?.aj_ranking=='true'&& <span><EditIcon color='disabled'/></span>} */}
                            {errors.aj_ranking && touched.aj_ranking ? (
                              <div style={{ color: "red" }}>
                                {errors.aj_ranking}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div htmlFor='bengalCreditCard' className="form-label me-2">
                            Bengal Credit Card
                          </div>
                          <div className="d-flex">
                            <div className='me-3'>
                              <input type="radio" className=''  name="bengalCreditCard" id="bengalCreditCardYes" onChange={handleChange} value={`Yes`} checked={values.bengalCreditCard=='Yes'&&true}/>
                              <label htmlFor="bengalCreditCardYes">Yes</label>
                            </div>
                            <div className='me-3'>
                              <input type="radio" className=''  name="bengalCreditCard" id='bengalCreditCardNo' onChange={handleChange} value={`No`} checked={values.bengalCreditCard=='No'&&true}/>
                              <label htmlFor="bengalCreditCardNo">No</label>
                            </div>
                          </div>
                          {errors.bengalCreditCard && touched.bengalCreditCard ? (
                          <div style={{ color: "red" }}>
                            {errors.bengalCreditCard}
                          </div>
                          ) : null}
                        </div>
                        <div className="col-lg-6">
                            <div htmlFor='cuet'className="form-label me-2">CUET</div>
                            <div className="d-flex">
                              <div className='me-3'>
                                <input type="radio" className=''  name="cuet" id="cuetYes" onChange={handleChange} value={`Yes`} checked={values.cuet=='Yes'&&true}/>
                                <label htmlFor="cuetYes">Yes</label>
                                </div>
                                <div className='me-3'>
                                <input type="radio" className=''  name="cuet" id='cuetNo' onChange={handleChange} value={`No`} checked={values.cuet=='No'&&true}/>
                                <label htmlFor="cuetNo">No</label>
                              </div>
                            </div>
                            {errors.cuet && touched.cuet ? (
                            <div style={{ color: "red" }}>
                                {errors.cuet}
                            </div>
                            ) : null}
                        </div>
                      </div>
                      <Button type="submit" variant="primary" className="mt-3 me-1">
                        {others?'Update':'Submit'}
                      </Button>
                    </section>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
        </Row>
      </form>
    </div>
  )
}

export default Others_pages

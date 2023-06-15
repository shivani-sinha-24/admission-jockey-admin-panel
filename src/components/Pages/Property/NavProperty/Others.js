import React, { useEffect, useState } from 'react'
import PropertyDetails from '../PropertyDetails';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { NavLink,  useParams } from 'react-router-dom';
import Others_pages from './pages/Others_pages';
import { useDispatch, useSelector, } from 'react-redux';
import { getOthers } from '../../../../redux/Action/PropertyTypeAction';

const Others = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [addTeam, setAddTeam] = useState(false);
  const [editTeam, setEditTeam] = useState();
  const  {others}  = useSelector((state) =>({
    others: state?.propertyType?.others?.filter(item => item?.property_id == params.clgid)
  }))
  
  useEffect(() => {
    dispatch(getOthers());
  }, []);

  const setDataForm = () => {
    setEditTeam(others[0]);
  }
  return (
    <>
        <PropertyDetails>
          <>
          {
            addTeam
            ?

              <Others_pages others={others[0]} addTeam={addTeam} setAddTeam={setAddTeam} editTeam={editTeam} />
            
            :
            <Row>
              <Col>
                <Card className="Relatedpost nested-media ">
                  {!others?<Card.Header>
                    <Card.Title>
                      <h1 className="card-title">Others</h1>
                    </Card.Title>
                    <div
                      onClick={() => {
                        setAddTeam(true);
                        setDataForm(); 
                      }}
                      className="ms-auto pageheader-btn"
                    >
                      <Button
                        className="btn btn-primary btn-icon text-white me-3"
                      >
                        <span>
                          <i className="fe fe-plus"></i>&nbsp;
                        {others?.length > 0 ? "Edit" : "Add Others"}
                        </span>
                      </Button>
                    </div>
                  </Card.Header>
                  :
                  <Card.Header>
                  <Card.Title>
                    <h1 className="card-title">Others</h1>
                  </Card.Title>
                  <div
                    onClick={() => {
                      setAddTeam(true);
                      setDataForm(); 
                    }}
                    className="ms-auto pageheader-btn"
                  >
                    {!others?.length&&<Button
                      className="btn btn-primary btn-icon text-white me-3"
                    >
                      <span>
                        <i className="fe fe-plus"></i>&nbsp;
                      { "Add Others"}
                      </span>
                    </Button>}
                  </div>
                </Card.Header>
                  }
                    {others?.map((item, i) => {
                      return <Others_pages key={item._id} setDataForm={setDataForm} others={others[0]} setAddTeam={setAddTeam} editTeam={editTeam} />
                     
                    })}
                  </Card>
              </Col>
            </Row>
          }
            
          </>
      </PropertyDetails>
    </>
  )
}

export default Others

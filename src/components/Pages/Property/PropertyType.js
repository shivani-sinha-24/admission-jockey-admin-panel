import React, { useState } from "react";
import * as datatable from "../../../data/Table/datatable/datatable";
import { Link, useNavigate } from "react-router-dom";
import { Row, Card, Col, Breadcrumb } from "react-bootstrap";
import { StatusModal } from "../../Modal/StatusModal";
import { useEffect } from "react";
import { updatePropertyType,deletePropertyType,getPropertyType} from "../../../redux/Action/PropertyTypeAction";
import { useDispatch, useSelector } from "react-redux";
import { WarningModal } from "../../Modal/WarningModal";
import { PropertyTypeModal } from "../../Modal/PropertyTypeModal";



export default function PropertyType() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { property } = useSelector(state =>({
    property: state?.propertyType?.property

  }));

  console.log(property);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [editProperty, setEditProperty] = useState();
  const [deleteId, setDeleteId] = useState();
  const [show, setShow] = useState(false);

  const handleClickOpen = (scrollType, row) => () => {
    console.log(row);
    setEditProperty(row)
    // setOpen(true);
    setScroll(scrollType);
    //window.location.reload(false);
  };
  
  const handlePropertyUpdate = (row) => () => {
    dispatch(updatePropertyType(row?._id, {...row,type:"property"}));
    dispatch(getPropertyType());
    window.location.reload(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const propertyDeleteAction = (id) => {
    dispatch(deletePropertyType(deleteId))
    dispatch(getPropertyType());
    window.location.reload(false);
  }
  const handleShow = (id) => () => {
    setDeleteId(id)
    setShow(true)
  };
  useEffect(() => {
    dispatch(getPropertyType());
  }, [])
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Property Type</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Property Type
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              List
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Link 
          onClick={handleClickOpen("paper")} 
          to={`${process.env.PUBLIC_URL}/add-property-type`} 
          className="btn btn-primary btn-icon text-white me-3">
            <span>
              <i className="fe fe-plus"></i>&nbsp;
            </span>
            Add Property
          </Link>
          {/* <Link to="#" className="btn btn-success btn-icon text-white">
            <span>
              <i className="fe fe-log-in"></i>&nbsp;
            </span>
            Export
          </Link> */}
        </div>
      </div>



      <Row className=" row-sm">
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Property Type</h3>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <datatable.DataTablesForProperty 
                handlePropertyUpdate={handlePropertyUpdate}
                handleShow={handleShow} userDeleteAction={propertyDeleteAction}
                property={property} handleClickOpen={handleClickOpen} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <PropertyTypeModal editProperty={editProperty} open={open} scroll={scroll} handleClose={handleClose} /> */}
      <WarningModal setShow={setShow} propertyDeleteAction={propertyDeleteAction} show={show} handleShow={handleShow} />
    </div>
  );
}

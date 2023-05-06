import React, { useState } from "react";
import * as datatable from "../../../data/Table/datatable/datatable";
import { Link } from "react-router-dom";
import { Row, Card, Col, Breadcrumb } from "react-bootstrap";
import { StatusModal } from "../../Modal/StatusModal";
import { useEffect } from "react";
import { statusDelete, statusFetch } from "../../../redux/Action/Status";
import { useDispatch, useSelector } from "react-redux";
import { WarningModal } from "../../Modal/WarningModal";
import { PropertyTypeModal } from "../../Modal/PropertyTypeModal";
export default function PropertyType() {
  const dispatch = useDispatch();

  const { property } = useSelector(state =>({
    property: state?.propertyType?.property

  }));
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [editStatus, setEditStatus] = useState();
  const [deleteId, setDeleteId] = useState();
  const [show, setShow] = useState(false);

  const handleClickOpen = (scrollType, row) => () => {
    setEditStatus(row)
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const statusDeleteAction = (id) => {
    dispatch(statusDelete(deleteId))
    dispatch(statusFetch())
  }
  const handleShow = (id) => () => {
    setDeleteId(id)
    setShow(true)
  };
  useEffect(() => {
    dispatch(statusFetch())
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
          <Link onClick={handleClickOpen("paper")} to="#" className="btn btn-primary btn-icon text-white me-3">
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
              <h3 className="card-title">Status</h3>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <datatable.DataTablesForProperty handleShow={handleShow} property={property} handleClickOpen={handleClickOpen} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <PropertyTypeModal editStatus={editStatus} open={open} scroll={scroll} handleClose={handleClose} />
      <WarningModal setShow={setShow} userDeleteAction={statusDeleteAction} show={show} handleShow={handleShow} />
    </div>
  );
}

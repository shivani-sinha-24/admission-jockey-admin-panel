import React, { useEffect, useState } from "react";
import * as datatable from "../../../data/Table/datatable/datatable";
import { Link } from "react-router-dom";
import { Row, Card, Col, Breadcrumb } from "react-bootstrap";
//import { SimpleModal } from "../../Modal/SimpleModal";
import { fetchUserByRole, userDelete, userUpdate } from "../../../redux/Action/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { WarningModal } from "../../Modal/WarningModal";
import { CategoryModal } from "../../Modal/CategoryModal";


export default function DataTables() {
  const dispatch = useDispatch();
  const { users } = useSelector(state => ({
    users: state?.userAuth?.users,
  }));

  const [show, setShow] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [editUser, setEditUser] = useState();
  const [deleteId, setDeleteId] = useState();

  const handleClickOpen = (scrollType, row) => () => {
    setEditUser(row)
    setOpen(true);
    setScroll(scrollType);
  };

  const handleStatusUpdate = (row) => () => {
    dispatch(userUpdate(row?._id, row));
    dispatch(fetchUserByRole(row?.role))
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(fetchUserByRole(1))
  }, [])

  const userDeleteAction = (id) => {
    dispatch(userDelete(deleteId))
    dispatch(fetchUserByRole(1))
  }

  const handleShow = (id) => () => {
    setDeleteId(id)
    setShow(true)
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Category List</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              category
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Category List
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Link onClick={handleClickOpen("paper")} to="#" className="btn btn-primary btn-icon text-white me-3">
            <span>
              <i className="fe fe-plus"></i>&nbsp;
            </span>
            Add Category
          </Link>
          {/* <Link to="#" className="btn btn-success btn-icon text-white">
            <span>
              <i className="fe fe-log-in"></i>&nbsp;
            </span>
            Export
          </Link> */}
        </div>
      </div>
      <Row className="row-sm">
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Category List</h3>
            </Card.Header>
            <Card.Body>
              {/* <div className="table-responsive">
                <datatable.DataTables handleStatusUpdate={handleStatusUpdate} handleShow={handleShow} userDeleteAction={userDeleteAction} handleClickOpen={handleClickOpen} users={users} />
              </div> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      < CategoryModal role={1} editUser={editUser} open={open} scroll={scroll} handleClose={handleClose} />
      <WarningModal  setShow={setShow} userDeleteAction={userDeleteAction} show={show} handleShow={handleShow} />
    </div>
  );
}

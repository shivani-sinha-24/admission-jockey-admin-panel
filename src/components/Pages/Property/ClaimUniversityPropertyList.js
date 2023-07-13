import React, { useEffect, useState } from "react";
import * as datatable from "../../../data/Table/datatable/datatable";
import { Link, NavLink } from "react-router-dom";
import { Row, Card, Col, Breadcrumb } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserByRole, userDelete, userUpdate } from "../../../redux/Action/AuthAction";
import { SimpleModal } from "../../Modal/SimpleModal";
import { WarningModal } from "../../Modal/WarningModal";
import { OtpModal } from "../../Modal/OtpModal";
import { getCollegeList } from "../../../redux/Action/PropertyTypeAction";
import { propertyDelete } from "../../../redux/Action/PropertyAction";
import { ToastContainer, toast } from 'react-toastify';

export default function Editors() {
  const dispatch = useDispatch();
  const { users, college, tab_status } = useSelector(state => ({
    users: state?.userAuth?.loginUser?.user,
    college: state?.propertyType?.college.filter(item => item?.edu_type == "University" && item.isClaimed !== true),
    tab_status: state?.propertyType?.tab_status,
  }));
  const [show, setShow] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [propertyId, setPropertyId] = useState("");
  const [permission, setPermission] = React.useState({});
  const [deleteId, setDeleteId] = useState();

  useEffect(() => {
    dispatch(getCollegeList())
    if (sessionStorage.getItem("permissions") !== null) {
      let permission = JSON.parse(sessionStorage.getItem("permissions"));
      if (Object.keys(permission)) {
        setPermission(permission);
      }
    }
  }, [])


  const handleClickOpen = (scrollType, row) => () => {
    // setEditUser(row)
    // setOpen(true);
    // setScroll(scrollType);
  };
  const handleStatusUpdate = (row) => () => {
    dispatch(userUpdate(row?._id, { ...row, type: "property" }));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const propertyDeleteAction = (id) => {
    dispatch(propertyDelete(deleteId))
    window.location.reload(false);
  }

  useEffect(() => {
    dispatch(fetchUserByRole(2))
  }, [])

  const handleShow = (id) => () => {
    updatePost(id);
  };

  async function updatePost(id) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', authorization: `Bearer ${sessionStorage.getItem("accessToken")}` },
      body: JSON.stringify({ property_id: id, user_id: sessionStorage.getItem("userId") })
    };
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/sendOtpForClaim`, requestOptions);
    const data = await response.json();
    if (data.status_code = 200) {
      setOpen(true);
      setPropertyId(data.data.property_id);
      toast.success(data.message);
    }
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Claim University Property List</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Property
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Claim University Property List
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <Row className=" row-sm">
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Claim University Property List</h3>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <datatable.ClaimProrpertyListTable
                  handleStatusUpdate={handleStatusUpdate}
                  handleShow={handleShow}
                  propertyDeleteAction={propertyDeleteAction}
                  handleClickOpen={handleClickOpen}
                  tab_status={tab_status}
                  college={users?.role && users?.role == 2 ? college?.filter(college => college.created_by_user_id == users?._id) : college}
                  permission={permission} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <OtpModal open={open} scroll={scroll} propertyId={propertyId} userId={sessionStorage.getItem("userId")} handleClose={handleClose} />
      <WarningModal setShow={setShow} propertyDeleteAction={propertyDeleteAction} show={show} handleShow={handleShow} />
    </div>
  );
}

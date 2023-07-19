import React, { useState } from "react";
import * as datatable from "../../../data/Table/datatable/datatable";
import { Link, useNavigate } from "react-router-dom";
import { Row, Card, Col, Breadcrumb } from "react-bootstrap";
import { StatusModal } from "../../Modal/StatusModal";
import { useEffect } from "react";
import { statusDelete, statusFetch } from "../../../redux/Action/Status";
import { fetchSeo ,seoDelete} from "../../../redux/Action/SeoAction";
import { useDispatch, useSelector } from "react-redux";
import { WarningModal } from "../../Modal/WarningModal";

export default function Seo() {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const { users, news,seo } = useSelector(state => ({
        users: state?.userAuth?.users,
        news: state?.news?.news,
        seo: state?.seo?.seo
    }));
    const [show, setShow] = useState(false);
    const [showUserProfile, setShowUserProfile] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [userData, setUserData] = React.useState({});
    const [scroll, setScroll] = React.useState("paper");
    const [editUser, setEditUser] = useState();
    const [deleteId, setDeleteId] = useState();

    const handleClickOpen = (scrollType, row) => () => {
        setEditUser(row)
        setOpen(true);
        setScroll(scrollType);
    };

    // const handleStatusUpdate = (row) => {
    //     dispatch(userUpdate({ ...row, type: "user" }))
    //         .then(() => {
    //             dispatch(fetchUserByRole(2))
    //         })
    //         .catch(err => console.log(err))
    // };


    const newsDeleteAction = () => {
        dispatch(seoDelete(deleteId));
        dispatch(fetchSeo());
    }

    useEffect(() => {
        dispatch(fetchSeo())
    }, [])

    const handleShow = (id) => {
        setDeleteId(id)
        setShow(true)
    };

    const handleOpen = (id) => {
        setShow(true);
        setUserData(id);
    };

    const handleOpenUserModal = (id) => {
        setShowUserProfile(true);
        setUserData(id);
    };
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">All Seo</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Seo
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Seo
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
          <div className="ms-auto pageheader-btn">
            <Link
              to="/seo-add"
              className="btn btn-primary btn-icon text-white me-3"
            >
              <span>
                <i className="fe fe-plus"></i>&nbsp;
              </span>
              Add Seo
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
              <h3 className="card-title">SEO</h3>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <datatable.SeoDataTables
                  handleShow={handleShow}
                  seos={users?.role&&users?.role==2?seo?.filter(status=>seo.created_by_user_id==users?._id):seo}
                  handleClickOpen={handleClickOpen}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <WarningModal
        setShow={setShow}
        propertyDeleteAction={newsDeleteAction}
        show={show}
        handleShow={handleShow}
      />
    </div>
  );
}

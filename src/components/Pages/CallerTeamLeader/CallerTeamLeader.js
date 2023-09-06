import React, { useEffect, useState } from "react";
import * as datatable from "../../../data/Table/datatable/datatable";
import { Link } from "react-router-dom";
import { Row, Card, Col, Breadcrumb } from "react-bootstrap";
import { SimpleModal } from "../../Modal/SimpleModal";
import { fetchUserByRole, userDelete } from "../../../redux/Action/AuthAction";
import { fetchMyTeam } from "../../../redux/Action/WebAction";
import { useDispatch, useSelector } from "react-redux";
import { WarningModal } from "../../Modal/WarningModal";
export default function DataTables() {
    const dispatch = useDispatch();

    const { users, myTeam } = useSelector(state => ({
        users: state?.userAuth?.users,
        myTeam: state?.webSite?.myTeam?.filter((item) => item._id !== sessionStorage.getItem('userId'))
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

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(fetchMyTeam())
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
                    <h1 className="page-title">All Team Members</h1>
                    <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item className="breadcrumb-item" href="#">
                            Team Members
                        </Breadcrumb.Item>
                        <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
                            All Team Members
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="ms-auto pageheader-btn">
                    <Link to="/give-quiries-callers" className="btn btn-primary btn-icon text-white me-3">
                        <span>
                            <i className="fe fe-plus"></i>&nbsp;
                        </span>
                        Give Quiries
                    </Link>
                </div>
            </div>



            <Row className=" row-sm">
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h3 className="card-title">All Team Members</h3>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <datatable.MyTeamTable handleShow={handleShow} userDeleteAction={userDeleteAction} handleClickOpen={handleClickOpen} myTeam={myTeam} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <SimpleModal editUser={editUser} open={open} scroll={scroll} handleClose={handleClose} />
            <WarningModal setShow={setShow} userDeleteAction={userDeleteAction} show={show} handleShow={handleShow} />
        </div>
    );
}

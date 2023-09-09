import React, { useEffect, useState } from "react";
import * as datatable from "../../../data/Table/datatable/datatable";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Row, Card, Col, Breadcrumb } from "react-bootstrap";
import { SimpleModal } from "../../Modal/SimpleModal";
import { fetchUserByRole, userDelete } from "../../../redux/Action/AuthAction";
import { fetchMyTeam, fetchTeam } from "../../../redux/Action/WebAction";
import { useDispatch, useSelector } from "react-redux";
import { WarningModal } from "../../Modal/WarningModal";
import axios from 'axios'
import API from "../../../service/API";
import { toast } from "react-toastify";
export default function DataTables() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {id} = useParams()

    const { users, myTeam, team } = useSelector(state => ({
        users: state?.userAuth?.users,
        myTeam: state?.webSite?.myTeam?.filter((item) => item._id !== sessionStorage.getItem('userId')),
        team: state?.webSite?.team?.map(item=>item)
        // team: state?.webSite?.team?.map(item=>item.team)
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
        dispatch(fetchTeam(sessionStorage.getItem("name")))
    }, [])

    const userDeleteAction = (id) => {
        dispatch(userDelete(deleteId))
        dispatch(fetchUserByRole(1))
    }

    const handleShow = (id) => () => {
        setDeleteId(id)
        setShow(true)
    };

    const [query,setQuery] = useState()
    const findQueryForUpdate = () => {
        API.put(`${process.env.REACT_APP_API_BASE_URL}/findQueryForUpdate`,{id})
        .then(res=> res?.data && setQuery(res?.data) )
        .catch(err=>{})
    }

    console.log('query :',query)
    // const getQueriesAssigned = () => {
    //     API.post(`${process.env.REACT_APP_API_BASE_URL}/getQueriesAssigned`,{id})
    //     // .then(res=> res?.data?.length>0 ? navigate(`/query-update/${res?.data[0]?._id}`) : toast.error("No user query is assigned to this caller"))
    //     .then(res=> console.log(res?.data))
    //     .catch(err=>{})
    // }

    useEffect(()=>{findQueryForUpdate()},[])

    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title">All Queries</h1>
                    <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item className="breadcrumb-item" href="#">
                            Queries
                        </Breadcrumb.Item>
                        <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
                            All Queries
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                {/* <div className="ms-auto pageheader-btn">
                    <Link to="/give-quiries-callers" className="btn btn-primary btn-icon text-white me-3">
                        <span>
                            <i className="fe fe-plus"></i>&nbsp;
                        </span>
                        Give Quiries
                    </Link>
                </div> */}
            </div>



            <Row className=" row-sm">
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h3 className="card-title">All Queries</h3>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <datatable.QueryTable handleShow={handleShow} userDeleteAction={userDeleteAction} handleClickOpen={handleClickOpen} myTeam={query} findQueryForUpdate={findQueryForUpdate} />
                                {/* <datatable.TeamTable handleShow={handleShow} userDeleteAction={userDeleteAction} handleClickOpen={handleClickOpen} myTeam={team} /> */}
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

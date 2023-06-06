import React, { useEffect, useState } from "react";
// import * as datatable from "../../../data/Table/datatable/datatable";
import * as datatable from "../../../data/Table/datatable/datatable";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Row, Card, Col, Breadcrumb } from "react-bootstrap";
//import { SimpleModal } from "../../Modal/SimpleModal";
import { fetchUserByRole, userDelete, userUpdate } from "../../../redux/Action/AuthAction";
import { getCategory, categoryDelete, categoryRestore } from "../../../redux/Action/CategoryAction";
import { useDispatch, useSelector } from "react-redux";
import { RestoreModal } from "../../Modal/RestoreModal";
import { CategoryModal } from "../../Modal/CategoryModal";


export default function DataTables() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { users, tab_status, category, college } = useSelector(state => ({
        users: state?.userAuth?.users,
        tab_status: state?.propertyType?.tab_status,
        college: state?.propertyType?.college.filter(item => item?.edu_type == "College"),
        category: state?.category?.category.filter(item => item?.softDelete == true),
    }));

    const [show, setShow] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState("paper");
    const [editUser, setEditUser] = useState();
    const [deleteId, setDeleteId] = useState();

    const handleClickOpen = (scrollType, row) => () => {
        setEditUser(row);
        // setOpen(true);
        // setScroll(scrollType);
    };

    const handleStatusUpdate = (row) => () => {
        dispatch(userUpdate(row?._id, row));
        dispatch(fetchUserByRole(row?.role))
    };
    const propertyDeleteAction = () => {
        dispatch(categoryRestore(deleteId));
        // dispatch(categoryDelete(deleteId));
        dispatch(getCategory());
    }

    const handleClose = () => {
        setOpen(false);
    };

    // useEffect(() => {
    //   dispatch(fetchUserByRole(1))
    // }, [])
    useEffect(() => {
        dispatch(getCategory());
    // }, [propertyDeleteAction])
    }, [])

    const userDeleteAction = (id) => {

    }

    const handleShow = (id) => () => {
        setDeleteId(id)
        setShow(true)
    };

    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title"> Delete Category List</h1>
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
                </div>
            </div>
            <Row className="row-sm">
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h3 className="card-title">Delete Category List</h3>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <datatable.DataTablesForDeleteCategoryList
                                    handleStatusUpdate={handleStatusUpdate}
                                    handleShow={handleShow}
                                    propertyDeleteAction={propertyDeleteAction}
                                    handleClickOpen={handleClickOpen}
                                    tab_status={tab_status}
                                    category={category} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <CategoryModal role={1} editUser={editUser} open={open} scroll={scroll} handleClose={handleClose} />
            <RestoreModal setShow={setShow} propertyDeleteAction={propertyDeleteAction} show={show} handleShow={handleShow} />
        </div>
    );
}

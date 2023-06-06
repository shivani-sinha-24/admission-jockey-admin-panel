import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import differenceBy from "lodash/differenceBy";
import { tableDataItems } from "./datatables";
import {
  Button,
  Dropdown,
  DropdownButton,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import moment from "moment";
import "react-data-table-component-extensions/dist/index.css";
import { Link, NavLink } from "react-router-dom";
import { borderRadius } from "@mui/system";
import parse from 'html-react-parser';


export function Basicdatatable() {
  const columns = [
    {
      name: "S.NO",
      selector: (row) => [row.SNO],
      sortable: true,
    },
    {
      name: "NAME",
      selector: (row) => [row.NAME],
      sortable: true,
    },
    {
      name: "LAST NAME",
      selector: (row) => [row.LASTNAME],
      sortable: true,
    },
    {
      name: "POSITION",
      selector: (row) => [row.POSITION],
      sortable: true,
    },
    {
      name: "DATE",
      selector: (row) => [row.DATE],
      sortable: true,
    },
    {
      name: " SALARY",
      selector: (row) => [row.SALARY],
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => [row.EMAIL],
      sortable: true,
    },
  ];
  const data = [
    {
      id: "1",
      SNO: 1,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "i.bond@datatables.net",
    },
    {
      id: "2",
      SNO: 2,
      NAME: "Zonna",
      LASTNAME: "Jond",
      POSITION: "Accountant",
      DATE: "2012/02/21",
      SALARY: "$343,654",
      EMAIL: "a.bond@datatables.net",
    },
    {
      id: "3",
      SNO: 3,
      NAME: "Nonna",
      LASTNAME: "Tond",
      POSITION: "Chief Executive Officer",
      DATE: "2012/02/21",
      SALARY: "$743,654",
      EMAIL: "s.bond@datatables.net",
    },
    {
      id: "4",
      SNO: 4,
      NAME: "Bonna",
      LASTNAME: "Oond",
      POSITION: "Chief Operating Officer",
      DATE: "2012/02/21",
      SALARY: "$643,654",
      EMAIL: "w.bond@datatables.net",
    },
    {
      id: "5",
      SNO: 5,
      NAME: "Honna",
      LASTNAME: "Pond",
      POSITION: "Data Coordinator",
      DATE: "2012/02/21",
      SALARY: "$243,654",
      EMAIL: "e.bond@datatables.net",
    },
    {
      id: "6",
      SNO: 6,
      NAME: "Fonna",
      LASTNAME: "Nond",
      POSITION: "Developer",
      DATE: "2012/02/21",
      SALARY: "$543,654",
      EMAIL: "r.bond@datatables.net",
    },
    {
      id: "7",
      SNO: 7,
      NAME: "Aonna",
      LASTNAME: "Xond",
      POSITION: "Development lead",
      DATE: "2012/02/21",
      SALARY: "$843,654",
      EMAIL: "g.bond@datatables.net",
    },
    {
      id: "8",
      SNO: 8,
      NAME: "Qonna",
      LASTNAME: "Vond",
      POSITION: "Director",
      DATE: "2012/02/21",
      SALARY: "$743,654",
      EMAIL: "x.bond@datatables.net",
    },
    {
      id: "9",
      SNO: 9,
      NAME: "Jond",
      LASTNAME: "Zonna",
      POSITION: "Marketing Officer",
      DATE: "2012/02/21",
      SALARY: "$543,654",
      EMAIL: "k.bond@datatables.net",
    },
    {
      id: "10",
      SNO: 10,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "s.bond@datatables.net",
    },
    {
      id: "11",
      SNO: 11,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "b.bond@datatables.net",
    },
    {
      id: "12",
      SNO: 12,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "o.bond@datatables.net",
    },
    {
      id: "13",
      SNO: 13,
      NAME: "Qonna",
      LASTNAME: "Pond",
      POSITION: "Data Coordinator",
      DATE: "2012/02/21",
      SALARY: "$243,654",
      EMAIL: "q.bond@datatables.net",
    },
    {
      id: "14",
      SNO: 14,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "m.bond@datatables.net",
    },
  ];

  const tableData = {
    columns,
    data,
  };

  return (
    <div className="table">
      <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          striped={true}
          center={true}
          persistTableHead
          pagination
          highlightOnHover
        />
      </DataTableExtensions>
    </div>
  );
}

export const DataTables = ({
  handleShow,
  userDeleteAction,
  handleStatusUpdate,
  handleClickOpen,
  handleOpen,
  users,
  role,
  hello,
}) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(tableDataItems);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleOpenModal = (id) => {
    handleOpen(id);
  };
  const columns = [
    // {
    //   name: "AVATAR",
    //   cell: (row) => (
    //     <span >
    //       <img
    //         crossorigin="anonymous"
    //         width={50}
    //         height={50}
    //         style={{borderRadius:"360px"}}
    //         src={`${process.env.REACT_APP_API_BASE_URL}/images/${row?.image}`}
    //       />
    //     </span>
    //   ),
    //   sortable: true,
    // },
    {
      name: "NAME",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => [row.email],
      sortable: true,
    },
    {
      name: " CONTACT",
      selector: (row) => [row.contact_no],
      sortable: true,
    },
    {
      name: "DATE",
      selector: (row) => [moment(row.created_at).format("MMM Do YY")],
      sortable: true,
    },
    // {
    //   name: "STATUS",
    //   selector: (row) => [row.status],
    //   sortable: true,
    //   cell: (row) => (
    //     <DropdownButton
    //       type="button"
    //       className=" btn-default btn-pill "
    //       variant=""
    //       title={
    //         users?.tab_status?.filter((item) => item?.name == row?.status)[0]
    //           ?.name
    //       }
    //       style={{
    //         background: users?.tab_status?.filter(
    //           (item) => item?.name == row?.status
    //         )[0]?.color_code,
    //       }}
    //     >
    //       {users?.tab_status?.map((item, i) => {
    //         return (
    //           <Dropdown.Item
    //             onClick={handleStatusUpdate({ ...row, status: item?.name })}
    //           >
    //             {item?.name}
    //           </Dropdown.Item>
    //         );
    //       })}
    //     </DropdownButton>
    //   ),
    // },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          {/* <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Link
              onClick={handleClickOpen("paper", row)}
              className="btn btn-primary btn-sm rounded-11 me-2"
            >
              <i>
                <svg
                  className="table-edit"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Link
              onClick={
                //userDeleteAction(row?._id)
                handleShow(row?._id)
              }
              to="#"
              className="btn btn-danger btn-sm rounded-11"
            >
              <i>
                <svg
                  className="table-delete"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger> */}
          <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>} >
            <NavLink
              // to={`/property-list/${row._id}`}
              className="btn btn-yellow btn-sm rounded-11 me-2"
            >
              <i
                className="fe fe-user"
                style={{ fontSize: "1.3rem" }}
                aria-hidden="true"
                onClick={() => handleOpenModal(row)}
              ></i>
            </NavLink>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const columnsCafe = [
    // {
    //   name: "S.NO",
    //   selector: (row) => [row.SNO],
    //   sortable: true,
    // },
    {
      name: "NAME",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => [row.email],
      sortable: true,
    },
    {
      name: " CONTACT",
      selector: (row) => [row.contact_no],
      sortable: true,
    },
    // {
    //   name: "ALT CONTACT",
    //   selector: (row) => [row.alt_contact],
    //   sortable: true,
    // },
    {
      name: "CAFE NAME",
      selector: (row) => [row.cafename],
      sortable: true,
    },
    // {
    //   name: "DATE",
    //   selector: (row) => [moment(row.created_at).format("MMM Do YY")],
    //   sortable: true,
    // },
    // {
    //   name: "CAFE NAME",
    //   selector: (row) => [row.cafename],
    //   sortable: true,
    // },
    // {
    //   name: "CAFE CITY",
    //   selector: (row) => [row.cafecity],
    //   sortable: true,
    // },
    // {
    //   name: "STATUS",
    //   selector: (row) => [row.status],
    //   sortable: true,
    //   cell: (row) => (
    //     <DropdownButton
    //       type="button"
    //       className=" btn-default btn-pill "
    //       variant=""
    //       title={
    //         users?.tab_status?.filter((item) => item?.name == row?.status)[0]
    //           ?.name
    //       }
    //       style={{
    //         background: users?.tab_status?.filter(
    //           (item) => item?.name == row?.status
    //         )[0]?.color_code,
    //       }}
    //     >
    //       {users?.tab_status?.map((item, i) => {
    //         console.log(users);
    //         return (
    //           <Dropdown.Item
    //             onClick={handleStatusUpdate({ ...row, status: item?.name })}
    //           >
    //             {item?.name}
    //           </Dropdown.Item>
    //         );
    //       })}
    //     </DropdownButton>
    //   ),
    // },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          {/* <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Link
              onClick={handleClickOpen("paper", row)}
              to="#"
              className="btn btn-primary btn-sm rounded-11 me-2"
            >
              <i>
                <svg
                  className="table-edit"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Link
              onClick={
                //userDeleteAction(row?._id)
                handleShow(row?._id)
              }
              to="#"
              className="btn btn-danger btn-sm rounded-11"
            >
              <i>
                <svg
                  className="table-delete"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger> */}
          <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
            <NavLink
              // to={`/property-list/${row._id}`}
              className="btn btn-yellow btn-sm rounded-11 me-2"
            >
              <i
                className="fe fe-user"
                style={{ fontSize: "1.3rem" }}
                aria-hidden="true"
                onClick={() => handleOpenModal(row)}
              ></i>
            </NavLink>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.SNO
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, "SNO"));
      }
    };

    return (
      <Button key="delete" onClick={handleDelete} icon="true">
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);
  const tableDatas = {
    columns,
    data,
  };
  console.log(users, "users?.users");
  return (
    // <DataTableExtensions {...tableDatas}>
    <DataTable
      title
      columns={role == 4 ? columnsCafe : columns}
      data={users?.users}
      selectableRows
      contextActions={contextActions}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      pagination
    />
    // </DataTableExtensions>
  );
};

export const EditorDataTables = ({
  handleShow,
  userDeleteAction,
  handleStatusUpdate,
  handleClickOpen,
  handleOpenUserModal,
  handleOpen,
  users,
  role,
  hello,
}) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(tableDataItems);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleOpenModal = (id) => {
    handleOpenUserModal(id);
  };
  const columns = [
    {
      name: "NAME",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => [row.email],
      sortable: true,
    },
    {
      name: " CONTACT",
      selector: (row) => [row.contact_no],
      sortable: true,
    },
    {
      name: "DATE",
      selector: (row) => [moment(row.created_at).format("MMM Do YY")],
      sortable: true,
    },
    {
      name: "USER STATUS",
      selector: (row) => [row.tab_status],
      sortable: true,
      cell: (row) => (
        <select type="button" onChange={(e) => handleStatusUpdate({ ...row, "tab_status": e.target.value })} value={row?.tab_status ? row.tab_status : ""} style={{ borderRadius: "12px" }} >
          <option value="Active">Active</option>
          <option value="Inactive">InActive</option>
        </select>
      ),
    },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="" style={{ width: "409px" }}>
          <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
            <NavLink
              className="btn btn-yellow btn-sm rounded-11 me-2"
            >
              {/* <i
                className="fa fa-eye"
                style={{ fontSize: "1.3rem" }}
                aria-hidden="true"

              ></i> */}
              <i className="fe fe-user"
                style={{ fontSize: "1.3rem" }}
                aria-hidden="true"
                onClick={() => handleOpenUserModal(row)}></i>
            </NavLink>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <NavLink
              to={`/editor-update/${row._id}`}
              className="btn btn-primary btn-sm rounded-11 me-2"
            >
              <i>
                <svg
                  className="table-edit"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </i>
            </NavLink>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Link
              onClick={
                () => handleShow(row?._id)
              }
              to="#"
              className="btn btn-danger btn-sm rounded-11"
            >
              <i>
                <svg
                  className="table-delete"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const columnsCafe = [
    {
      name: "NAME",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => [row.email],
      sortable: true,
    },
    {
      name: " CONTACT",
      selector: (row) => [row.contact_no],
      sortable: true,
    },
    // {
    //   name: "ALT CONTACT",
    //   selector: (row) => [row.alt_contact],
    //   sortable: true,
    // },
    {
      name: "CAFE NAME",
      selector: (row) => [row.cafename],
      sortable: true,
    },
    // {
    //   name: "DATE",
    //   selector: (row) => [moment(row.created_at).format("MMM Do YY")],
    //   sortable: true,
    // },
    // {
    //   name: "CAFE NAME",
    //   selector: (row) => [row.cafename],
    //   sortable: true,
    // },
    // {
    //   name: "CAFE CITY",
    //   selector: (row) => [row.cafecity],
    //   sortable: true,
    // },
    // {
    //   name: "STATUS",
    //   selector: (row) => [row.status],
    //   sortable: true,
    //   cell: (row) => (
    //     <DropdownButton
    //       type="button"
    //       className=" btn-default btn-pill "
    //       variant=""
    //       title={
    //         users?.tab_status?.filter((item) => item?.name == row?.status)[0]
    //           ?.name
    //       }
    //       style={{
    //         background: users?.tab_status?.filter(
    //           (item) => item?.name == row?.status
    //         )[0]?.color_code,
    //       }}
    //     >
    //       {users?.tab_status?.map((item, i) => {
    //         console.log(users);
    //         return (
    //           <Dropdown.Item
    //             onClick={handleStatusUpdate({ ...row, status: item?.name })}
    //           >
    //             {item?.name}
    //           </Dropdown.Item>
    //         );
    //       })}
    //     </DropdownButton>
    //   ),
    // },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
            <NavLink
              className="btn btn-yellow btn-sm rounded-11 me-2"
            >
              <i
                className="fa fa-eye"
                style={{ fontSize: "1.3rem" }}
                aria-hidden="true"
                onClick={() => handleOpenModal(row)}
              ></i>
            </NavLink>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.SNO
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, "SNO"));
      }
    };

    return (
      <Button key="delete" onClick={handleDelete} icon="true">
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);
  const tableDatas = {
    columns,
    data,
  };
  console.log(users, "users?.users");
  return (
    // <DataTableExtensions {...tableDatas}>
    <DataTable
      title
      columns={role == 4 ? columnsCafe : columns}
      data={users?.users}
      selectableRows
      contextActions={contextActions}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      pagination
    />
    // </DataTableExtensions>
  );
};

export const CallerDataTables = ({
  handleShow,
  userDeleteAction,
  handleStatusUpdate,
  handleClickOpen,
  handleOpenUserModal,
  handleOpen,
  users,
  role,
  hello,
}) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(tableDataItems);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleOpenModal = (id) => {
    handleOpenUserModal(id);
  };
  const columns = [
    {
      name: "NAME",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => [row.email],
      sortable: true,
    },
    {
      name: " CONTACT",
      selector: (row) => [row.contact_no],
      sortable: true,
    },
    {
      name: "USER STATUS",
      selector: (row) => [row.tab_status],
      sortable: true,
      cell: (row) => (
        <select type="button" onChange={(e) => handleStatusUpdate({ ...row, "tab_status": e.target.value })} value={row?.tab_status ? row.tab_status : ""} style={{ borderRadius: "12px" }} >
          <option value="Active">Active</option>
          <option value="Inactive">InActive</option>
        </select>
      ),
    },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="" style={{ width: "409px" }}>
          <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
            <NavLink
              className="btn btn-yellow btn-sm rounded-11 me-2"
            >
              <i
                className="fe fe-user"
                style={{ fontSize: "1.3rem" }}
                aria-hidden="true"
                onClick={() => handleOpenUserModal(row)}
              ></i>
            </NavLink>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <NavLink
              to={`/caller-update/${row._id}`}
              className="btn btn-primary btn-sm rounded-11 me-2"
            >
              <i>
                <svg
                  className="table-edit"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </i>
            </NavLink>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Link
              onClick={
                () => handleShow(row?._id)
              }
              to="#"
              className="btn btn-danger btn-sm rounded-11"
            >
              <i>
                <svg
                  className="table-delete"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const columnsCafe = [
    {
      name: "NAME",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => [row.email],
      sortable: true,
    },
    {
      name: " CONTACT",
      selector: (row) => [row.contact_no],
      sortable: true,
    },
    {
      name: "CAFE NAME",
      selector: (row) => [row.cafename],
      sortable: true,
    },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
            <NavLink
              className="btn btn-yellow btn-sm rounded-11 me-2"
            >
              <i
                className="fa fa-eye"
                style={{ fontSize: "1.3rem" }}
                aria-hidden="true"
                onClick={() => handleOpenModal(row)}
              ></i>
            </NavLink>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.SNO
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, "SNO"));
      }
    };

    return (
      <Button key="delete" onClick={handleDelete} icon="true">
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);
  const tableDatas = {
    columns,
    data,
  };
  console.log(users, "users?.users");
  return (
    // <DataTableExtensions {...tableDatas}>
    <DataTable
      title
      columns={role == 4 ? columnsCafe : columns}
      data={users?.users}
      selectableRows
      contextActions={contextActions}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      pagination
    />
    // </DataTableExtensions>
  );
};

export const CallerTeamLeaderDataTables = ({
  handleShow,
  handleStatusUpdate,
  handleOpenUserModal,
  teamLeaders,
  role
}) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(tableDataItems);
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleOpenModal = (id) => {
    handleOpenUserModal(id);
  };
  const columns = [
    {
      name: "NAME",
      selector: (row) => [row.teamName],
      sortable: true,
    },
    {
      name: "Team Leader",
      selector: (row) => [row.teamLeader],
      sortable: true,
    },
    // {
    //   name: " CONTACT",
    //   selector: (row) => [row.contact_no],
    //   sortable: true,
    // },
    // {
    //   name: "USER STATUS",
    //   selector: (row) => [row.tab_status],
    //   sortable: true,
    //   cell: (row) => (
    //     <select type="button" onChange={(e) => handleStatusUpdate({ ...row, "tab_status": e.target.value })} value={row?.tab_status ? row.tab_status : ""} style={{ borderRadius: "12px" }} >
    //       <option value="Active">Active</option>
    //       <option value="Inactive">InActive</option>
    //     </select>
    //   ),
    // },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="" style={{ width: "409px" }}>
          <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
            <NavLink
              className="btn btn-yellow btn-sm rounded-11 me-2"
            >
              <i
                className="fe fe-user"
                style={{ fontSize: "1.3rem" }}
                aria-hidden="true"
                onClick={() => handleOpenUserModal(row)}
              ></i>
            </NavLink>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <NavLink
              to={`/update_callerTeamList/${row._id}`}
              className="btn btn-primary btn-sm rounded-11 me-2"
            >
              <i>
                <svg
                  className="table-edit"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </i>
            </NavLink>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Link
              onClick={
                () => handleShow(row?._id)
              }
              to="#"
              className="btn btn-danger btn-sm rounded-11"
            >
              <i>
                <svg
                  className="table-delete"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const columnsCafe = [
    {
      name: "NAME",
      selector: (row) => [row.teamName],
      sortable: true,
    },
    {
      name: "Team Leader",
      selector: (row) => [row.teamLeader],
      sortable: true,
    },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
            <NavLink
              className="btn btn-yellow btn-sm rounded-11 me-2"
            >
              <i
                className="fa fa-eye"
                style={{ fontSize: "1.3rem" }}
                aria-hidden="true"
                onClick={() => handleOpenModal(row)}
              ></i>
            </NavLink>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.SNO
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, "SNO"));
      }
    };

    return (
      <Button key="delete" onClick={handleDelete} icon="true">
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);
  const tableDatas = {
    columns,
    data,
  };
  return (
    <DataTable
      title
      columns={role == 4 ? columnsCafe : columns}
      data={teamLeaders}
      selectableRows
      contextActions={contextActions}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      pagination
    />
  );
};



export const ProrpertyListTable = ({
  handleShow,
  tab_status,
  handleStatusUpdate,
  handleClickOpen,
  college,
  role,
  hello,
}) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(tableDataItems);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);
  const columns = [
    // {
    //   name: "LOGO",
    //   cell: (row) => (
    //     <span>
    //       <img
    //         crossorigin="anonymous"
    //         src={`${process.env.REACT_APP_API_BASE_URL}/${row?.logo}`}
    //       />
    //     </span>
    //   ),
    //   sortable: true,
    // },
    {
      name: "NAME",
      selector: (row) => [row.name],
      sortable: true,
    },

    {
      name: "COLLEGE TYPE",
      selector: (row) => [row.college_type],
      sortable: true,
    },
    {
      name: "COLLEGE EMAIL",
      selector: (row) => [row.email],
      sortable: true,
    },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="" style={{ width: "409px" }}>
          <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
            <NavLink
              to={`/property-list/${row._id}/${row.edu_type}`}
              className="btn btn-yellow btn-sm rounded-11 me-2"
            >
              <i
                className="fa fa-eye"
                style={{ fontSize: "1.3rem" }}
                aria-hidden="true"
              ></i>
            </NavLink>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <NavLink
              to={`/update-propertys/${row._id}`}
              className="btn btn-primary btn-sm rounded-11 me-2"
            >
              <i>
                <svg
                  className="table-edit"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </i>
            </NavLink>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Link
              onClick={
                handleShow(row?._id)
              }
              to="#"
              className="btn btn-danger btn-sm rounded-11"
            >
              <i>
                <svg
                  className="table-delete"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.SNO
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, "SNO"));
      }
    };

    return (
      <Button key="delete" onClick={handleDelete} icon="true">
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);
  const tableDatas = {
    columns,
    data,
  };

  return (
    // <DataTableExtensions {...tableDatas}>
    <DataTable
      title
      columns={columns}
      data={college}
      selectableRows
      contextActions={contextActions}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      pagination
    />
    // </DataTableExtensions>
  );
};

export const DataTablesForProperty = ({
  handleShow,
  userDeleteAction,
  handleClickOpen,
  property,
  role,
  hello,
}) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(tableDataItems);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const columns = [
    // {
    //   name: "S.NO",
    //   selector: (row) => [row.SNO],
    //   sortable: true,
    // },
    {
      name: "PROPERTY NAME",
      selector: (row) => [row.property_name],
      sortable: true,
    },
    {
      name: "PROPERTY DESC",
      selector: (row) => [parse(row.property_desc)],
      sortable: true,
    },

    {
      name: "DATE",
      selector: (row) => [moment(row.created_at).format("MMM Do YY")],
      sortable: true,
    },
    // {
    //   name: "STATUS",
    //   selector: (row) => [row.property],
    //   sortable: true,
    //   cell: row => <span className="">
    //     {row.property == 1 ? <span style={{ color: "green" }}>ACTIVE</span> : <span style={{ color: "red" }}>INACTIVE</span>}
    //   </span>
    // },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Link
              // onClick={handleClickOpen("paper", row)}
              to={`${process.env.PUBLIC_URL}/update-property-type/${row._id}`}  
              className="btn btn-primary btn-sm rounded-11 me-2"
            >
              <i>
                <svg
                  className="table-edit"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Link
              onClick={
                //userDeleteAction(row?._id)
                handleShow(row?._id)
              }
              to="#"
              className="btn btn-danger btn-sm rounded-11"
            >
              <i>
                <svg
                  className="table-delete"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.SNO
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, "SNO"));
      }
    };

    return (
      <Button key="delete" onClick={handleDelete} icon="true">
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);
  const tableDatas = {
    columns,
    data,
  };

  return (
    // <DataTableExtensions {...tableDatas}>
    <DataTable
      title
      columns={columns}
      data={property}
      selectableRows
      contextActions={contextActions}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      pagination
    />
    // </DataTableExtensions>
  );
};

export const DataTablesForStatus = ({
  handleShow,
  userDeleteAction,
  handleClickOpen,
  status,
  role,
  hello,
}) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(tableDataItems);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const columns = [
    // {
    //   name: "S.NO",
    //   selector: (row) => [row.SNO],
    //   sortable: true,
    // },
    {
      name: "NAME",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "DESCRIPTION",
      selector: (row) => [parse(row.description)],
      sortable: true,
    },
    {
      name: "COLOR CODE",
      selector: (row) => [row.color_code],
      sortable: true,
      cell: (row) => (
        <span
          style={{ background: row.color_code, padding: "4px 22px 4px 22px" }}
        >
          {row.color_code}
        </span>
      ),
    },

    {
      name: "DATE",
      selector: (row) => [moment(row.created_at).format("MMM Do YY")],
      sortable: true,
    },
    // {
    //   name: "STATUS",
    //   selector: (row) => [row.status],
    //   sortable: true,
    //   cell: row => <span className="">
    //     {row.status == 1 ? <span style={{ color: "green" }}>ACTIVE</span> : <span style={{ color: "red" }}>INACTIVE</span>}
    //   </span>
    // },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Link
              // onClick={handleClickOpen("paper", row)}
              to={`${process.env.PUBLIC_URL}/update-status/${row._id}`} 
              className="btn btn-primary btn-sm rounded-11 me-2"
            >
              <i>
                <svg
                  className="table-edit"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Link
              onClick={
                //userDeleteAction(row?._id)
                handleShow(row?._id)
              }
              to="#"
              className="btn btn-danger btn-sm rounded-11"
            >
              <i>
                <svg
                  className="table-delete"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.SNO
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, "SNO"));
      }
    };

    return (
      <Button key="delete" onClick={handleDelete} icon="true">
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);
  const tableDatas = {
    columns,
    data,
  };

  return (
    // <DataTableExtensions {...tableDatas}>
    <DataTable
      title
      columns={columns}
      data={status}
      selectableRows
      contextActions={contextActions}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      pagination
    />
    // </DataTableExtensions>
  );
};

export const DataTablesForCategory = ({
  handleShow,
  userDeleteAction,
  handleClickOpen,
  status,
  category,
  role,
  hello,
}) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(tableDataItems);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const columns = [
    {
      name: "Icon",
      cell: (row) => (
        <span >
          <img
            crossorigin="anonymous"
            width={40}
            height={40}
            style={{ borderRadius: "360px" }}
            src={`${process.env.REACT_APP_API_BASE_URL}/${row?.logo}`}
          />
        </span>
      ),
      sortable: true,
    },
    {
      name: "NAME",
      cell: (row) => (
        <>
          {row.parentCount > 0 ? row.branch.map(() => {
            return <p>&#8722;</p>;
          })
            :
            ""}
          <p>{row.name}</p></>
      ),
      sortable: true,
    },
    {
      name: "PARENT",
      selector: (row) => [row.parent],
      sortable: true,
    },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            {/* <Link
              onClick={handleClickOpen("paper", row)}
              className="btn btn-primary btn-sm rounded-11 me-2"
            > */}
            <NavLink
              to={`/update-category/${row._id}`}
              className="btn btn-primary btn-sm rounded-11 me-2"
            >
              <i>
                <svg
                  className="table-edit"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </i>
            </NavLink>
            {/* </Link> */}
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Link
              onClick={
                handleShow(row?._id)
              }
              to="#"
              className="btn btn-danger btn-sm rounded-11"
            >
              <i>
                <svg
                  className="table-delete"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.SNO
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, "SNO"));
      }
    };

    return (
      <Button key="delete" onClick={handleDelete} icon="true">
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);
  const tableDatas = {
    columns,
    data,
  };

  return (
    // <DataTableExtensions {...tableDatas}>
    <DataTable
      title
      columns={columns}
      data={category}
      selectableRows
      contextActions={contextActions}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      pagination
    />
    // </DataTableExtensions>
  );
};

export const DataTablesForDeleteCategoryList = ({
  handleShow,
  userDeleteAction,
  handleClickOpen,
  status,
  category,
  role,
  hello,
}) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(tableDataItems);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const columns = [
    {
      name: "Icon",
      cell: (row) => (
        <span >
          <img
            crossorigin="anonymous"
            width={40}
            height={40}
            style={{ borderRadius: "360px" }}
            src={`${process.env.REACT_APP_API_BASE_URL}/${row?.logo}`}
          />
        </span>
      ),
      sortable: true,
    },
    {
      name: "NAME",
      cell: (row) => (
        <>
          {row.parentCount > 0 ? row.branch.map(() => {
            return <p>&#8722;</p>;
          })
            :
            ""}
          <p>{row.name}</p></>
      ),
      sortable: true,
    },
    {
      name: "PARENT",
      selector: (row) => [row.parent],
      sortable: true,
    },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          {/* <OverlayTrigger placement="top" overlay={<Tooltip>Restore</Tooltip>}>
            <NavLink
              to={`/update-category/${row._id}`}
              className="btn btn-primary btn-sm rounded-11 me-2"
            >
              <i>
                <svg
                  className="table-edit"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </i>
            </NavLink>
          </OverlayTrigger> */}
          <OverlayTrigger placement="top" overlay={<Tooltip>Restore</Tooltip>}>
            <Link
              onClick={
                handleShow(row?._id)
              }
              to="#"
              className="btn btn-danger btn-sm rounded-11"
            >
              <i>
                <svg
                  className="table-edit"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.SNO
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, "SNO"));
      }
    };

    return (
      <Button key="delete" onClick={handleDelete} icon="true">
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);
  const tableDatas = {
    columns,
    data,
  };

  return (
    // <DataTableExtensions {...tableDatas}>
    <DataTable
      title
      columns={columns}
      data={category}
      selectableRows
      contextActions={contextActions}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      pagination
    />
    // </DataTableExtensions>
  );
};


export const UniversityCourseTable = ({
  handleShow,
  universityCourse,
  clgid
}) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(tableDataItems);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const columns = [
    {
      name: "NAME",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "CATEGORY",
      selector: (row) => [row.category],
      sortable: true,
    },
    {
      name: "DURATION",
      selector: (row) => [row.duration],
      sortable: true,
    },
    {
      name: "FEES",
      selector: (row) => [row.fees],
      sortable: true,
    },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <NavLink
              to={`/property-list/${clgid}/${row._id}/updateCollegeCourse`}
              className="btn btn-primary btn-sm rounded-11 me-2"
            >
              <i>
                <svg
                  className="table-edit"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </i>
            </NavLink>
            {/* <Link
              onClick={handleClickOpen("paper", row)}
              className="btn btn-primary btn-sm rounded-11 me-2"
            >
              <i>
                <svg
                  className="table-edit"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </i>
            </Link> */}
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Link
              onClick={
                //userDeleteAction(row?._id)
                handleShow(row?._id)
              }
              to="#"
              className="btn btn-danger btn-sm rounded-11"
            >
              <i>
                <svg
                  className="table-delete"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.SNO
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, "SNO"));
      }
    };
    return (
      <Button key="delete" onClick={handleDelete} icon="true">
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);
  const tableDatas = {
    columns,
    data,
  };

  return (
    // <DataTableExtensions {...tableDatas}>
    <DataTable
      title
      columns={columns}
      data={universityCourse}
      selectableRows
      contextActions={contextActions}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      pagination
    />
    // </DataTableExtensions>
  );
};

export const DataTableColleges = ({
  handleShow,
  userDeleteAction,
  handleClickOpen,
  users,
  role,
  hello,
}) => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(tableDataItems);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);
  console.log(users, "usersusers");
  const columns = [
    // {
    //   name: "S.NO",
    //   selector: (row) => [row.SNO],
    //   sortable: true,
    // },
    {
      name: "NAME",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => [row.email],
      sortable: true,
    },
    {
      name: " CONTACT",
      selector: (row) => [row.contact_no],
      sortable: true,
    },
    {
      name: "ALT CONTACT",
      selector: (row) => [row.alt_contact],
      sortable: true,
    },
    {
      name: "DATE",
      selector: (row) => [moment(row.created_at).format("MMM Do YY")],
      sortable: true,
    },
    {
      name: "STATUS",
      selector: (row) => [row.status],
      sortable: true,
      cell: (row) => (
        <span className="">
          {row.status == 1 ? (
            <span style={{ color: "green" }}>ACTIVE</span>
          ) : (
            <span style={{ color: "red" }}>INACTIVE</span>
          )}
        </span>
      ),
    },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Link
              onClick={handleClickOpen("paper", row)}
              className="btn btn-primary btn-sm rounded-11 me-2"
            >
              <i>
                <svg
                  className="table-edit"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Link
              onClick={
                //userDeleteAction(row?._id)
                handleShow(row?._id)
              }
              to="#"
              className="btn btn-danger btn-sm rounded-11"
            >
              <i>
                <svg
                  className="table-delete"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const columnsCafe = [
    // {
    //   name: "S.NO",
    //   selector: (row) => [row.SNO],
    //   sortable: true,
    // },
    {
      name: "NAME",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => [row.email],
      sortable: true,
    },
    {
      name: " CONTACT",
      selector: (row) => [row.contact_no],
      sortable: true,
    },
    // {
    //   name: "ALT CONTACT",
    //   selector: (row) => [row.alt_contact],
    //   sortable: true,
    // },
    // {
    //   name: "DATE",
    //   selector: (row) => [moment(row.created_at).format("MMM Do YY")],
    //   sortable: true,
    // },
    {
      name: "CAFE NAME",
      selector: (row) => [row.cafename],
      sortable: true,
    },
    // {
    //   name: "CAFE CITY",
    //   selector: (row) => [row.cafecity],
    //   sortable: true,
    // },
    {
      name: "STATUS",
      selector: (row) => [row.status],
      sortable: true,
      cell: (row) => (
        <span className="">
          {row.status == 1 ? (
            <span style={{ color: "green" }}>ACTIVE</span>
          ) : (
            <span style={{ color: "red" }}>INACTIVE</span>
          )}
        </span>
      ),
    },
    {
      name: "ACTION",
      selector: (row) => [row.action],
      sortable: true,
      cell: (row) => (
        <span className="">
          <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
            <Link
              onClick={handleClickOpen("paper", row)}
              to="#"
              className="btn btn-primary btn-sm rounded-11 me-2"
            >
              <i>
                <svg
                  className="table-edit"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
            <Link
              onClick={
                //userDeleteAction(row?._id)
                handleShow(row?._id)
              }
              to="#"
              className="btn btn-danger btn-sm rounded-11"
            >
              <i>
                <svg
                  className="table-delete"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
                </svg>
              </i>
            </Link>
          </OverlayTrigger>
        </span>
      ),
    },
  ];

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.SNO
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, "SNO"));
      }
    };

    return (
      <Button key="delete" onClick={handleDelete} icon="true">
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);
  const tableDatas = {
    columns,
    data,
  };
  return (
    // <DataTableExtensions {...tableDatas}>
    <DataTable
      title
      columns={role == 4 ? columnsCafe : columns}
      data={users?.users}
      selectableRows
      contextActions={contextActions}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      pagination
    />
    // </DataTableExtensions>
  );
};

function convertArrayOfObjectsToCSV(array) {
  let result;

  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const keys = Object.keys(data[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  array.forEach((item) => {
    let ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];

      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
function downloadCSV(array) {
  const link = document.createElement("a");
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const filename = "export.csv";

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", filename);
  link.click();
}

const Export = ({ onExport }) => (
  <Button onClick={(e) => onExport(e.target.value)}>Export</Button>
);
const data = [
  {
    id: "1",
    SNO: 1,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "i.bond@datatables.net",
  },
  {
    id: "2",
    SNO: 2,
    NAME: "Zonna",
    LASTNAME: "Jond",
    POSITION: "Accountant",
    DATE: "2012/02/21",
    SALARY: "$343,654",
    EMAIL: "a.bond@datatables.net",
  },
  {
    id: "3",
    SNO: 3,
    NAME: "Nonna",
    LASTNAME: "Tond",
    POSITION: "Chief Executive Officer",
    DATE: "2012/02/21",
    SALARY: "$743,654",
    EMAIL: "s.bond@datatables.net",
  },
  {
    id: "4",
    SNO: 4,
    NAME: "Bonna",
    LASTNAME: "Oond",
    POSITION: "Chief Operating Officer",
    DATE: "2012/02/21",
    SALARY: "$643,654",
    EMAIL: "w.bond@datatables.net",
  },
  {
    id: "5",
    SNO: 5,
    NAME: "Honna",
    LASTNAME: "Pond",
    POSITION: "Data Coordinator",
    DATE: "2012/02/21",
    SALARY: "$243,654",
    EMAIL: "e.bond@datatables.net",
  },
  {
    id: "6",
    SNO: 6,
    NAME: "Fonna",
    LASTNAME: "Nond",
    POSITION: "Developer",
    DATE: "2012/02/21",
    SALARY: "$543,654",
    EMAIL: "r.bond@datatables.net",
  },
  {
    id: "7",
    SNO: 7,
    NAME: "Aonna",
    LASTNAME: "Xond",
    POSITION: "Development lead",
    DATE: "2012/02/21",
    SALARY: "$843,654",
    EMAIL: "g.bond@datatables.net",
  },
  {
    id: "8",
    SNO: 8,
    NAME: "Qonna",
    LASTNAME: "Vond",
    POSITION: "Director",
    DATE: "2012/02/21",
    SALARY: "$743,654",
    EMAIL: "x.bond@datatables.net",
  },
  {
    id: "9",
    SNO: 9,
    NAME: "Jond",
    LASTNAME: "Zonna",
    POSITION: "Marketing Officer",
    DATE: "2012/02/21",
    SALARY: "$543,654",
    EMAIL: "k.bond@datatables.net",
  },
  {
    id: "10",
    SNO: 10,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "s.bond@datatables.net",
  },
  {
    id: "11",
    SNO: 11,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "b.bond@datatables.net",
  },
  {
    id: "12",
    SNO: 12,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "o.bond@datatables.net",
  },
  {
    id: "13",
    SNO: 13,
    NAME: "Qonna",
    LASTNAME: "Pond",
    POSITION: "Data Coordinator",
    DATE: "2012/02/21",
    SALARY: "$243,654",
    EMAIL: "q.bond@datatables.net",
  },
  {
    id: "14",
    SNO: 14,
    NAME: "Yonna",
    LASTNAME: "Qond",
    POSITION: "Financial Controller",
    DATE: "2012/02/21",
    SALARY: "$143,654",
    EMAIL: "m.bond@datatables.net",
  },
];
const columns = [
  {
    name: "S.NO",
    selector: (row) => [row.SNO],
    sortable: true,
  },
  {
    name: "NAME",
    selector: (row) => [row.NAME],
    sortable: true,
  },
  {
    name: "LAST NAME",
    selector: (row) => [row.LASTNAME],
    sortable: true,
  },
  {
    name: "POSITION",
    selector: (row) => [row.POSITION],
    sortable: true,
  },
  {
    name: "DATE",
    selector: (row) => [row.DATE],
    sortable: true,
  },
  {
    name: " SALARY",
    selector: (row) => [row.SALARY],
    sortable: true,
  },
  {
    name: "EMAIL",
    selector: (row) => [row.EMAIL],
    sortable: true,
  },
];

const tableDatas = {
  columns,
  data,
};
export const ExportCSV = () => {
  const actionsMemo = React.useMemo(
    () => <Export onExport={() => downloadCSV(data)} />,
    []
  );
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  let selectdata = [];
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);
  const contextActions = React.useMemo(() => {
    const Selectdata = () => {
      if (window.confirm(`download:\r ${selectedRows.map((r) => r.SNO)}?`)) {
        setToggleCleared(!toggleCleared);
        data.map((e) => {
          selectedRows.map((sr) => {
            if (e.id === sr.id) {
              selectdata.push(e);
            }
          });
        });
        downloadCSV(selectdata);
      }
    };

    return <Export onExport={() => Selectdata()} icon="true" />;
  }, [data, selectdata, selectedRows]);
  return (
    <DataTableExtensions {...tableDatas}>
      <DataTable
        columns={columns}
        data={data}
        actions={actionsMemo}
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        selectableRows
        pagination
      />
    </DataTableExtensions>
  );
};

export const fixedheader = () => {
  const data = [
    {
      id: "1",
      SNO: 1,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "i.bond@datatables.net",
    },
    {
      id: "2",
      SNO: 2,
      NAME: "Zonna",
      LASTNAME: "Jond",
      POSITION: "Accountant",
      DATE: "2012/02/21",
      SALARY: "$343,654",
      EMAIL: "a.bond@datatables.net",
    },
    {
      id: "3",
      SNO: 3,
      NAME: "Nonna",
      LASTNAME: "Tond",
      POSITION: "Chief Executive Officer",
      DATE: "2012/02/21",
      SALARY: "$743,654",
      EMAIL: "s.bond@datatables.net",
    },
    {
      id: "4",
      SNO: 4,
      NAME: "Bonna",
      LASTNAME: "Oond",
      POSITION: "Chief Operating Officer",
      DATE: "2012/02/21",
      SALARY: "$643,654",
      EMAIL: "w.bond@datatables.net",
    },
    {
      id: "5",
      SNO: 5,
      NAME: "Honna",
      LASTNAME: "Pond",
      POSITION: "Data Coordinator",
      DATE: "2012/02/21",
      SALARY: "$243,654",
      EMAIL: "e.bond@datatables.net",
    },
    {
      id: "6",
      SNO: 6,
      NAME: "Fonna",
      LASTNAME: "Nond",
      POSITION: "Developer",
      DATE: "2012/02/21",
      SALARY: "$543,654",
      EMAIL: "r.bond@datatables.net",
    },
    {
      id: "7",
      SNO: 7,
      NAME: "Aonna",
      LASTNAME: "Xond",
      POSITION: "Development lead",
      DATE: "2012/02/21",
      SALARY: "$843,654",
      EMAIL: "g.bond@datatables.net",
    },
    {
      id: "8",
      SNO: 8,
      NAME: "Qonna",
      LASTNAME: "Vond",
      POSITION: "Director",
      DATE: "2012/02/21",
      SALARY: "$743,654",
      EMAIL: "x.bond@datatables.net",
    },
    {
      id: "9",
      SNO: 9,
      NAME: "Jond",
      LASTNAME: "Zonna",
      POSITION: "Marketing Officer",
      DATE: "2012/02/21",
      SALARY: "$543,654",
      EMAIL: "k.bond@datatables.net",
    },
    {
      id: "10",
      SNO: 10,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "s.bond@datatables.net",
    },
    {
      id: "11",
      SNO: 11,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "b.bond@datatables.net",
    },
    {
      id: "12",
      SNO: 12,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "o.bond@datatables.net",
    },
    {
      id: "13",
      SNO: 13,
      NAME: "Qonna",
      LASTNAME: "Pond",
      POSITION: "Data Coordinator",
      DATE: "2012/02/21",
      SALARY: "$243,654",
      EMAIL: "q.bond@datatables.net",
    },
    {
      id: "14",
      SNO: 14,
      NAME: "Yonna",
      LASTNAME: "Qond",
      POSITION: "Financial Controller",
      DATE: "2012/02/21",
      SALARY: "$143,654",
      EMAIL: "m.bond@datatables.net",
    },
  ];

  const columns = [
    {
      name: "S.NO",
      selector: (row) => [row.SNO],
      sortable: true,
    },
    {
      name: "NAME",
      selector: (row) => [row.NAME],
      sortable: true,
    },
    {
      name: "LAST NAME",
      selector: (row) => [row.LASTNAME],
      sortable: true,
    },
    {
      name: "POSITION",
      selector: (row) => [row.POSITION],
      sortable: true,
    },
    {
      name: "DATE",
      selector: (row) => [row.DATE],
      sortable: true,
    },
    {
      name: " SALARY",
      selector: (row) => [row.SALARY],
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => [row.EMAIL],
      sortable: true,
    },
  ];
  const tableDatas = {
    columns,
    data,
  };
  return (
    <DataTableExtensions {...tableDatas}>
      <DataTable
        title=""
        columns={columns}
        data={data}
        fixedHeader
        pagination
      />
    </DataTableExtensions>
  );
};

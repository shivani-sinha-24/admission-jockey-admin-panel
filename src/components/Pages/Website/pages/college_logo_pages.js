import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams,useNavigate } from "react-router-dom"; import {
    Stack,
    OutlinedInput,
    InputLabel,
    MenuItem,
    Chip,
    Select,
    FormControl
} from "@mui/material";
import { useFormik } from "formik";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import { getCollegeList } from "../../../../redux/Action/PropertyTypeAction";
import { addWebCollegeList,fetchCollegeWebList } from "../../../../redux/Action/WebAction";
const Loan = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [colleges, setColleges] = React.useState([]);
    const [displayColleges, setDisplayColleges] = React.useState([]);
    const { property,webColleges } = useSelector((state) => ({
        webColleges: state?.webSite?.collegesLogo,
        property: state?.propertyType?.college.filter(item => item?.edu_type == "College"),
    }));
    const filterItem=()=>{
        let result=property.filter(item=>!webColleges.includes(item.name));
        setDisplayColleges(result);
    }
    useEffect(() => {
        dispatch(getCollegeList());
        dispatch(fetchCollegeWebList());
        filterItem();
    }, []);
    const formik = useFormik({
        onSubmit: values => {
            values = {
                "collegeList": colleges
            }
            dispatch(addWebCollegeList(values));
            navigate('/website-college-list',{replace:false});
        },
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Row className=" row-sm">
                    <Col lg={12} xl={12} md={12} sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h3">Add Web Colleges Logo List</Card.Title>
                            </Card.Header>
                            <Col sm={12} lg={12} md={12} xl={12}>
                                <Card>
                                    <Row>
                                        <section>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div>
                                                        <label className="form-label">Title</label>
                                                        <FormControl sx={{ m: 1, width: 1150 }}>
                                                            <InputLabel>Multiple Select</InputLabel>
                                                            <Select
                                                                multiple
                                                                value={colleges}
                                                                onChange={(e) => setColleges(e.target.value)}
                                                                input={<OutlinedInput label="Multiple Select" />}
                                                                renderValue={(selected) => (
                                                                    <Stack gap={1} direction="row" flexWrap="wrap">
                                                                        {selected.map((value) => (
                                                                            <Chip
                                                                                key={value}
                                                                                label={value}
                                                                                onDelete={() =>
                                                                                    setColleges(
                                                                                        colleges.filter((item) => item !== value)
                                                                                    )
                                                                                }
                                                                                deleteIcon={
                                                                                    <CancelIcon
                                                                                        onMouseDown={(event) => event.stopPropagation()}
                                                                                    />
                                                                                }
                                                                            />
                                                                        ))}
                                                                    </Stack>
                                                                )}
                                                            >
                                                                {displayColleges?.map((p) => {
                                                                    return <MenuItem
                                                                        key={p.name}
                                                                        value={p.name}
                                                                        sx={{ justifyContent: "space-between" }}
                                                                    >
                                                                        {p.name}
                                                                        {colleges.includes(p.name) ? <CheckIcon color="info" /> : null}
                                                                    </MenuItem>
                                                                }
                                                                )}
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button type="submit" variant="primary" className="me-1">
                                                Submit
                                            </Button>
                                        </section>
                                    </Row>
                                </Card>
                            </Col>
                        </Card>
                    </Col>
                </Row>
            </form>
        </div>
    );
};

export default Loan;

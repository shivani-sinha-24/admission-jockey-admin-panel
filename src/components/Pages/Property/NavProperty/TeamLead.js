import { CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getTeamLead } from "../../../../redux/Action/PropertyAction";
import PropertyDetails from "../PropertyDetails";
import Team_lead from "./pages/Team_lead";

const TeamLead = () => {
  const dispatch = useDispatch();
  const [addTeam, setAddTeam] = useState(false);
  const [editTeam, setEditTeam] = useState();
  const { team_lead } = useSelector((state) => ({
    team_lead: state?.property?.team_lead,
  }));

  console.log(team_lead, "team_lead");
  useEffect(() => {
    dispatch(getTeamLead());
  }, []);
  return (
    <>
      <PropertyDetails>
        {addTeam == false ? (
          <>
            <div
              onClick={() => {
                setAddTeam(true);
                setEditTeam();
              }}
              className="ms-auto pageheader-btn"
            >
              <NavLink
                to="#"
                className="btn btn-primary btn-icon text-white me-3"
              >
                <span>
                  <i className="fe fe-plus"></i>&nbsp;
                </span>
                Add Team Lead
              </NavLink>
            </div>

            <span className="widget-users row profiletab  mb-5">
              {team_lead?.length > 0 &&
                team_lead?.map((item, i) => {
                  return (
                    <li className="col-lg-4  col-md-6 col-sm-12 col-12  ">
                      <Card className=" border p-0">
                        <Link>
                          <Card.Body className=" text-center">
                            <img
                              className="avatar avatar-xxl brround cover-image"
                              crossOrigin="annonymous"
                              src={`${process.env.REACT_APP_API_BASE_URL}/${item?.team_lead_img}`}
                              alt=""
                            />
                            <span
                              onClick={() => {
                                setEditTeam(item);
                                setAddTeam(true);
                              }}
                              style={{ fontSize: "20px" }}
                            >
                              <i className="fe fe-edit"></i>&nbsp;
                            </span>
                            <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                              {item?.name}
                            </h4>
                            <span className="text-muted">
                              {item?.designation}
                            </span>
                          </Card.Body>
                        </Link>
                      </Card>
                    </li>
                  );
                })}
            </span>
          </>
        ) : (
          <Team_lead setAddTeam={setAddTeam} editTeam={editTeam} />
        )}
      </PropertyDetails>
    </>
  );
};

export default TeamLead;

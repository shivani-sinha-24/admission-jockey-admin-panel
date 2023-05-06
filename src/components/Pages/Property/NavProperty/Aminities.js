import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PropertyDetails from "../PropertyDetails";
import './aminities.css';
// import "react-tabs/style/react-tabs.css";

const Aminities = () => {

    const dispatch = useDispatch();
    const [addTeam, setAddTeam] = useState(false);
    const [editTeam, setEditTeam] = useState();
    // const { announcement } = useSelector(state => ({
    //     announcement: state?.property?.announcement,
    // }));

    // console.log(announcement, "announcement")
    // useEffect(() => {
    //     dispatch(getAnnouncement())
    // }, [])
  return (
    <>
      <PropertyDetails>
      <div className="ms-auto pageheader-btn">
                <NavLink onClick={() => {
                            setAddTeam(true);
                            setEditTeam();
                        }} to="#" className="btn btn-primary btn-icon text-white me-3">
                    <span>
                        <i className="fe fe-plus"></i>&nbsp;
                    </span>
                    Add Aminities
                </NavLink>
            </div>
        <div className="App">
          <h1>Sample</h1>
          <Tabs>
            <TabList>
              <Tab>
                <p>Title 1</p>
              </Tab>
              <Tab>
                <p>Title 2</p>
              </Tab>
              <Tab>
                <p>Title 3</p>
              </Tab>
              <Tab>
                <p>Title 4</p>
              </Tab>
              <Tab>
                <p>Title 5</p>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="panel-content">
                <h2>Any content 1</h2>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="panel-content">
                <h2>Any content 2</h2>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="panel-content">
                <h2>Any content 3</h2>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="panel-content">
                <h2>Any content 4</h2>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="panel-content">
                <h2>Any content 5</h2>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </PropertyDetails>

    </>
  )
}

export default Aminities
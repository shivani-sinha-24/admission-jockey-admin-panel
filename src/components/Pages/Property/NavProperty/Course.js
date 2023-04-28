import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import PropertyDetails from "../PropertyDetails";



const Course = () => {
    const dispatch = useDispatch();
   
    return (
        <>
            <PropertyDetails>
                
            <div className="ms-auto pageheader-btn">
                <NavLink  to="#" className="btn btn-primary btn-icon text-white me-3">
                    <span>
                        <i className="fe fe-plus"></i>&nbsp;
                    </span>
                    Add Course
                </NavLink>
            </div>
         
            </PropertyDetails>
        </>
    )
}

export default Course
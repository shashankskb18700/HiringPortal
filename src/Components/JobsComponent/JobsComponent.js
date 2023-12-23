import React from "react";
import { Link } from "react-router-dom";

import JobApplication from "../JobsApplication/JobsApplication";

import "./JobsComponent.css";
const JobsComponent = ({ role, ctc, location, name, logo, description }) => {
  return (
    <div className="JobsComponent">
      <div className="JobsComponent-company-details">
        <img src={logo}></img>
        <div>{name}</div>
      </div>

      <div className="JobsComponent-job-status"></div>
      <div className="JobsComponenet-job-details">
        <div>{role}</div>
        <div>{location}</div>
        <div>{ctc}</div>

        <Link to="/JobApplication">
          <div>APPLY</div>
        </Link>
      </div>
    </div>
  );
};

export default JobsComponent;

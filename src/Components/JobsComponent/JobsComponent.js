import React from "react";
import { Link } from "react-router-dom";
import { authService } from "../firebase/fbase";

import JobApplication from "../JobsApplication/JobsApplication";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import "react-notifications/lib/notifications.css";

import "./JobsComponent.css";
const JobsComponent = ({ role, ctc, location, name, logo, description }) => {
  const notify = () => {
    NotificationManager.info("PLEASE LOG IN TO APPLY");
  };
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

        {authService.getAuth().currentUser !== null ? (
          <Link to="/JobApplication">
            <div className="JobApplicaton-button">APPLY</div>
          </Link>
        ) : (
          <div onClick={notify}> APPLY</div>
        )}
      </div>
      <NotificationContainer></NotificationContainer>
    </div>
  );
};

export default JobsComponent;

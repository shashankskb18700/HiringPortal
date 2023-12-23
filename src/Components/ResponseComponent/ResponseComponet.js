import React from "react";
import Header from "../Header/Header";

import "./ResponseComponent.css";

const ResponseComponent = ({
  name,
  email,
  expectedCtc,
  education,
  resume,
  interest,
}) => {
  return (
    <div className="ResponseComponent">
      <Header></Header>
      <div className="ResponseComponent-applicant">
        <div>{name}</div>
        <div>{email}</div>
        <div>{education}</div>
        <div>{resume}</div>
        <div>{interest}</div>
        <div>{expectedCtc}</div>
      </div>
    </div>
  );
};

export default ResponseComponent;

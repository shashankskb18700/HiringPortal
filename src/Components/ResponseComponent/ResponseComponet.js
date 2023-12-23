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
        <div className="ResponseComponent-details">
          <div>NAME :</div>
          <div className="ResponseComponent-val"> {name}</div>
        </div>
        <div className="ResponseComponent-details">
          <div>EMAIL :</div>
          <div className="ResponseComponent-val"> {email}</div>
        </div>
        <div className="ResponseComponent-details">
          <div>EDUCATION : </div>
          <div className="ResponseComponent-val">{education}</div>
        </div>
        <div className="ResponseComponent-details">
          <div>RESUME : </div>
          <div className="ResponseComponent-val">{resume}</div>
        </div>

        <div className="ResponseComponent-details">
          <div>WHY ARE YOU BEST FIT :</div>
          <div className="ResponseComponent-val">{interest}</div>
        </div>
        <div className="ResponseComponent-details">
          <div>EXPECTED CTC :</div>
          <div className="ResponseComponent-val"> {expectedCtc}</div>
        </div>
      </div>
    </div>
  );
};

export default ResponseComponent;

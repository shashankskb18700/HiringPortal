import React from "react";
import "./JobsIndustry.css";

const JobsIndustry = ({ name }) => {
  return (
    <div>
      <div className={`JobsIndustry ${name}`}>{name}</div>
    </div>
  );
};

export default JobsIndustry;

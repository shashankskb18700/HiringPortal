import React from "react";
import { useState } from "react";
import { authService, dbService } from "../firebase/fbase";

import Header from "../Header/Header";

import "./CreateJobs.css";

const CreateJobs = () => {
  const [jobTitle, SetJobTitle] = useState("");
  const [jobDescription, SetJobDescription] = useState("");
  const [location, setLocation] = useState("");
  const [CTC, setCTC] = useState("");
  const [company, setCompany] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = async () => {
    console.log("inside doc ref");
    const { setDoc, doc, collection, addDoc } = dbService;
    const userName = authService.getAuth().currentUser.email;
    await setDoc(doc(dbService.getFirestore(), "Jobs", userName), {
      job: jobTitle,
      description: jobDescription,
      Location: location,
      CTC: CTC,
      company: company,
      companyLogo: companyLogo,
      status: status,
    });

    // const docRef = await addDoc(collection(dbService.getFirestore()), {
    //   name: "Tokyo",
    //   country: "Japan",
    // });

    // console.log(docRef.id);
  };
  const eventPreventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <div className="CreateJobs">
      <Header />
      <div className="CreateJobs-notion">
        Shape the Future, Hire the Best: Create Your Job Listing!
      </div>
      <form onSubmit={eventPreventDefault}>
        <div className="CreateJobs-input">
          <label>JOB TITLE</label>
          <input
            type="text"
            name="text"
            value={jobTitle}
            onChange={(event) => SetJobTitle(event.target.value)}
            required
          ></input>
        </div>

        <div className="CreateJobs-input description">
          <label>JOB DESCRIPTION</label>
          <textarea
            type="text"
            name="text"
            value={jobDescription}
            onChange={(event) => SetJobDescription(event.target.value)}
            required
          ></textarea>
        </div>

        <div className="CreateJobs-input">
          <label>Location</label>
          <input
            type="text"
            name="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            required
          ></input>
        </div>
        <div className="CreateJobs-input">
          <label>CTC</label>
          <input
            type="text"
            name="text"
            value={CTC}
            onChange={(event) => setCTC(event.target.value)}
            required
          ></input>
        </div>
        <div className="CreateJobs-input">
          <label>Company Name</label>
          <input
            type="text"
            name="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            required
          ></input>
        </div>
        <div className="CreateJobs-input">
          <label>Company Logo url</label>
          <input
            type="text"
            name="text"
            value={companyLogo}
            onChange={(event) => setCompanyLogo(event.target.value)}
            required
          ></input>
        </div>
        <div className="CreateJobs-input">
          <label>Company Logo url</label>
          <input
            type="text"
            name="text"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            required
          ></input>
        </div>
        <button onClick={() => onSubmit()} className="CreateJobs-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateJobs;

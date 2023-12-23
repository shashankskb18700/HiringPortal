import React from "react";
import { useState, useEffect } from "react";
import { dbService, authService } from "../firebase/fbase";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import Header from "../Header/Header";
import JobsComponent from "../JobsComponent/JobsComponent";
import "./JobsApplication.css";

import "react-notifications/lib/notifications.css";

const JobsApplication = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const [expectedCtc, setExpectedCtc] = useState("");
  const [education, setEducation] = useState("");
  const [interest, setInterest] = useState("");
  const [jobListing, setJobListing] = useState([]);

  useEffect(() => {
    query();
  }, []);

  const query = async () => {
    const { collection, query, where, getDocs } = dbService;

    const q = query(collection(dbService.getFirestore(), "Jobs"));

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    const data = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      data.push(doc.data());
      console.log(doc.id, " => ", doc.data());
    });

    setJobListing(data);
  };

  const submit = async () => {
    console.log("inside doc ref");
    const { setDoc, doc, collection, addDoc } = dbService;
    const userName = authService.getAuth().currentUser.email;
    await setDoc(doc(dbService.getFirestore(), "Application", userName), {
      name: name,
      email: email,
      resumeLink: resume,
      expectedCtc: expectedCtc,
      education: education,
      interest: interest,
    });

    NotificationManager.info("Application sent");
  };
  return (
    <div className="JobsApplication">
      <Header />
      <div>
        {jobListing.map((val) => (
          <JobsComponent
            name={val.company}
            role={val.job}
            description={val.description}
            location={val.Location}
            logo={val.companyLogo}
            ctc={val.CTC}
          ></JobsComponent>
        ))}
      </div>
      <div className="JobsApplication-Description">
        <b>Description : </b>
        {jobListing[0] ? jobListing[0].description : ""}
      </div>
      {/* <JobsComponent
        name={Companyname}
        role={role}
        description={description}
        location={location}
        logo={logo}
        ctc={ctc}
      /> */}
      <form onSubmit={(event) => event.preventDefault}>
        <div className="JobsApplication-component">
          <label>NAME</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Jhon doe"
            required
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="JobsApplication-component">
          <label>EMAIL</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Jhon@xyz.com"
            required
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div className="JobsApplication-component">
          <label>RESUME LINK</label>
          <input
            type="text"
            name="resume"
            value={resume}
            placeholder="resume url"
            required
            onChange={(event) => setResume(event.target.value)}
          ></input>
        </div>
        <div className="JobsApplication-component">
          <label>EXPECTED CTC(in LPA)</label>
          <input
            type="number"
            name="expectedCtc"
            placeholder="5 Lpa , 7 Lpa etc"
            value={expectedCtc}
            required
            onChange={(event) => setExpectedCtc(event.target.value)}
          ></input>
        </div>
        <div className="JobsApplication-component">
          <label>EDUCATION</label>
          <input
            type="text"
            name="education"
            value={education}
            placeholder="BE in cse"
            required
            onChange={(event) => setEducation(event.target.value)}
          ></input>
        </div>
        <div className="JobsApplication-component">
          <label>TELL US WHY YOU ARE GOOD FIT ?</label>
          <input
            type="text"
            name="interest"
            value={interest}
            placeholder="I am skilled ....."
            required
            onChange={(event) => setInterest(event.target.value)}
          ></input>
        </div>
      </form>
      <div className="JobsApplicaiton-Button" onClick={submit}>
        APPLY
      </div>
      <NotificationContainer />
    </div>
  );
};

export default JobsApplication;

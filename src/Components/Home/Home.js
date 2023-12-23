import React from "react";
import { useEffect, useState } from "react";
import { authService, dbService } from "../firebase/fbase";
import { Link } from "react-router-dom";
import { queryEqual } from "firebase/firestore";

import Header from "../Header/Header";
import JobsIndustry from "../JobIndustry/JobsIndustry";

import "./Home.css";
import JobsComponent from "../JobsComponent/JobsComponent";

const Home = () => {
  const [jobListing, setJobListing] = useState([]);
  const { onSnapshot, collection, getDocs } = dbService;
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
    // const jobs = dbService.query(collection(dbService.getFirestore(), "jobs"));

    // const querySnapshot = await getDocs(jobs);

    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    // });

    // await onSnapshot(jobs, (snapshot) => {
    //   const arr = snapshot.docs.map((docs) => docs.data().value);
    //   console.log(snapshot);
    // const arra = [...arrayId];
    // arra
    //arrayId is getting completly changed ;

    // if (idAnime.length > 0) {
    //   props.Wish(idAnime);
    // }
    // setArrayId([...arr]);
    // });
    setJobListing(data);
  };
  const logout = () => {
    authService.signOut(authService.getAuth());
    // console.log(authService.getAuth().currentUser);
  };
  return (
    <div className="Home">
      <Header />
      <div className="Home-job-industry">
        <JobsIndustry
          className="Home-job-industry-child PRODUCT"
          name={"PRODUCT"}
        />
        <JobsIndustry className="Home-job-industry-child" name={"INTERNET"} />
        <JobsIndustry className="Home-job-industry-child" name={"FINTECH"} />
        <JobsIndustry className="Home-job-industry-child" name={"EDTECH"} />
        <JobsIndustry className="Home-job-industry-child" name={"MNC's"} />
        <JobsIndustry className="Home-job-industry-child" name={"HEALTHCARE"} />
      </div>

      <div className="SearchBar">
        <input></input>
        <label></label>
      </div>

      <h1>JOB LISTING</h1>

      {jobListing.map((val) => (
        <JobsComponent
          name={val.company}
          role={val.job}
          description={val.description}
          location={val.Location}
          logo={val.companyLogo}
          ctc={val.CTC}
        />
      ))}
    </div>
  );
};

export default Home;

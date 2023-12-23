import React from "react";

import { useState, useEffect } from "react";
import { authService, dbService } from "../firebase/fbase";

import ResponseComponent from "../ResponseComponent/ResponseComponet";

const Response = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    query();
  }, []);

  const query = async () => {
    const { collection, query, where, getDocs } = dbService;

    const q = query(collection(dbService.getFirestore(), "Application"));

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    const data = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      data.push(doc.data());
      console.log(doc.id, " => ", doc.data());
    });

    setResponse(data);
  };
  return (
    <div>
      {response.length != 0 ? (
        response.map((val) => (
          <ResponseComponent
            name={val.name}
            email={val.email}
            expectedCtc={val.expectedCtc}
            education={val.education}
            resume={val.resumeLink}
            interest={val.interest}
          />
        ))
      ) : (
        <div>NO RESPONSE YET ! </div>
      )}
    </div>
  );
};

export default Response;

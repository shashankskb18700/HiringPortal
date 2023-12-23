import React from "react";
import { useState, useEffect } from "react";
import { authService } from "../firebase/fbase";
import { Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
  const [userStatus, setUserStatus] = useState("notLogged");

  useEffect(() => {
    authService.onAuthStateChanged(
      authService.getAuth(),
      (user) => {
        if (user) {
          setUserStatus("alreadyLogged");
        }
        // setInit(true);
      },
      []
    );
  });

  const logout = () => {
    authService.signOut(authService.getAuth());

    window.location.reload();
    // console.log(authService.getAuth().currentUser);
  };

  return (
    <div className="Header">
      <div className="Logo">HIRING PORTAL</div>

      <div className="Header-Home">
        <div className="Header-Component">
          <Link to="/">HOME</Link>
        </div>
        <div className={`${userStatus} Header-Component`}>
          <Link to="/create-jobs">CREATE JOBS</Link>
        </div>
        <div className={`${userStatus} Header-Component`}>
          <Link to="/response">RESPONSE</Link>
        </div>

        <div>
          {userStatus === "notLogged" ? (
            <Link to="/auth">LOGIN / SIGN UP</Link>
          ) : (
            <div onClick={logout} className="Header-Component">
              LOGOUT
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;

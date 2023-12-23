import React, { useState } from "react";
import { authService } from "../firebase/fbase";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import "react-notifications/lib/notifications.css";

import "./Auth.css";

const Auth = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [newUser, SetNewUser] = useState(false);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") SetEmail(value);
    else SetPassword(value);
  };

  const SignInSignUp = async () => {
    const auth = authService.getAuth();

    let data;
    try {
      if (newUser) {
        data = await authService.createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      }
    } catch (e) {
      NotificationManager.info("Invalid credential");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const toggle = () => {
    SetNewUser(!newUser);
  };

  return (
    <div className="Auth">
      <form onSubmit={onSubmit} className="Auth-Form">
        <div className="logo">HIRING PORTAL</div>
        <div className="Auth-Input">
          <label className="labEmail">Email</label>
          <input
            type="email"
            name="email"
            // placeholder="entre your email"
            value={email}
            required
            onChange={onChange}
          />
        </div>
        <div className="Auth-Input">
          <label className="labPass">password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            // placeholder="entre your password"
          />
        </div>
        <br />
        <button className="auth-button" onClick={SignInSignUp}>
          {newUser ? "Sign Up" : "Sign In"}
        </button>
        <div onClick={toggle} className="user-type">
          {newUser
            ? "Already have a account ? Log in"
            : "New to HiringPortal? Create Account"}
          Are you a new user?
        </div>
      </form>
      <NotificationContainer />
    </div>
  );
};

export default Auth;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "./Home/Home";
import CreateJobs from "./CreateJobs/CreateJobs";
import Auth from "./Auth/Auth";
import JobApplication from "./JobsApplication/JobsApplication";
import Response from "./Response/Response.js";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        exact
        path="/auth"
        render={() => (isLoggedIn ? <Redirect to="/" /> : <Auth />)}
      />
      <Route
        exact
        path="/create-jobs"
        // render={() => (isLoggedIn ? <CreateJobs /> : <Redirect to="/auth" />)}
      >
        <CreateJobs></CreateJobs>
      </Route>
      <Route exact path="/JobApplication">
        <JobApplication />
      </Route>
      <Route exact path="/response">
        <Response />
      </Route>
    </Switch>
  );
};

export default AppRouter;

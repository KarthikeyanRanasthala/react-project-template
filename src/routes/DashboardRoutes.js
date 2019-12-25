import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Settings from "./Dashboard/Settings";
import Profile from "./Dashboard/Profile";
import Reports from "./Dashboard/Reports";

const DashboardRoutes = props => {
  return props.isAuth ? (
    <>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/settings">SETTINGS</Link>
        </li>
        <li>
          <Link to="/profile">PROFILE</Link>
        </li>
        <li>
          <Link to="/reports">REPORTS</Link>
        </li>
      </ul>
      <Route path="/" exact render={() => <Dashboard />} />
      <Route path="/settings" render={() => <Settings />} />
      <Route path="/profile" render={() => <Profile />} />
      <Route path="/reports" render={() => <Reports />} />
    </>
  ) : (
    <Redirect to="/home" />
  );
};

export default DashboardRoutes;

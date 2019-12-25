import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Dashboard from "./Dashboard/Dashboard";
import Settings from "./Dashboard/Settings";
import Profile from "./Dashboard/Profile";
import Reports from "./Dashboard/Reports";

import styles from "./DashboardRoutes.module.css";

const DashboardRoutes = props => {
  const { isAuth } = props;
  return isAuth ? (
    <>
      <ul class={styles.navLinks}>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/reports">Reports</Link>
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

DashboardRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps)(DashboardRoutes);

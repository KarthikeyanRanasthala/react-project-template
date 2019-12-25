import React from "react";
import { Route } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import Login from "./Login";
import Register from "./Register";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

const Routes = () => {
  return (
    <>
      <Route path="/" render={() => <DashboardRoutes />} />
      <Route path="/home" render={() => <Home />} />
      <Route path="/login" render={() => <Login />} />
      <Route path="/register" render={() => <Register />} />
      <Route path="/about" render={() => <About />} />
      <Route path="/contact" render={() => <Contact />} />
    </>
  );
};

export default Routes;

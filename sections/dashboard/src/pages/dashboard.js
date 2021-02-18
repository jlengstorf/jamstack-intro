import { Router } from "@reach/router";
import { navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import { IdentityModal } from "react-netlify-identity-widget";
import "react-netlify-identity-widget/styles.css";
import Layout from "../components/layout";
import PrivateRoute from "../components/private-route";
import Profile from "../components/profile";
import RouteBase from "../components/route-base";
import RouteLogin from "../components/route-login";
import RouteSecret from "../components/route-secret";

const Dashboard = ({ location }) => {
  const [isVisible, setVisibility] = useState(false);
  const toggleModal = () => setVisibility(!isVisible);

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, []);

  return (
    <Layout>
      <Profile toggleModal={toggleModal} />
      <Router>
        <PrivateRoute path="/dashboard/base" component={RouteBase} />
        <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
        <RouteLogin path="/dashboard/login" toggleModal={toggleModal} />
      </Router>
      <IdentityModal showDialog={isVisible} onCloseDialog={toggleModal} />
    </Layout>
  );
};

export default Dashboard;

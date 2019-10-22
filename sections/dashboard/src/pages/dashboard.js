import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import IdentityModal from 'react-netlify-identity-widget';
import Layout from '../components/layout';
import Profile from '../components/profile';
import PrivateRoute from '../components/private-route';
import RouteLogin from '../components/route-login';
import RouteBase from '../components/route-base';
import RouteSecret from '../components/route-secret';

const Dashboard = ({ location }) => {
  const [isVisible, setVisibility] = useState(false);
  const showModal = () => setVisibility(true);

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', { replace: true });
    }
  }, [location.pathname]);

  return (
    <Layout>
      <Profile showModal={showModal} />
      <Router>
        <RouteLogin path="/dashboard/login" showModal={showModal} />
        <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
        <PrivateRoute path="/dashboard/base" component={RouteBase} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
    </Layout>
  );
};

export default Dashboard;

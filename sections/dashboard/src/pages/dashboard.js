import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteLogin from '../components/route-login';
import RouteBase from '../components/route-base';
import RouteSecret from '../components/route-secret';

const Dashboard = ({ location }) => {
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', { replace: true });
    }
  }, [location.pathname]);

  return (
    <Layout>
      <Profile />
      <Router>
        <RouteLogin path="/dashboard/login" />
        <RouteSecret path="/dashboard/secret" />
        <RouteBase path="/dashboard/base" />
      </Router>
    </Layout>
  );
};

export default Dashboard;

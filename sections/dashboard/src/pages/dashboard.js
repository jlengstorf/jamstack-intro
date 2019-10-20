import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import IdentityModal from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css';
import Layout from '../components/layout';
import Profile from '../components/profile';
import PrivateRoute from '../components/private-route';
import { useIdentityContext } from 'react-netlify-identity';

const SecretStuff = () => <h1>This is super secret stuff!</h1>;
const AllYourBase = () => <h1>All Your Base Are Belong to Us!</h1>;

const Login = ({ openLogin }) => {
  const identity = useIdentityContext();

  if (identity && identity.isLoggedIn) {
    navigate('/dashboard/secret', { replace: true });
  }

  return (
    <>
      <h1>Log In or Sign Up</h1>
      <button onClick={openLogin}>Log In</button>
    </>
  );
};

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
        <PrivateRoute path="/dashboard/secret" component={SecretStuff} />
        <PrivateRoute path="/dashboard/base" component={AllYourBase} />
        <Login path="/dashboard/login" openLogin={showModal} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
    </Layout>
  );
};

export default Dashboard;

import React from "react";
import { useIdentityContext } from "react-netlify-identity";
import { navigate } from "@reach/router";

const RouteLogin = ({ showModal }) => {
  const identity = useIdentityContext();

  if (identity && identity.isLoggedIn) {
    navigate("/dashboard/secret", { replace: true });
  }
  return (
    <>
      <h1>Log in or Sign Up</h1>
      <button onClick={showModal}>Log in</button>
    </>
  );
};

export default RouteLogin;

import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const getToken = () => {
    let token = "";
    if (localStorage.getItem("token") !== "") {
      return (token = localStorage.getItem("token"));
    } else {
      return (token = "");
    }
  };
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        getToken() ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
}

export default ProtectedRoute;

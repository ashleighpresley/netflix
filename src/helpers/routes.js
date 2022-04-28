import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Browse } from "../pages";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Routes>
      <Route
        {...rest}
        element={user ? <Navigate to={{ pathname: loggedInPath }} /> : children}
      ></Route>
    </Routes>
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Routes>
      <Route {...rest} element={user ? <Browse /> : children}></Route>
    </Routes>
  );
}

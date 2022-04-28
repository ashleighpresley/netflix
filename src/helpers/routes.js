import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

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

export function ProtectedRoute({
  user,
  protectedPage,
  loggedOutPath,
  ...rest
}) {
  return (
    <Routes>
      <Route
        {...rest}
        element={
          user ? protectedPage : <Navigate to={{ pathname: loggedOutPath }} />
        }
      ></Route>
    </Routes>
  );
}

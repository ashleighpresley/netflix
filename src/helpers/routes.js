import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

export function IsUserRedirect({
  user,
  loggedInPath,
  children,
  element,
  ...rest
}) {
  return (
    <Routes>
      <Route
        {...rest}
        element={element}
        render={() => {
          if (user) {
            return <Navigate to={{ pathname: loggedInPath }} />;
          }
          return children;
        }}
      ></Route>
    </Routes>
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }
        return (
          <Navigate
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

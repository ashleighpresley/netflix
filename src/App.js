import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./pages/index";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Routes>
        <Route
          exact
          path={ROUTES.HOME}
          element={
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.HOME}
            >
              <Home />
            </IsUserRedirect>
          }
        ></Route>
        <Route
          exact
          path={ROUTES.SIGN_IN}
          element={
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.HOME}
            >
              <SignIn />
            </IsUserRedirect>
          }
        ></Route>
        <Route
          exact
          path={ROUTES.SIGN_UP}
          element={
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.HOME}
            >
              <SignUp />
            </IsUserRedirect>
          }
        ></Route>
        <Route
          exact
          path={ROUTES.BROWSE}
          element={
            <ProtectedRoute
              user={user}
              protectedPage={<Browse />}
              loggedOutPath={ROUTES.SIGN_UP}
              path={ROUTES.HOME}
            ></ProtectedRoute>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

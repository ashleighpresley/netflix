import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./pages/index";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />}></Route>
        <Route exact path={ROUTES.BROWSE} element={<Browse />}></Route>
        <Route exact path={ROUTES.SIGN_IN} element={<SignIn />}></Route>
        <Route exact path={ROUTES.SIGN_UP} element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
}

import React from "react";
import * as ROUTES from './routes/routes'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./pages/homes/home";
import SignIn from "./pages/signin/signin";

export function App() {
  return (
    <Router>
      <Route exact path={ROUTES.SIGNIN}>
        <SignIn />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}

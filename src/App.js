import React from "react";
import * as ROUTES from './routes/routes'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/homes/home";
import Browse from './pages/browse/browse';
import SignIn from "./pages/signin/signin";
import SignUp from "./pages/signup/signup";
import {IsUserRedirect} from './routes/user-redirect';
import {ProtectedRoute} from './routes/protected-route';

export function App() {
    const user = {};

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <SignUp />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>
        <ProtectedRoute 
          user={user}
          path={ROUTES.BROWSE}
        >
          <Browse />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}
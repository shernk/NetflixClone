import React from "react";
import { Redirect, Route } from "react-router-dom";

function redirectRoute(location) {
  return (
    <Redirect
      to={{
        pathname: "signin",
        state: { from: location },
      }}
    />
  );
}

export default function ProtectedRoute({ user, path, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return path;
        }

        if (!user) {
          console.log("location: ", location);
          return redirectRoute(location);
          // (
          //   <Redirect
          //     to={{
          //       pathname: "signin",
          //       state: { from: location },
          //     }}
          //   />
          // );
        }

        return null;
      }}
    />
  );
}

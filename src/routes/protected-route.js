import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export function ProtectedRoute({user, children, ...rest}){
  return(
    <Route 
      {...rest}
      //? why location is matter, let's find out
      render={({ location }) => {
        if(user){
          return children;
        }
        
        if(!user){
          return(
            <Redirect
              to={{
                pathname: 'signin',
                state: {from: location} 
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
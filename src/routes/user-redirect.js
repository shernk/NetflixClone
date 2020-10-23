import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export function IsUserRedirect({user, loggedInPath, children, ...rest}){
  return(
    <Route 
      {...rest}
      render={() => {
        if(!user){
          console.log('user is ' + user);
          console.log(children);
          console.log(rest);
          console.log('loggedInPath is ' + loggedInPath);
          return children;
        }
        
        if(user){
          console.log(user);
          console.log(children);
          console.log(rest);
          console.log("loggedInPath is " + loggedInPath);
          return (
            <Redirect 
              to={{
                pathname: loggedInPath
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
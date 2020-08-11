import React from "react";
import { Route, Redirect } from "react-router-dom";
import {isAuthenticated} from '../../repository'


const PubliceRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated()? <Redirect to="/" />: <Component {...props} /> 
      }
    />
  );
};

export default PubliceRoute;

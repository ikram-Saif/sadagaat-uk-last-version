import React from "react";
import { Route, Redirect } from "react-router-dom";
//import { getCurrentUser } from "../../services/authService";
import {isAuthenticated} from '../../repository'


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated()? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;

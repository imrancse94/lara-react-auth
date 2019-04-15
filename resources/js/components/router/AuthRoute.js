import React from 'react';
import store from '../store/createstore';
import { Route, Redirect} from 'react-router-dom';
import { setIntendedUrl, setToken } from '../helper/auth';
import PropTypes from 'prop-types';
import AppLayoutRoute from './AppLayoutRoute';
import {initAuthFromExistingToken} from '../actions/auth';

initAuthFromExistingToken();

const propTypes = {
    component: PropTypes.func.isRequired,
    rest: PropTypes.object,
    location: PropTypes.object
  };
  
const AuthRoute = ({ component: Component, ...rest }) => (
  
    <Route
      {...rest}
      render={props => {
       
        const { auth: { isAuthenticated } } = store.getState();
        if (!isAuthenticated) {
            setIntendedUrl(props.location.pathname);
        }
        console.log('flag: '+isAuthenticated);
        console.log(store.getState());
        return isAuthenticated ? (
          <AppLayoutRoute component={Component} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}/>
          
        );
      }
      }
    />
)

AuthRoute.propTypes = propTypes;
AuthRoute.displayName = 'Auth Route';

export default AuthRoute;


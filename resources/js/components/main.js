import React, { Component } from 'react';
import {BrowserRouter, Switch, withRouter} from 'react-router-dom';
import Home from './pages/Home/Index';
import Login from './pages/Login';
import GuestRoute from './router/GuestRoute';
import AuthRoute from './router/AuthRoute';
import { initAuthFromExistingToken } from './actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
    initAuthFromExistingToken: PropTypes.func.isRequired
  };
  


class Main extends Component {

    constructor(props){
        super(props);
        this.props.initAuthFromExistingToken();
    }
    componentDidMount () {
        
      }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <React.Fragment>
                        <GuestRoute exact path="/" component={Login} />
                        <AuthRoute path="/home" component={Home} />
                    </React.Fragment>
                </Switch>
            </BrowserRouter>
        );
    }
}

Main.propTypes = propTypes;

const mapDispatchToProps = {
  initAuthFromExistingToken
};


export default connect(null, mapDispatchToProps)(Main);



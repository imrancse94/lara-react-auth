import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './store/createstore';
import {Provider} from 'react-redux';
import Home from './pages/Home/Index';
import Login from './pages/Login';
import GuestRoute from './router/GuestRoute';
import AuthRoute from './router/AuthRoute';
import localforage from 'localforage';
//import { initAuthFromExistingToken } from './actions/auth';
//import { setLoading } from './actions/loading';
//import PropTypes from 'prop-types';
//import {connect} from 'react-redux';

// const propTypes = {
//     initAuthFromExistingToken: PropTypes.func.isRequired
//   };

  export default class Main extends Component {

    componentDidMount () {
        console.log(localforage.getItem('authtoken'));
        //this.props.initAuthFromExistingToken(() => this.props.setLoading(false));
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

// Main.propTypes = propTypes;

// const mapDispatchToProps = {
//   initAuthFromExistingToken
// };

// export default connect(null, mapDispatchToProps)(Main);

if (document.getElementById('example')) {
    ReactDOM.render(
                <Provider store={store}>
                        <Main />
                </Provider>, 
                document.getElementById('example'));
}

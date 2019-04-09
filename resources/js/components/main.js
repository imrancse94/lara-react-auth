import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import store from './store/createstore';
import {Provider} from 'react-redux';
import Home from './pages/Home/Index';
import Login from './pages/Login';
import GuestRoute from './router/GuestRoute';
import AuthRoute from './router/AuthRoute';
import { initAuthFromExistingToken } from './actions/auth';




class Main extends Component {

    constructor(props){
        super(props);
        
      }
    componentDidMount () {
        initAuthFromExistingToken();
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



export default Main;

if (document.getElementById('example')) {
    ReactDOM.render(
                <Provider store={store}>
                        <Main />
                </Provider>, 
                document.getElementById('example'));
}

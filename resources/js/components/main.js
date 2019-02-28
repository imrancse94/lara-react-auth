import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './store/createstore';
import {Provider} from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
export default class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <React.Fragment>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <Route path='/' exact component = {Home}/>
                                <Route path='/login' component = {Login}/>          
                            </div>
                        </div>
                    </div>
                    </React.Fragment>
                </Switch>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(
                <Provider store={store}>
                        <Main />
                </Provider>, 
                document.getElementById('example'));
}
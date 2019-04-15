import React, { Component } from 'react';
import {BrowserRouter, Switch, withRouter} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import GuestRoute from './router/GuestRoute';
import AuthRoute from './router/AuthRoute';
import { connect } from 'react-redux';
import {initAuthFromExistingToken} from './actions/auth'



class Main extends Component {
    
    componentDidMount(){
        this.props.initAuthFromExistingToken();
    }

    render() {
        
        return (
            <BrowserRouter>
                <Switch>
                    <React.Fragment>
                        <AuthRoute path="/home" component={Home} />
                        <GuestRoute exact path="/" component={Login} />
                       
                    </React.Fragment>
                </Switch>
            </BrowserRouter>
        );
    }
}


const mapDispatchToProps = {
    initAuthFromExistingToken
}

const mapStateToProps = state => ({
    auth: state.auth
  });


export default connect(mapStateToProps,mapDispatchToProps)(Main);



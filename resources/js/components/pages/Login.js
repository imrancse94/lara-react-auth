import React, { Component } from 'react';
import { signInUser} from '../actions/auth';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getIntendedUrl } from '../helper/auth';

const propTypes = {
  signInUser: PropTypes.func.isRequired
};

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
          username: 'imrancse@gmail.com',
          password: '12345678',
          client_id:2,
          client_secret:'e4A7p3DYFHc8dCGU2RimdOdeIdK4m76kUqHMA6bx',
          grant_type:'password',
          errors: ''
        };
    }


    signInSuccess () {
      getIntendedUrl().then(url => {this.props.history.push(url)});
    }

    handleSubmit (e) {
      e.preventDefault();
      this.props.signInUser(this.state)
        .then(response =>  this.signInSuccess())
        .catch(error => this.setState({ errors: "error" }));
    }



    render(){
        return(
            <React.Fragment>
            <div className="login-box">
  <div className="login-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>
  
  <div className="login-box-body">
    <p className="login-box-msg">Sign in to start your session</p>

    <form onSubmit={e => this.handleSubmit(e)} method="post">
      <div className="form-group has-feedback">
        <input type="email" className="form-control" placeholder="Email"/>
        <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div className="form-group has-feedback">
        <input type="password" className="form-control" placeholder="Password"/>
        <span className="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
        </div>
       
      </div>
    </form>
  </div>
</div>
</React.Fragment>
        );
    }


}

Login.propTypes = propTypes;

const mapDispatchToProps = {
  signInUser
};

export default connect(null, mapDispatchToProps)(withRouter(Login));

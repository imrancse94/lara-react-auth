import React, { Component } from 'react';
import {connect} from 'react-redux';
import {register} from '../actions/auth';
import PropTypes from 'prop-types';

const propTypes = {
	register: PropTypes.func.isRequired
}

class Home extends Component{

    constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: ''
    };
  }

    handleSubmit(e){
    	e.preventDefault();
    	this.props.register({});
    	console.log(this.props);
    }

    render(){
        return(
        	<button className='btn btn-primary' onClick={e => this.handleSubmit(e)} >
    			Click Here!
			</button>
        	);
    }


}


const mapDispatchToProps = state => ({
   auth:state.auth
  
});

export default connect(mapDispatchToProps,{register})(Home);
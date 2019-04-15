import React, { Component } from 'react';
        import {connect} from 'react-redux';
        import {register} from '../../actions/auth';
        import PropTypes from 'prop-types';
        import Header from '../../layouts/Header';
        import Sidebar from '../../layouts/Sidebar';
        import Subheader from '../../layouts/Subheader';
        import Footer from '../../layouts/Footer';
        const propTypes = {
        register: PropTypes.func.isRequired
                }

class Index extends Component{

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
<React.Fragment>
    <div className="wrapper" style={{height: 'auto', minHeight:100 + '%'}}>
        <Header/>
        <Sidebar/>
        {/* content */}
        <div className="content-wrapper">

            <Subheader/>


            <section className="content">

               

            </section>

        </div>
        {/* /content */}
        <Footer/>
    </div>
</React.Fragment>
        );
}


}


const mapDispatchToProps = state => ({
auth:state.auth

        });
export default connect(mapDispatchToProps, {register})(Index);
import React, { Component } from 'react';

class Subheader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
                <React.Fragment>
                    <section className="content-header">
                        <h1>
                            Dashboard
                            <small>Control panel</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                            <li className="active">Dashboard</li>
                        </ol>
                    </section>
                </React.Fragment>
                );
    }

}




export default Subheader;
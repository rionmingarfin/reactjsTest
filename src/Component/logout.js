import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Logout extends Component {
    constructor(props) {
        super(props);
        localStorage.removeItem('jwToken')
        localStorage.removeItem('id')
        localStorage.removeItem('username')
    }
    render() {

        return (
            <div>
                <Redirect to="/product" />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.product
    };
};
export default connect(mapStateToProps)(Logout);    

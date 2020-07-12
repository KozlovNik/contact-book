import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    console.log(isAuthenticated);
    return (
        <Route {...rest} render={
            props => (
                isAuthenticated
                    ? <Component {...props} />
                    : <Redirect to="/login" />
            )
        }
        />
    )
}

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute)

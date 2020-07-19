import React, { Fragment, useEffect } from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { getUser } from '../../redux/actions';

import Header from '../header/header';
import LoginForm from '../login-page/login-page';
import PrivateRoute from '../private-route/private-route';
import RegisterForm from '../register-page/register-page';
import HomePage from '../home-page/home-page';

import './app.css';

const App = ({ getUser }) => {
  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <Fragment>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/login" component={LoginForm} />
            <PrivateRoute exact path="/" component={HomePage} />
          </Switch>
        </Router>
    </Fragment>
  )
}



const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated
})

export default connect(mapStateToProps, { getUser })(App);
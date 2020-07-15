import React, { Fragment, useEffect } from 'react';
import Header from '../header/header';
import LoginForm from '../login-page/login-page';
import './app.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import RegisterForm from '../register-page/register-page';
import { getUser } from '../../redux/actions';
import HomePage from '../home-page/home-page';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import Errors from '../errors/errors';


const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '100px',
  // you can also just use 'scale'
  transition: transitions.FADE
}

const App = ({ isAuthenticated, getUser }) => {
  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <Fragment>
      <AlertProvider template={AlertTemplate} {...options}>
        <Router>
          <Header />
          {/* <Errors /> */}
          <Switch>
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/login" component={LoginForm} />
            <PrivateRoute exact path="/" component={HomePage} />
          </Switch>
        </Router>
      </AlertProvider>
    </Fragment>
  )
}



const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated
})

export default connect(mapStateToProps, { getUser })(App);
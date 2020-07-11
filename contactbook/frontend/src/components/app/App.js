import React, { Fragment } from 'react';
import Header from '../header/header';
import LoginForm from '../login-form/login-form';
import './app.css';

const App = () => {
  return (
    <Fragment>
      <Header />
      <LoginForm />
    </Fragment>
  )
}

export default App;
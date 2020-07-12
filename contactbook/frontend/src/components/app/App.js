import React, { Fragment } from 'react';
import Header from '../header/header';
import LoginForm from '../login-form/login-form';
import './app.css';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <PrivateRoute exact path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </Fragment>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Nomatch from './Nomatch';

const LoggedOut = () => {
  return (
    <>
      {/*-----------Navigation -------------- */}
      <nav>
        <div className="nav-wrapper blue darken-2">
          <Link to="/">Logo</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/*------------------Main content-------------*/}
      <div className="container">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Nomatch />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default LoggedOut;

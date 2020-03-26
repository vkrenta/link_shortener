import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Internal from './Internal';
import Nomatch from './Nomatch';

const LoggedIn = () => {
  return (
    <>
      {/*-----------Navigation -------------- */}
      <nav>
        <div className="nav-wrapper blue darken-2">
          <Link to="/">Logo</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/mylinks">My links</Link>
            </li>
            <li>
              <Link to="/account">My profile</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/*------------------Main content-------------*/}
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/mylinks">
            <Home />
          </Route>
          <Route exact path="/account">
            <Home />
          </Route>
          <Route exact path="/internal">
            <Internal />
          </Route>
          <Route exact path="/login">
            <Redirect to="/" />
          </Route>
          <Route exact path="/signup">
            <Redirect to="/" />
          </Route>
          <Route path="*">
            <Nomatch />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default LoggedIn;

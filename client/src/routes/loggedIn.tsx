import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';

const LoggedIn = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create link</Link>
        </li>
        <li>
          <Link to="/links">My links</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};

export default LoggedIn;

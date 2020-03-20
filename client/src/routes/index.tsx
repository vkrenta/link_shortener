import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Nomatch from './Nomatch';

const useRoutes = (isAuthentificated: boolean) => {
  if (!isAuthentificated)
    return (
      <>
        <ul>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>

        <hr />

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
      </>
    );

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
        <Route path="/">
          <Home />
        </Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
    </>
  );
};

export default useRoutes;

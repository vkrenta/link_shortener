import React, { FunctionComponent } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Nomatch from './Nomatch';
import { useSelector } from 'react-redux';

const useRoutes = () => {
  console.log('Triggered');
  const user = useSelector((state: any) => state.currentUser);
  if (!user.authenticated)
    return (
      <>
        <ul>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
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
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};

export default useRoutes;

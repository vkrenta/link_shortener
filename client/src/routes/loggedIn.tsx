import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Internal from './Internal';
import Nomatch from './Nomatch';
import LogOut from './LogOut';
import { useDispatch } from 'react-redux';
import { removeToken } from '../actions';
import MyLinks from './MyLinks';
import MyProfile from './MyProfile';

const LoggedIn = () => {
  const dispatch = useDispatch();

  const logOutHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(removeToken());
  };

  return (
    <>
      {/* -----------Navigation -------------- */}
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
              <a href="/" onClick={(e: React.MouseEvent) => logOutHandler(e)}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ------------------Main content------------- */}
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/mylinks">
            <MyLinks />
          </Route>
          <Route exact path="/account">
            <MyProfile />
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
          <Route exact path="/logout">
            <LogOut />
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

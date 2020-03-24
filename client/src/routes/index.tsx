import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoggedOut from './loggedOut';
import LoggedIn from './loggedIn';
import { Redirect, Switch } from 'react-router-dom';
import { clearError } from '../actions';

const useRoutes = () => {
  const { authenticated }: { authenticated: boolean } = useSelector(
    (state: any) => state.currentUser
  );

  if (!authenticated) return <LoggedOut />;

  return <LoggedIn />;
};

export default useRoutes;

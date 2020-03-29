import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoggedOut from './loggedOut';
import LoggedIn from './loggedIn';
import { authenticate } from '../actions';

const useRoutes = () => {
  const dispatch = useDispatch();
  const { authenticated }: { authenticated: boolean } = useSelector(
    (state: any) => state.currentUser
  );

  const token: string | null = useSelector((state: any) => state.token);
  if (token) dispatch(authenticate(token));

  if (!token) return <LoggedOut />;

  return <LoggedIn />;
};

export default useRoutes;

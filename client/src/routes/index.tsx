import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import LoggedOut from './loggedOut';
import LoggedIn from './loggedIn';

const useRoutes = () => {
  console.log('Triggered');
  const { authenticated }: { authenticated: boolean } = useSelector(
    (state: any) => state.currentUser
  );

  if (!authenticated) return <LoggedOut />;

  return <LoggedIn />;
};

export default useRoutes;

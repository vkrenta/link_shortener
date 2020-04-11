import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../actions';
import { UserInfo } from '../types';
import Preloader from './components/Preloader';

const MyProfile: FC = () => {
  const dispatch = useDispatch();
  const token: string = useSelector((state: any) => state.token);
  const userInfo: UserInfo = useSelector((state: any) => state.userInfo);

  useEffect(() => {
    dispatch(getUserInfo(token));
  }, [dispatch, token]);

  if (userInfo == null) return <Preloader />;

  return (
    <>
      <h6>{JSON.stringify(userInfo)}</h6>
    </>
  );
};

export default MyProfile;

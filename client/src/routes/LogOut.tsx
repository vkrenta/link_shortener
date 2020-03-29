import React from 'react';
import { useDispatch } from 'react-redux';
import { removeToken } from '../actions';
import { Redirect } from 'react-router-dom';

const LogOut = () => {
  const dispatch = useDispatch();
  dispatch(removeToken());
  return <Redirect to="/" />;
};

export default LogOut;

import { put, call } from 'redux-saga/effects';
import {
  internalError,
  removeToken,
  removeUser,
  customError,
} from '../actions';
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

export default function* errorHandler(e: any) {
  const { message, code } = JSON.parse(e.message);

  if (code === 500) {
    yield put(internalError(message));
    yield call(ReturnInternal);
  }
  if (code === 6001) {
    yield put(removeToken());
    yield put(removeUser());
  } else yield put(customError(code, message));
}

function ReturnInternal() {
  return (
    <Switch>
      <Redirect to="/internal" />
    </Switch>
  );
}

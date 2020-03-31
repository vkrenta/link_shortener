import { put } from 'redux-saga/effects';
import {
  internalError,
  removeToken,
  removeUser,
  customError,
} from '../actions';

export default function* errorHandler(e: any) {
  const { message, code } = JSON.parse(e.message);
  if (code === 500) yield put(internalError(message));
  if (code === 6001) {
    yield put(removeToken());
    yield put(removeUser());
  } else yield put(customError(code, message));
}

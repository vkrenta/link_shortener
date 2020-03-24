import { call, put, takeEvery } from 'redux-saga/effects';
import authenticate from '../api/auth.api';
import {
  REGISTER_USER,
  setUser,
  internalError,
  customError,
  initPreloader,
  endPreloader,
} from '../actions';

function* workerRegister(action: any) {
  try {
    yield put(initPreloader());
    const account = yield call(
      authenticate,
      action.payload.user,
      action.payload.password
    );

    yield put(setUser(account.user));
    yield put(endPreloader());
  } catch (e) {
    console.log(e);
    yield put(endPreloader());
    const { message, code } = JSON.parse(e.message);
    if (code === 500) yield put(internalError(message));
    else yield put(customError(code, message));
  }
}

export function* watchRegister() {
  yield takeEvery(REGISTER_USER, workerRegister);
}

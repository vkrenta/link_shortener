import { call, put, takeEvery } from 'redux-saga/effects';
import login from '../api/login.api';
import {
  LOGIN_USER,
  setUser,
  internalError,
  customError,
  initPreloader,
  endPreloader,
  disableButton,
} from '../actions';

function* workerLogin(action: any) {
  try {
    yield put(initPreloader());
    const account = yield call(
      login,
      action.payload.user,
      action.payload.password
    );

    yield put(setUser(account.user));
    yield put(endPreloader());
    yield put(disableButton());
  } catch (e) {
    console.log(e);
    yield put(endPreloader());
    const { message, code } = JSON.parse(e.message);
    if (code === 500) yield put(internalError(message));
    else yield put(customError(code, message));
  }
}

export default function* watchRegister() {
  yield takeEvery(LOGIN_USER, workerLogin);
}

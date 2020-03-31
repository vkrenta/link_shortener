import { call, put, takeEvery } from 'redux-saga/effects';
import login from '../api/login.api';
import {
  LOGIN_USER,
  internalError,
  customError,
  initPreloader,
  endPreloader,
  setToken,
} from '../actions';

function* workerLogin(action: any) {
  try {
    yield put(initPreloader());
    const { token }: { token: string } = yield call(
      login,
      action.payload.userNameOrEmail,
      action.payload.password
    );
    yield put(setToken(token));
    yield put(endPreloader());
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

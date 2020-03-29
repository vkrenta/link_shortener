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
    console.log(token);
    yield put(setToken(token));
    // yield put(setUser(account.user));
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

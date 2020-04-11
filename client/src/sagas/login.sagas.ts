import { call, put, takeEvery } from 'redux-saga/effects';
import login from '../api/login.api';
import { LOGIN_USER, initPreloader, endPreloader, setToken } from '../actions';
import errorHandler from './errorHandler';

function* workerLogin(action: any) {
  try {
    yield put(initPreloader());
    const { token }: { token: string } = yield call(
      login,
      action.payload.userNameOrEmail,
      action.payload.password
    );
    yield put(setToken(token));
  } catch (e) {
    yield errorHandler(e);
  } finally {
    yield put(endPreloader());
  }
}

export default function* watchRegister() {
  yield takeEvery(LOGIN_USER, workerLogin);
}

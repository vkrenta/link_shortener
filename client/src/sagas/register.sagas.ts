import { call, put, takeEvery } from 'redux-saga/effects';
import register from '../api/register.api';
import {
  REGISTER_USER,
  initPreloader,
  endPreloader,
  disableButton,
  sendAlert,
} from '../actions';
import errorHandler from './errorHandler';
function* workerRegister(action: any) {
  try {
    yield put(initPreloader());
    const { message } = yield call(register, {
      email: action.payload.email,
      userName: action.payload.userName,
      password: action.payload.password,
    });

    yield put(sendAlert(message));
    yield put(disableButton());
  } catch (e) {
    yield errorHandler(e);
  } finally {
    yield put(endPreloader());
  }
}

export function* watchRegister() {
  yield takeEvery(REGISTER_USER, workerRegister);
}

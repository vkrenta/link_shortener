import { call, put, takeEvery } from 'redux-saga/effects';
import register from '../api/register.api';
import {
  REGISTER_USER,
  internalError,
  customError,
  initPreloader,
  endPreloader,
  disableButton,
  sendAlert,
} from '../actions';
function* workerRegister(action: any) {
  try {
    yield put(initPreloader());
    const { message } = yield call(register, {
      email: action.payload.email,
      userName: action.payload.userName,
      password: action.payload.password,
    });

    yield put(sendAlert(message));
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

export function* watchRegister() {
  yield takeEvery(REGISTER_USER, workerRegister);
}

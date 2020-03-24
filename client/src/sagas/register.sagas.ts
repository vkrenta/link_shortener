import { call, put, takeEvery } from 'redux-saga/effects';
import authenticate from '../api/auth.api';
import { REGISTER_USER, setUser, internalError, customError } from '../actions';

function* workerRegister(action: any) {
  try {
    const account = yield call(
      authenticate,
      action.payload.user,
      action.payload.password
    );

    yield put(setUser(account.user));
  } catch (e) {
    console.log(e);
    const { message, code } = JSON.parse(e.message);
    if (code === 500) yield put(internalError(message));
    else yield put(customError(code, message));
  }
}

export function* watchRegister() {
  yield takeEvery(REGISTER_USER, workerRegister);
}

import { call, put, takeEvery } from 'redux-saga/effects';
import authenticate from '../api/auth.api';
import { REGISTER_USER, setUser } from '../actions';

function* workerRegister(action: any) {
  try {
    console.log(action);
    const account = yield call(
      authenticate,
      action.payload.user,
      action.payload.password
    );

    yield put(setUser(account.user));
  } catch (e) {
    console.log(e);
  }
}

export function* watchRegister() {
  yield takeEvery(REGISTER_USER, workerRegister);
}

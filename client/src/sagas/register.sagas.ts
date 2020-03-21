import { call, put, takeEvery } from 'redux-saga/effects';
import authentificate from '../api/auth.api';
import { SET_USER, REGISTER_USER, setUser } from '../actions';

function* workerRegister(action: any) {
  try {
    console.log(action);
    const account = yield call(
      authentificate,
      action.payload.user,
      action.payload.password
    );

    yield put(setUser(account));
  } catch (e) {
    console.log(e);
  }
}

export function* watchRegister() {
  yield takeEvery(REGISTER_USER, workerRegister);
}

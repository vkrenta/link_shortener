import { call, put, takeEvery } from 'redux-saga/effects';
import {
  AUTHENTICATE,
  internalError,
  customError,
  removeToken,
} from '../actions';
import checkToken from '../api/authenticate.api';

function* worker(action: any) {
  try {
    const result = yield call(checkToken, action.payload.token);
    console.log(result);
  } catch (e) {
    const { message, code } = JSON.parse(e.message);
    if (code === 500) yield put(internalError(message));
    if (code === 6001) yield put(removeToken());
    else yield put(customError(code, message));
  }
}

export function* watchToken() {
  yield takeEvery(AUTHENTICATE, worker);
}

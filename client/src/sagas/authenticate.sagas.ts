import { call, put, takeEvery } from 'redux-saga/effects';
import { AUTHENTICATE, setUser } from '../actions';
import checkToken from '../api/authenticate.api';
import errorHandler from './errorHandler';

function* worker(action: any) {
  try {
    const {
      userName,
      userId,
    }: { userName: string; userId: string } = yield call(
      checkToken,
      action.payload.token
    );
    yield put(setUser(userId, userName));
  } catch (e) {
    yield errorHandler(e);
  }
}

export function* watchToken() {
  yield takeEvery(AUTHENTICATE, worker);
}

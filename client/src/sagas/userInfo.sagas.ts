import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_USER_INFO, setUserInfo } from '../actions';
import { Action, UserInfo } from '../types';
import getUserInfoFromServer from '../api/userInfo.api';
import errorHandler from './errorHandler';

function* worker(action: Action) {
  try {
    const userInfo: UserInfo = yield call(
      getUserInfoFromServer,
      action.payload.token
    );
    yield put(setUserInfo(userInfo));
  } catch (e) {
    yield errorHandler(e);
  }
}

export default function* watchUserInfo() {
  yield takeEvery(GET_USER_INFO, worker);
}

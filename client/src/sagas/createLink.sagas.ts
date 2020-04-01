import { takeEvery, put, call } from 'redux-saga/effects';
import {
  CREATE_SHORT_LINK,
  initPreloader,
  endPreloader,
  setCurrentLink,
} from '../actions';
import errorHandler from './errorHandler';
import createLink from '../api/createShort.api';

function* worker(action: any) {
  try {
    yield put(initPreloader());
    const { short }: { short: string } = yield call(
      createLink,
      action.payload.long,
      action.payload.token
    );
    // console.log(short);
    yield put(setCurrentLink(short));
  } catch (e) {
    yield errorHandler(e);
  } finally {
    yield put(endPreloader());
  }
}

export default function* watchCurrentLink() {
  yield takeEvery(CREATE_SHORT_LINK, worker);
}

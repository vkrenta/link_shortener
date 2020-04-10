import { takeEvery, call, put } from 'redux-saga/effects';
import { LOAD_LINKS, setLinks } from '../actions';
import loadLinksFromServer from '../api/loadLinks.api';
import errorHandler from './errorHandler';
import { Action } from '../types';

function* worker(action?: Action) {
  try {
    const links = yield call(loadLinksFromServer, action?.payload.token);
    yield put(setLinks(links));
  } catch (e) {
    yield errorHandler(e);
  }
}

export function* loadLinksWatch() {
  yield takeEvery(LOAD_LINKS, worker);
}

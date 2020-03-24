import { call, put, takeEvery } from 'redux-saga/effects';
import { CUSTOM_ERROR, clearError } from '../actions';
import M from 'materialize-css';

function* worker(action: any) {
  yield call(M.toast, { html: action.payload.message });
  yield put(clearError());
}

export default function* watchError() {
  yield takeEvery(CUSTOM_ERROR, worker);
}

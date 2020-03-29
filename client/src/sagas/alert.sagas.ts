import { call, put, takeEvery } from 'redux-saga/effects';
import { CUSTOM_ERROR, clearError, SEND_ALERT } from '../actions';
import M from 'materialize-css';

function* worker(action: any) {
  yield call(M.toast, { html: action.payload.message });
}

export function* watchAlert() {
  yield takeEvery(SEND_ALERT, worker);
}

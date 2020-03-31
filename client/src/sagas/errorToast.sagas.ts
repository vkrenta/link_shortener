import { put, takeEvery } from 'redux-saga/effects';
import { CUSTOM_ERROR, clearError, sendAlert } from '../actions';

function* worker(action: any) {
  yield put(sendAlert(action.payload.message));
  yield put(clearError());
}

export default function* watchError() {
  yield takeEvery(CUSTOM_ERROR, worker);
}

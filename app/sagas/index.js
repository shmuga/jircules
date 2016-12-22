import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

export function* watchIncrementAsync() {

}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    watchIncrementAsync()
  ];
}

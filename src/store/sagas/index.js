import { all, fork } from 'redux-saga/effects';
import homeDataSaga from './homeDataSaga';

function* rootSaga() {
  yield all([
    fork(homeDataSaga),
  ]);
}

export default rootSaga;

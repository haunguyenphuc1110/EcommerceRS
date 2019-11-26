import { all, fork } from 'redux-saga/effects';
import homeDataSaga from './homeDataSaga';
import categoryDataSaga from './categoryDataSaga';

function* rootSaga() {
  yield all([
    fork(homeDataSaga),
    fork(categoryDataSaga),
  ]);
}

export default rootSaga;

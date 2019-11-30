import { all, fork,  } from 'redux-saga/effects';
import homeDataSaga from './homeDataSaga';
import categoryDataSaga from './categoryDataSaga';
import userDataSaga from './userDataSaga';

function* rootSaga() {
  yield all([
    fork(homeDataSaga),
    fork(categoryDataSaga),
    fork(userDataSaga)
  ]);
}

export default rootSaga;

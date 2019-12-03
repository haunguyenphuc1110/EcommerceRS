import { call, put, takeLatest } from 'redux-saga/effects';
import CONSTANTS from '../constants';
import Api  from '../../api/call';

function* searchProduct(action) {
  try {
    const response = yield call(Api.search, action.payload);

    yield put({
      type: CONSTANTS.SEARCH_SUCCEED,
      payload: response
    });

  } catch (e) {
    yield put({
      type: CONSTANTS.SEARCH_FAILED
    });
  }
}

function* searchDataSaga() {
  yield takeLatest(CONSTANTS.SEARCH, searchProduct);
}

export default searchDataSaga;
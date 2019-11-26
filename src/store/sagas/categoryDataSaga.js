import { call, put, takeLatest } from 'redux-saga/effects';
import CONSTANTS from '../constants';
import Api  from '../../api/call';

function* getTopProductCateLvl1(action) {
  try {
    const response = yield call(Api.getTopProductCate1, action.payload);

    yield put({
      type: CONSTANTS.GET_TOP_PRODUCT_CATE_LVL1_SUCCEED,
      payload: response
    });

  } catch (e) {
    yield put({
      type: CONSTANTS.GET_TOP_PRODUCT_CATE_LVL1_FAILED
    });
  }
}

function* getTopProductCateLvl2(action) {
  try {
    const response = yield call(Api.getTopProductCate2, action.payload);

    yield put({
      type: CONSTANTS.GET_TOP_PRODUCT_CATE_LVL2_SUCCEED,
      payload: response
    });

  } catch (e) {
    yield put({
      type: CONSTANTS.GET_TOP_PRODUCT_CATE_LVL2_FAILED
    });
  }
}

function* getTopProductCateLvl3(action) {
  try {
    const response = yield call(Api.getTopProductCate3, action.payload);

    yield put({
      type: CONSTANTS.GET_TOP_PRODUCT_CATE_LVL3_SUCCEED,
      payload: response
    });

  } catch (e) {
    yield put({
      type: CONSTANTS.GET_TOP_PRODUCT_CATE_LVL3_FAILED
    });
  }
}

function* categoryDataSaga() {
  yield takeLatest(CONSTANTS.GET_TOP_PRODUCT_CATE_LVL1, getTopProductCateLvl1);
  yield takeLatest(CONSTANTS.GET_TOP_PRODUCT_CATE_LVL2, getTopProductCateLvl2);
  yield takeLatest(CONSTANTS.GET_TOP_PRODUCT_CATE_LVL3, getTopProductCateLvl3);
}

export default categoryDataSaga;
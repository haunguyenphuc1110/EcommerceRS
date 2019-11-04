import { call, put, takeLatest } from 'redux-saga/effects';
import CONSTANTS from '../constants';
import Api  from '../../api/call';

function* getListCategory() {
  try {
    const response = yield call(Api.getCategory);

    yield put({
      type: CONSTANTS.GET_LIST_CATEGORY_SUCCEED,
      payload: response.cate_lvl1
    });

  } catch (e) {
    yield put({
      type: CONSTANTS.GET_LIST_CATEGORY_FAILED
    });
  }
}

function* getListRecommendedItem() {
  try {
    const response = yield call(Api.getListItem);

    yield put({
      type: CONSTANTS.GET_RECOMMEND_PRODUCT_SUCCEED,
      payload: response.cate_lvl3
    });

  } catch (e) {
    yield put({
      type: CONSTANTS.GET_RECOMMEND_PRODUCT_FAILED
    });
  }
}

function* homeDataSaga() {
  yield takeLatest(CONSTANTS.GET_LIST_CATEGORY, getListCategory);
  yield takeLatest(CONSTANTS.GET_RECOMMEND_PRODUCT, getListRecommendedItem);
}

export default homeDataSaga;
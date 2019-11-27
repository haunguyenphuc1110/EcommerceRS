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
    const response = yield call(Api.getTopProductCateLvl3, action.payload);

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

function* getListCategoryLvl2ByCategoryLvl1(action) {
  try {
    const response = yield call(Api.getListCategory2ByCateId1, action.payload);

    yield put({
      type: CONSTANTS.GET_LIST_CATEGORY_LVL2_BY_CATEGORY_LVL1_SUCCEED,
      payload: response
    });

  } catch (e) {
    yield put({
      type: CONSTANTS.GET_LIST_CATEGORY_LVL2_BY_CATEGORY_LVL1_FAILED
    });
  }
}

function* getListCategoryLvl3ByCategoryLvl2(action) {
  try {
    const response = yield call(Api.getListCategory3ByCateId2, action.payload);

    yield put({
      type: CONSTANTS.GET_LIST_CATEGORY_LVL3_BY_CATEGORY_LVL2_SUCCEED,
      payload: response
    });

  } catch (e) {
    yield put({
      type: CONSTANTS.GET_LIST_CATEGORY_LVL3_BY_CATEGORY_LVL2_FAILED
    });
  }
}

function* categoryDataSaga() {
  yield takeLatest(CONSTANTS.GET_TOP_PRODUCT_CATE_LVL1, getTopProductCateLvl1);
  yield takeLatest(CONSTANTS.GET_TOP_PRODUCT_CATE_LVL2, getTopProductCateLvl2);
  yield takeLatest(CONSTANTS.GET_TOP_PRODUCT_CATE_LVL3, getTopProductCateLvl3);
  yield takeLatest(CONSTANTS.GET_LIST_CATEGORY_LVL2_BY_CATEGORY_LVL1, getListCategoryLvl2ByCategoryLvl1);
  yield takeLatest(CONSTANTS.GET_LIST_CATEGORY_LVL3_BY_CATEGORY_LVL2, getListCategoryLvl3ByCategoryLvl2);
}

export default categoryDataSaga;
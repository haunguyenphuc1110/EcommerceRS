import { call, put, takeLatest } from 'redux-saga/effects';
import CONSTANTS from '../constants';
import Api  from '../../api/call';

function* getListCategoryLvl1() {
  try {
    const response = yield call(Api.getListCategory1);

    yield put({
      type: CONSTANTS.GET_LIST_CATEGORY_LVL1_SUCCEED,
      payload: response
    });

  } catch (e) {
    yield put({
      type: CONSTANTS.GET_LIST_CATEGORY_LVL1_FAILED
    });
  }
}

function* getListCategoryLvl2() {
  try {
    const response = yield call(Api.getListCategory2);

    yield put({
      type: CONSTANTS.GET_LIST_CATEGORY_LVL2_SUCCEED,
      payload: response
    });

  } catch (e) {
    yield put({
      type: CONSTANTS.GET_LIST_CATEGORY_LVL2_FAILED
    });
  }
}

function* getListRecommendedItem(action) {
  try {
    const response = yield call(Api.getListItem, action.payload);

    if (response.response) {
      if (!action.payload.shouldReload) {
        yield put({
          type: CONSTANTS.GET_RECOMMEND_PRODUCT_SUCCEED,
          payload: []
        });
      }
      else {
        yield put({
          type: CONSTANTS.GET_RECOMMEND_PRODUCT_REGISTERED_USER_SUCCEED,
          payload: []
        });
      }  
    }
    else{
      if (!action.payload.shouldReload) {
        yield put({
          type: CONSTANTS.GET_RECOMMEND_PRODUCT_SUCCEED,
          payload: response
        });
      }
      else {
        yield put({
          type: CONSTANTS.GET_RECOMMEND_PRODUCT_REGISTERED_USER_SUCCEED,
          payload: response
        });
      }  
    }

  } catch (e) {
    yield put({
      type: CONSTANTS.GET_RECOMMEND_PRODUCT_FAILED
    });
  }
}

function* getListRecommendedItemFullMode(action) {
  try {
    const response = yield call(Api.getListItemFullMode, action.payload);

    if (response.response) {
      yield put({
        type: CONSTANTS.GET_MAYBE_LIKE_PRODUCT_SUCCEED,
        payload: []
      }); 
    }
    else{
      yield put({
        type: CONSTANTS.GET_MAYBE_LIKE_PRODUCT_SUCCEED,
        payload: response
      });
    }

  } catch (e) {
    yield put({
      type: CONSTANTS.GET_MAYBE_LIKE_PRODUCT_FAILED
    });
  }
}

function* homeDataSaga() {
  yield takeLatest(CONSTANTS.GET_LIST_CATEGORY_LVL1, getListCategoryLvl1);
  yield takeLatest(CONSTANTS.GET_LIST_CATEGORY_LVL2, getListCategoryLvl2);
  yield takeLatest(CONSTANTS.GET_RECOMMEND_PRODUCT, getListRecommendedItem);
  yield takeLatest(CONSTANTS.GET_MAYBE_LIKE_PRODUCT, getListRecommendedItemFullMode);
}

export default homeDataSaga;
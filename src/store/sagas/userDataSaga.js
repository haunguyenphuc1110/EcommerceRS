import { call, put, takeLatest } from 'redux-saga/effects';
import CONSTANTS from '../constants';
import Api  from '../../api/call';

function* login(action) {
  try {
    const response = yield call(Api.login, action.payload);
    if (response.user_id) {
      yield put({
        type: CONSTANTS.LOGIN_SUCCEED,
        payload: response.user_id
      });
    }
    else {
      yield put({
        type: CONSTANTS.LOGIN_FAILED
      });
    }
  } catch (e) {
    yield put({
      type: CONSTANTS.LOGIN_FAILED
    });
  }
}

function* userDataSaga() {
  yield takeLatest(CONSTANTS.LOGIN, login);
}

export default userDataSaga;
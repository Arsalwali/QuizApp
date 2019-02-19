import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_QUESTION } from "../actionTypes/questions";
import { apiSaga } from '../sagas/api';
import { getQuestionSuccess, getQuestionFailure } from '../actionCreators/questions';

export function* watcherQuestionSaga() {
  yield takeEvery(GET_QUESTION, getQuestion);
}

export function* getQuestion() {
  const url = 'https://opentdb.com/api.php?amount=10&category=9';
  const method = 'GET';
  const params = null;
  const response = yield call(apiSaga, url, method, params);

  if (response.status === 200) {
    yield put(getQuestionSuccess(response.data.results));
  } else {
    yield put(getQuestionFailure());
  }
}
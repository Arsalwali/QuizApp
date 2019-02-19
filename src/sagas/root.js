import { all, fork } from 'redux-saga/effects';
import { watcherQuestionSaga } from '../sagas/questions';

export default function* rootSaga() {
  yield all([
    fork(watcherQuestionSaga),
  ]);
}

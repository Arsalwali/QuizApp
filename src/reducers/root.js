import { combineReducers } from 'redux';
import questionReducer from './questions';

const reducers = combineReducers({
  questions: questionReducer,
});

export default reducers;
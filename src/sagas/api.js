import axios from 'axios';
import { call } from 'redux-saga/effects';

export function* apiSaga(url, method, params) {
  const headers = {
    'Content-Type': 'application/json',
  };
  const timeout = 10000;

  const axiosOption = {
    url,
    method,
    headers,
    timeout,
  };

  if (method === 'GET') {
    axios.params = params;
  } else {
    axios.data = JSON.stringify(params);
  }

  return yield call(axios, axiosOption);
}

export default null;

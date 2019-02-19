import React from 'react';
import {AppRegistry} from 'react-native';
import Questions from './src/screens/Questions';
import {name as appName} from './app.json';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reducers from './src/reducers/root';
import rootSaga from './src/sagas/root';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <Questions />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);

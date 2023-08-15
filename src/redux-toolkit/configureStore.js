import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterSlice, { incrementByValue } from './counterSlice';
import globalSlice from './globalSlice';
import logger from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';

const reducer = combineReducers({
    counter: counterSlice,
    global: globalSlice,
});

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer,
    middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

// store.dispatch(incrementByValue(1));
// sagaMiddleware.run(rootSaga)

export default store;
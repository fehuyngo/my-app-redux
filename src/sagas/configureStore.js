import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import createSagaMiddleware from 'redux-saga'
import { reducer } from "./reducers";
// import rootSaga from "./rootSaga";

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer,
    // middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
    middleware: (gDM) => gDM().concat(logger),
});

// sagaMiddleware.run(rootSaga);

export default store;
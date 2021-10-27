import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'remote-redux-devtools';
import {rootReducer} from './rootReducer';
import {rootSaga} from '../saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    compose(composeWithDevTools(applyMiddleware(sagaMiddleware))),
);

sagaMiddleware.run(rootSaga);


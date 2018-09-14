import {createStore,applyMiddleware,compose} from 'redux';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import sagas from './sagas';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancers = composeEnhancers(
    //applyMiddleware(thunk)
    applyMiddleware(sagaMiddleware)
);
const store = createStore(
    reducer,
    enhancers
    );

sagaMiddleware.run(sagas);
export default store;
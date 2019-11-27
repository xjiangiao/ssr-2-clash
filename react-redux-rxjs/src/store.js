import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import epic from './epic';
import reducer from './reducer';

const epicMiddleware = createEpicMiddleware();

// const rootReducer = combineReducers({
//   clickReducer,
// });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(epicMiddleware)));

epicMiddleware.run(epic);

export default store;

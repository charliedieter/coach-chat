import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cableMiddleware from "../utils/cableMiddleware";
import rootReducer from "../reducers/root";

const middlewares = [thunk, cableMiddleware()];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (preloadedState = {}) =>
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {responsiveStoreEnhancer} from 'redux-responsive';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    compose(
      responsiveStoreEnhancer,
      applyMiddleware(thunk, logger)
    )
  )
);

export default configureStore;
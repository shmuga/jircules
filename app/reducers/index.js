// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import login from './login-reducers';
import loading from './loading-reducers';

const rootReducer = combineReducers({
  login,
  loading,
  routing
});

export default rootReducer;

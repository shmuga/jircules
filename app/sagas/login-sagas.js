import { takeEvery } from 'redux-saga';
import { put, select, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import * as actions from '../actions/login-actions';
import * as loading from '../actions/loading-actions';
import * as JiraApi from '../api/index';
import config from '../utils/global-config';

function saveAuth(auth) {
  if (!auth.remember) {
    return true;
  }
  config.set('auth', { ...auth, password: '' });
  return true;
}

export function* authorize() {
  yield put({ type: loading.LOADING_STARTED });
  try {
    const { login: auth, routing } = yield select();
    saveAuth(auth);
    console.log(routing);
    const isLoggedIn = yield call(JiraApi.login, auth);
    const issue = yield call(JiraApi.listIssues);
    console.log(issue);
  } catch (e) {
    console.log(e.stack);
  }
  yield put({ type: loading.LOADING_FINISHED });
}

export default function* allLoginFunctions() {
  yield takeEvery(actions.START_LOGIN, authorize);
}

import { takeEvery } from 'redux-saga';
import { put, select, call } from 'redux-saga/effects';
import * as actions from '../actions/login-actions';
import * as JiraApi from '../api/index';

export function* authorize() {
  try {
    const { login } = yield select();
    const isLoggedIn = yield call(JiraApi.login, login);
    const issue = yield call(JiraApi.findIssue, 'OUT-831');
    console.log(issue);
  } catch (e) {
    console.log(e.stack);
  }



}

export default function* allLoginFunctions() {
  yield takeEvery(actions.START_LOGIN, authorize);
}

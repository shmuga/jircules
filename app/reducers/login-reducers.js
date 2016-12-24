// @flow
import {
  LOGIN_INPUT,
  URL_INPUT,
  PASSWORD_INPUT,
} from '../actions/login-actions';
import type { LoginAction } from '../actions/login-actions';

export type LoginState = {
  username: ?string,
  password: ?string,
  url: ?string
};

const defaultState: LoginState = {
  username: '',
  password: '',
  url: 'https://yourdomain.atlassian.net',
};

export default function login(state: LoginState = defaultState, action: Object) {
  switch (action.type) {
    case LOGIN_INPUT:
      return { ...state, username: action.username };
    case PASSWORD_INPUT:
      return { ...state, password: action.password };
    case URL_INPUT:
      return { ...state, url: action.url };
    default:
      return state;
  }
}

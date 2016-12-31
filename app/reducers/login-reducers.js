// @flow
import {
  LOGIN_INPUT,
  URL_INPUT,
  REMEMBER_CHANGED,
  PASSWORD_INPUT,
} from '../actions/login-actions';
import config from '../utils/global-config';
import type { LoginAction } from '../actions/login-actions';

export type LoginState = {
  username: ?string,
  password: ?string,
  url: ?string,
  remember: ?boolean
};

const auth = config.get('auth');

const defaultState: LoginState = {
  username: auth.username || '',
  password: auth.password || '',
  url: auth.url || 'https://yourdomain.atlassian.net',
  remember: auth.remember || false,
};

export default function login(state: LoginState = defaultState, action: Object) {
  switch (action.type) {
    case LOGIN_INPUT:
      return { ...state, username: action.username };
    case PASSWORD_INPUT:
      return { ...state, password: action.password };
    case URL_INPUT:
      return { ...state, url: action.url };
    case REMEMBER_CHANGED:
      return { ...state, remember: action.remember };
    default:
      return state;
  }
}

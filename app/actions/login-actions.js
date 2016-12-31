// @flow
export const LOGIN_INPUT = 'LOGIN_INPUT';
export const PASSWORD_INPUT = 'PASSWORD_INPUT';
export const URL_INPUT = 'URL_INPUT';
export const REMEMBER_CHANGED = 'REMEMBER_CHANGED';
export const START_LOGIN = 'START_LOGIN';

type LoginAction = {
  type: string,
  username?: ?string,
  password?: ?string,
  url?: ?string
};

export function onLoginChange(username: string): LoginAction {
  return {
    type: LOGIN_INPUT,
    username,
  };
}

export function onPasswordChange(password: string): LoginAction {
  return {
    type: PASSWORD_INPUT,
    password,
  };
}

export function onUrlChange(url: string): LoginAction {
  return {
    type: URL_INPUT,
    url
  };
}

export function onCheckRemember(remember: boolean) {
  return {
    type: REMEMBER_CHANGED,
    remember,
  };
}


export function onSubmit(): LoginAction {
  return {
    type: START_LOGIN,
  };
}

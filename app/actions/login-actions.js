// @flow
export const LOGIN_INPUT = 'LOGIN_INPUT';
export const PASSWORD_INPUT = 'PASSWORD_INPUT';
export const URL_INPUT = 'URL_INPUT';
export const START_LOGIN = 'START_LOGIN';

type LoginAction = {
  type: string,
  username?: ?string,
  password?: ?string,
  url?: ?string
};

export function onLoginChange(login: Object): LoginAction {
  return {
    type: LOGIN_INPUT,
    username: login.target.value,
  };
}

export function onPasswordChange(password: Object): LoginAction {
  return {
    type: PASSWORD_INPUT,
    password: password.target.value,
  };
}

export function onUrlChange(url: Object): LoginAction {
  return {
    type: URL_INPUT,
    url: url.target.value,
  };
}


export function onSubmitLoginForm(): LoginAction {
  return {
    type: START_LOGIN,
  };
}

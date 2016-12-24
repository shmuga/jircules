import Jira from 'jira-client';
import { parseURI } from '../utils';

let client = null;

function getClient() {
  return client;
}

export function setClient(auth) {
  if (client === null) {
    client = new Jira({
      protocol: 'https',
      host: null,
      username: null,
      password: null,
      apiVersion: '2',
      strictSSL: true,
      ...auth
    });
  }
  return client;
}

export function login(auth) {
  return Promise.resolve().then(() => {
    setClient({ ...auth, ...parseURI(auth.url) });
    return true;
  });
}

export function findIssue(number) {
  return getClient().findIssue(number);
}

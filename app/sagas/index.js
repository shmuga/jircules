import allLoginFunctions from './login-sagas';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    allLoginFunctions(),
  ];
}

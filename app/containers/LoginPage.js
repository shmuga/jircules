// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/login-actions';
import type { LoginState } from '../reducers/login-reducers';
import LoginForm from '../components/LoginForm/LoginForm';

class LoginPage extends Component {
  props: {
    form: LoginState,
    actions: Object
  }

  render() {
    return (
      <LoginForm
        login={this.props.form.username}
        password={this.props.form.password}
        url={this.props.form.url}
        onUrlChange={this.props.actions.onUrlChange}
        onLoginChange={this.props.actions.onLoginChange}
        onPasswordChange={this.props.actions.onPasswordChange}
        onSubmit={this.props.actions.onSubmitLoginForm}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    form: state.login
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

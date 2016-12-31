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
    loading: boolean,
    actions: Object
  }

  render() {
    return (
      <LoginForm
        {...this.props.actions}
        {...this.props.form}
        isLoading={this.props.loading}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    form: state.login,
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

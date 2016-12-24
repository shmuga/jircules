// @flow
import React, { Component } from 'react';
import { Card, CardActions, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './LoginForm.css';

export default class Home extends Component {
  props: {
    login: string,
    password: string,
    url: string,
    onLoginChange: Function,
    onPasswordChange: Function,
    onUrlChange: Function,
    onSubmit: Function
  }

  render() {
    return (
      <div className={styles.block}>
        <img src="assets/logo.png" className={styles.block} />
        <Card className={styles.card}>
          <CardText>
            <TextField
              value={this.props.url}
              onChange={this.props.onUrlChange}
              fullWidth
              floatingLabelText="JIRA url"
            /><br />
            <TextField
              value={this.props.login}
              onChange={this.props.onLoginChange}
              fullWidth
              hintText="Login"
            /><br />
            <TextField
              value={this.props.password}
              onChange={this.props.onPasswordChange}
              fullWidth
              type="password"
              hintText="Password"
            /><br />
          </CardText>
          <div className={styles.buttonBlock}>
            <CardActions>
              <RaisedButton
                label="Login"
                primary
                onClick={this.props.onSubmit}
              />
            </CardActions>
          </div>
        </Card>
      </div>
    );
  }
}

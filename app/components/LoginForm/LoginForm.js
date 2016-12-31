// @flow
import React, { Component } from 'react';
import { Card, CardActions, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Loader from '../../components/Loader';
import styles from './LoginForm.css';

export default class Home extends Component {
  props: {
    isLoading: boolean,
    username: ?string,
    password: ?string,
    url: ?string,
    onLoginChange: Function,
    onPasswordChange: Function,
    onUrlChange: Function,
    onSubmit: Function,
    onCheckRemember: Function
  }

  render() {
    return (
      <div className={styles.block}>
        <img src="assets/logo.png" className={styles.block} />
        <Card className={styles.card}>
          <CardText>
            <TextField
              value={this.props.url}
              onChange={(e) => this.props.onUrlChange(e.target.value)}
              fullWidth
              floatingLabelText="JIRA url"
            /><br />
            <TextField
              value={this.props.username}
              onChange={(e) => this.props.onLoginChange(e.target.value)}
              fullWidth
              type="text"
              hintText="Login"
            /><br />
            <TextField
              value={this.props.password}
              onChange={(e) => this.props.onPasswordChange(e.target.value)}
              fullWidth
              type="password"
              hintText="Password"
            /><br />
            <Checkbox
              onCheck={(e, checked) => this.props.onCheckRemember(checked)}
              label="Remember me"
            /><br />
          </CardText>
          <div className={styles.buttonBlock}>
            <CardActions>
              <RaisedButton
                label="Login"
                disabled={this.props.isLoading}
                primary
                onClick={this.props.onSubmit}
              >
                <Loader isLoading={this.props.isLoading} />
              </RaisedButton>
            </CardActions>
          </div>
        </Card>
      </div>
    );
  }
}

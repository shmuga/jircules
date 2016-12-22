// @flow
import React, { Component } from 'react';
const remote = require('electron').remote;

import { Card, CardActions, CardMedia, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './LoginForm.css';


export default class Home extends Component {
  render() {
    return (
      <div className={styles.block}>
        <img src="assets/logo.png" className={styles.block} />
        <Card className={styles.card}>
          <CardText>
            <TextField
              fullWidth
              floatingLabelText="JIRA url"
              defaultValue="https://yourdomain.atlassian.net"
            /><br />
            <TextField
              fullWidth
              hintText="Login"
            /><br />
            <TextField
              fullWidth
              hintText="Password"
            /><br />
          </CardText>
          <div className={styles.buttonBlock}>
            <CardActions>
              <RaisedButton label="Login" primary onClick={() => {
                                var win = remote.getCurrentWindow();
                    // now i have everything from BrowserWindow api...
                    win.setSize(800, 600);
                    win.center();
              }}/>
            </CardActions>
          </div>
        </Card>
      </div>
    );
  }
}

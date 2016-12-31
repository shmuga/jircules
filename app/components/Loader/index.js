// @flow
import React, { Component } from 'react';
import LinearProgress from 'material-ui/LinearProgress';


export default class Loader extends Component {
  props: {
    isLoading: boolean
  }

  render() {
    return this.props.isLoading
      ? <LinearProgress mode="indeterminate" />
      : null;
  }
}

// @flow
import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import styles from './issue-styles.css';

export default class Issue extends Component {
  props: {
    name: string,
    status: string,
    priority: string,
    type: string,
    id: string,
    created: string
  }

  selectPriorityIcon(property: string) {
    let priority = null;
    switch (property) {
      case 'Highest':
        priority = { color: '#ce0000', type: 'up' };
        break;
      case 'High':
        priority = { color: '#ea4444', type: 'up' };
        break;
      case 'Medium':
        priority = { color: '#ea7d24', type: 'down' };
        break;
      case 'Low':
        priority = { color: '#2a8735', type: 'down' };
        break;
      default:
        priority = { color: '#55a557', type: 'down' };
    }
    return (
      <FontIcon style={{ color: priority.color }} className="material-icons">
        {`keyboard_arrow_${priority.type}`}
      </FontIcon>
    );
  }

  selectTypeIcon(type: string) {
    const types = {
      Bug: { icon: 'format_bold', color: '#e5493a' },
      Task: { icon: 'title', color: '#4bade8' },
      Epic: { icon: 'flash_on', color: '#904ee2' },
      Story: {icon: 'book', color: '#904ee2' },
    };

    const currentType = types[type] || { icon: type, color: '#707070' };

    return (
      <FontIcon style={{ color: currentType.color }} className="material-icons">
        {`${currentType.icon}`}
      </FontIcon>
    );
  }

  render() {
    return (
      <ListItem className={styles.issue}>
        <div className={styles.id} alt="id in jira">
          Outsource / {this.props.id} &nbsp;
          <span className={styles.created}>{this.props.created}</span>
        </div>
        <div>
          <span className={styles.priority}>
            {this.selectPriorityIcon(this.props.priority)}
          </span>
          <span className={styles.type}>
            {this.selectTypeIcon(this.props.type)}
          </span>
          <Chip className={styles.status}>{this.props.status}</Chip>
        </div>

        <div className={styles.name}>{this.props.name}</div>


      </ListItem>
    );
  }
}

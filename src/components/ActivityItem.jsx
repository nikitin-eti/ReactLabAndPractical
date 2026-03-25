import React from 'react';
import styles from './ActivityItem.module.css';

const ActivityItem = ({ action, date }) => {
  return (
    <div className={styles.logLine}>
      <span className={styles.timestamp}>[{date}]</span>
      <span className={styles.action}> {action}</span>
      <span className={styles.cursor}>_</span>
    </div>
  );
};

export default ActivityItem;

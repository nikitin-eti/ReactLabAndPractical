import React from 'react';
import styles from './ActivityItem.module.css';

const ActivityItem = ({ action, date, onLike }) => {
  console.log(`ActivityItem ${action} відрендерився!`);

  return (
    <div className={styles.logLine} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <span className={styles.timestamp}>[{date}]</span>
        <span className={styles.action}> {action}</span>
        <span className={styles.cursor}>_</span>
      </div>
      <button 
        onClick={onLike}
        style={{
          backgroundColor: 'transparent',
          border: '1px solid #22c55e',
          color: '#22c55e',
          cursor: 'pointer',
          fontFamily: 'monospace',
          fontSize: '10px',
          padding: '2px 5px'
        }}
      >
        LIKE
      </button>
    </div>
  );
};

export default React.memo(ActivityItem);

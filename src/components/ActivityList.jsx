import React from 'react';
import ActivityItem from './ActivityItem';

const ActivityList = ({ activities, onLike }) => {
  return (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <h4 style={{ color: '#22c55e', fontFamily: 'monospace', marginBottom: '15px' }}>
        ІСТОРІЯ_ПІДКЛЮЧЕНЬ_V.4.2:
      </h4>
      {activities.length > 0 ? (
        activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} onLike={onLike} />
        ))
      ) : (
        <p style={{ color: '#475569', fontSize: '13px' }}>ЛОГИ_ПОРОЖНІ</p>
      )}
    </div>
  );
};

export default ActivityList;

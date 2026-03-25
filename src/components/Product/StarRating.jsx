import React from 'react';

const StarRating = ({ rating, max = 5 }) => {
  return (
    <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          style={{
            width: '12px',
            height: '12px',
            backgroundColor: i < rating ? '#22d3ee' : '#1e293b',
            boxShadow: i < rating ? '0 0 8px #22d3ee' : 'none',
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          }}
        />
      ))}
    </div>
  );
};

export default StarRating;

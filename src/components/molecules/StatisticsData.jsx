import React from 'react';

const StatisticsData = ({ students }) => {
  const activeStudents = students.filter((s) => s.isActive);
  const averageScore =
    activeStudents.length > 0
      ? activeStudents.reduce((acc, curr) => acc + curr.score, 0) / activeStudents.length
      : 0;

  return (
    <div
      style={{
        padding: '40px',
        borderTop: '1px solid #334155',
        textAlign: 'center',
        width: '100%',
        maxWidth: '800px',
      }}
    >
      <h2
        style={{
          color: '#22d3ee',
          textTransform: 'uppercase',
          textShadow: '0 0 15px #22d3ee',
          fontSize: '24px',
          fontFamily: 'monospace',
        }}
      >
        Загальний системний рейтинг: {averageScore.toFixed(1)}
      </h2>
      <p style={{ color: '#94a3b8', fontFamily: 'monospace', fontSize: '14px' }}>
        Аналіз {activeStudents.length} активних вузлів завершено.
      </p>
    </div>
  );
};

export default StatisticsData;

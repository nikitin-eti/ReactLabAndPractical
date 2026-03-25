import React from 'react';
import { Link } from 'react-router-dom';

const StudentList = ({ students, filterActive }) => {
  const displayedStudents = filterActive ? students.filter((s) => s.isActive) : students;

  return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <h2
        style={{
          color: '#22d3ee',
          textTransform: 'uppercase',
          textAlign: 'center',
          textShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
          marginBottom: '30px',
          fontFamily: 'monospace',
        }}
      >
        Список кадетів
      </h2>
      
      {displayedStudents.length > 0 ? (
        <div style={{ display: 'grid', gap: '15px' }}>
          {displayedStudents.map((student) => (
            <div
              key={student.id}
              style={{
                padding: '15px',
                border: '1px solid #334155',
                backgroundColor: '#1e293b',
                display: 'flex',
                justifyContent: 'space-between',
                borderRadius: '4px',
                fontFamily: 'monospace',
                opacity: student.isActive ? 1 : 0.4,
              }}
            >
              <div>
                <Link 
                  to={`/student/${student.id}`}
                  style={{ color: '#e2e8f0', textDecoration: 'none', fontWeight: 'bold' }}
                  onMouseOver={(e) => e.target.style.color = '#22d3ee'}
                  onMouseOut={(e) => e.target.style.color = '#e2e8f0'}
                >
                  {student.name}
                </Link>
                <span style={{ marginLeft: '15px', color: (student.score ?? 0) >= 60 ? '#10b981' : '#ef4444' }}>
                  [{ (student.score ?? -1) === -1 ? 'Дані пошкоджено' : (student.score >= 60 ? 'Зараховано' : 'Незараховано') }]
                </span>
              </div>
              <span style={{ color: '#22d3ee' }}>
                Бали: { student.score ?? 'Оцінка відсутня' }
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            padding: '40px',
            border: '1px solid #ef4444',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            color: '#ef4444',
            textAlign: 'center',
            textTransform: 'uppercase',
            textShadow: '0 0 5px #ef4444',
            fontFamily: 'monospace',
          }}
        >
          За вашим запитом нікого не знайдено.
        </div>
      )}
    </div>
  );
};

export default StudentList;

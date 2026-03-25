import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { students } from '../data';
import Button from '../components/atoms/Button/Button';
import Card from '../components/molecules/Card/Card';

const StudentDetails = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const student = students.find((s) => s.id === Number(studentId));

  if (!student) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2 style={{ color: '#ef4444' }}>КУРСАНТА НЕ ЗНАЙДЕНО У БАЗІ</h2>
        <Button onClick={() => navigate('/students')}>ПОВЕРНУТИСЬ ДО СПИСКУ</Button>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', maxWidth: '600px', padding: '20px' }}>
      <Button onClick={() => navigate('/students')} variant="secondary" style={{ marginBottom: '20px', width: 'auto' }}>
        {"<< НАЗАД ДО БАЗИ"}
      </Button>
      
      <Card>
        <div style={{ padding: '20px' }}>
          <h2 style={{ color: '#22d3ee', borderBottom: '1px solid #22d3ee', paddingBottom: '10px' }}>
            ПРОФІЛЬ_КУРСАНТА #{student.id}
          </h2>
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px', color: '#e2e8f0', fontFamily: 'monospace' }}>
            <p><span style={{ color: '#64748b' }}>ІМ'Я:</span> {student.name}</p>
            <p><span style={{ color: '#64748b' }}>БАЛИ:</span> <span style={{ color: student.score >= 50 ? '#10b981' : '#f43f5e' }}>{student.score}</span></p>
            <p><span style={{ color: '#64748b' }}>СТАТУС:</span> {student.isActive ? 'АКТИВНИЙ (+)' : 'ДЕАКТИВОВАНИЙ (-)'}</p>
            <p><span style={{ color: '#64748b' }}>РІВЕНЬ_ДОСТУПУ:</span> {student.score > 80 ? 'LEVEL_A' : 'LEVEL_B'}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StudentDetails;

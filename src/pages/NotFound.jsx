import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button/Button';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 
        style={{ 
          fontSize: '100px', 
          color: '#f43f5e', 
          textShadow: '5px 5px #22d3ee, -5px -5px #a855f7',
          marginBottom: '20px'
        }}
      >
        404
      </h1>
      <h2 style={{ color: '#e2e8f0', marginBottom: '40px' }}>КРИТИЧНИЙ_ЗБІЙ_СИСТЕМИ: ЛОКАЦІЮ НЕ ЗНАЙДЕНО</h2>
      <p style={{ color: '#475569', marginBottom: '40px' }}>Спроба доступу до неіснуючого сектору пам'яті.</p>
      <Button onClick={() => navigate('/')} variant="secondary">
        ЕКСТРЕНЕ ПОВЕРНЕННЯ
      </Button>
    </div>
  );
};

export default NotFound;

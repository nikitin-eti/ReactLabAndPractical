import React from 'react';
import Button from '../components/atoms/Button/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '48px', color: '#22d3ee', textShadow: '0 0 20px #22d3ee', marginBottom: '20px' }}>
        ВІТАЄМО У СИСТЕМІ [CYBER_HUB]
      </h1>
      <p style={{ fontSize: '18px', color: '#94a3b8', marginBottom: '40px', lineHeight: '1.6' }}>
        Ваш персональний термінал для управління даними курсантів та моніторингу мережевої активності. 
        Рівень доступу: ОПЕРАТИВНИК.
      </p>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Button onClick={() => navigate('/feed')}>УВІЙТИ В МЕРЕЖУ</Button>
        <Button variant="secondary" onClick={() => navigate('/profile')}>ПРОФІЛЬ</Button>
      </div>
    </div>
  );
};

export default Home;

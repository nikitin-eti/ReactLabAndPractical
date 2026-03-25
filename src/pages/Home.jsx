import React, { useState, useMemo } from 'react';
import Button from '../components/atoms/Button/Button';
import { useNavigate } from 'react-router-dom';
import Input from '../components/atoms/Input/Input';

const Home = () => {
  const navigate = useNavigate();
  const [testValue, setTestValue] = useState('');

  // Самостійна робота: кешування величезного масиву розмітки
  const memoryDump = useMemo(() => {
    console.log('--- ГЕНЕРУЄТЬСЯ ДАМП ПАМ_ЯТІ (10,000 ЕЛЕМЕНТІВ) ---');
    return Array(10000).fill(0).map((_, i) => (
      <div key={i} style={{ color: '#1e293b', fontSize: '8px', fontFamily: 'monospace' }}>
        0x{i.toString(16).toUpperCase().padStart(4, '0')}: [SYSTEM_DATA_SEGMENT_{i}]
      </div>
    ));
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '60px 20px', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '48px', color: '#22d3ee', textShadow: '0 0 20px #22d3ee', marginBottom: '20px' }}>
        ВІТАЄМО У СИСТЕМІ [CYBER_HUB]
      </h1>
      
      <div style={{ marginBottom: '30px', maxWidth: '300px', margin: '0 auto' }}>
        <Input 
          placeholder="Тест продуктивності..." 
          value={testValue} 
          onChange={(e) => setTestValue(e.target.value)} 
        />
      </div>

      <p style={{ fontSize: '18px', color: '#94a3b8', marginBottom: '40px', lineHeight: '1.6' }}>
        Ваш персональний термінал для управління даними курсантів та моніторингу мережевої активності. 
      </p>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '40px' }}>
        <Button onClick={() => navigate('/feed')}>УВІЙТИ В МЕРЕЖУ</Button>
        <Button variant="secondary" onClick={() => navigate('/profile')}>ПРОФІЛЬ</Button>
      </div>

      <div style={{ borderTop: '1px solid #1e293b', paddingTop: '20px', height: '200px', overflowY: 'auto', textAlign: 'left' }}>
        <h4 style={{ color: '#475569', marginBottom: '10px' }}>СИСТЕМНИЙ_ДАМП_ПАМ_ЯТІ:</h4>
        {memoryDump}
      </div>
    </div>
  );
};

export default Home;

import React from 'react';

const AboutAuthor = () => {
  return (
    <div
      style={{
        padding: '30px',
        border: '1px solid #22d3ee',
        backgroundColor: '#0f172a',
        backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        color: '#22d3ee',
        fontFamily: 'monospace',
        borderRadius: '8px',
        boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)',
        maxWidth: '500px',
        width: '100%',
      }}
    >
      <h3 style={{ borderBottom: '1px solid #22d3ee', paddingBottom: '10px', textTransform: 'uppercase' }}>
        ID-Картка Оперативника
      </h3>
      <p><strong>ІМ'Я:</strong> Maksym Zinin</p>
      <p><strong>СТАТУС:</strong> Студент</p>
      <p><strong>ОБ'ЄКТ:</strong> Robert Elvorti Economics and Technology Institute</p>
      <p style={{ marginTop: '20px', fontSize: '12px', opacity: 0.7 }}>
        ДАНІ ЗАШИФРОВАНО. РІВЕНЬ ДОСТУПУ: ALPHA-1
      </p>
    </div>
  );
};

export default AboutAuthor;

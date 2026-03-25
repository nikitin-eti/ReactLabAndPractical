import React from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button/Button';

const ProfileOverview = () => (
  <div style={{ padding: '20px', border: '1px solid #22d3ee', backgroundColor: 'rgba(34, 211, 238, 0.05)' }}>
    <h3 style={{ color: '#22d3ee' }}>ОГЛЯД_СТАТУСУ</h3>
    <p>ПОЗИВНИЙ: ОПЕРАТИВНИК_01</p>
    <p>РІВЕНЬ_ДОСТУПУ: ALPHA</p>
    <p>АКТИВНІСТЬ: ВИСОКА</p>
  </div>
);

const ProfileSettings = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '20px', border: '1px solid #f43f5e', backgroundColor: 'rgba(244, 63, 94, 0.05)' }}>
      <h3 style={{ color: '#f43f5e' }}>КОНФІГУРАЦІЯ_СИСТЕМИ</h3>
      <p>КРИПТО_ПРОТОКОЛ: AES-256</p>
      <p>АВТОМАТИЧНЕ_ВИДАЛЕННЯ: ВКЛЮЧЕНО</p>
      <div style={{ marginTop: '20px' }}>
        <Button onClick={() => navigate('/')}>ЗБЕРЕГТИ КОНФІГУРАЦІЮ</Button>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <h2 style={{ color: '#22d3ee', textTransform: 'uppercase', marginBottom: '30px' }}>ПАНЕЛЬ_ДОСТУПУ_ОПЕРАТИВНИКА</h2>
      
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <NavLink 
          to="/profile" 
          end 
          style={({ isActive }) => ({
            padding: '10px 20px',
            border: '1px solid #22d3ee',
            color: isActive ? '#0f172a' : '#22d3ee',
            backgroundColor: isActive ? '#22d3ee' : 'transparent',
            textDecoration: 'none',
            fontFamily: 'monospace'
          })}
        >
          ОГЛЯД
        </NavLink>
        <NavLink 
          to="/profile/settings" 
          style={({ isActive }) => ({
            padding: '10px 20px',
            border: '1px solid #f43f5e',
            color: isActive ? '#0f172a' : '#f43f5e',
            backgroundColor: isActive ? '#f43f5e' : 'transparent',
            textDecoration: 'none',
            fontFamily: 'monospace'
          })}
        >
          НАЛАШТУВАННЯ
        </NavLink>
      </div>

      <Routes>
        <Route index element={<ProfileOverview />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;

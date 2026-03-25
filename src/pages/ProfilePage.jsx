import React, { useState, useEffect } from 'react';
import UserInfo from '../components/UserInfo';
import ActivityList from '../components/ActivityList';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Імітація завантаження секретних даних
    const timer = setTimeout(() => {
      setUserData({
        name: 'Дмитро Мітькін',
        email: user?.email || 'unknown@cyber.net',
        role: 'Senior Operative',
      });
      setActivities([
        { action: 'Підключення до вузла К-700', date: '2026-03-25 14:20' },
        { action: 'Шифрування бази кадетів завершено', date: '2026-03-25 15:05' },
        { action: 'Спроба обходу фаєрволу: ВІДХИЛЕНО', date: '2026-03-25 15:45' },
        { action: 'Авторизація в системі Cyber_Hub', date: '2026-03-25 16:01' },
      ]);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [user]);

  if (loading) {
    return (
      <div style={{ color: '#22d3ee', fontFamily: 'monospace', padding: '50px', textAlign: 'center' }}>
        <h2 style={{ animation: 'blink 1s step-end infinite' }}>ЗАВАНТАЖЕННЯ_СЕКТОРУ_ПАМ_ЯТІ...</h2>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '40px' }}>
      <UserInfo {...userData} />
      <ActivityList activities={activities} />
    </div>
  );
};

export default ProfilePage;

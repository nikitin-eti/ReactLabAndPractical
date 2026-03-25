import React, { useState } from 'react';
import AddStudentForm from '../components/organisms/AddStudentForm';
import StudentList from '../components/molecules/StudentList';
import StatisticsData from '../components/molecules/StatisticsData';
import { students as initialStudents } from '../data';

const StudentsPage = () => {
  const [studentList, setStudentList] = useState(initialStudents);
  const [filterActive, setFilterActive] = useState(false);
  const [activeTab, setActiveTab] = useState('list'); // 'list', 'stats'

  const handleAddStudent = (newStudent) => {
    setStudentList((prev) => [newStudent, ...prev]);
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ color: '#22d3ee', textTransform: 'uppercase', marginBottom: '30px', textShadow: '0 0 10px #22d3ee' }}>
        УПРАВЛІННЯ_КАДЕТАМИ_СЕКТОРУ
      </h2>

      <nav
        style={{
          display: 'flex',
          gap: '15px',
          marginBottom: '40px',
        }}
      >
        {['list', 'stats'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 20px',
              backgroundColor: activeTab === tab ? '#22d3ee' : '#0f172a',
              color: activeTab === tab ? '#0f172a' : '#22d3ee',
              border: '1px solid #22d3ee',
              cursor: 'pointer',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
            }}
          >
            {tab === 'list' ? 'Список' : 'Статистика'}
          </button>
        ))}
      </nav>

      {activeTab === 'list' && (
        <>
          <AddStudentForm onAddStudent={handleAddStudent} />
          
          <div style={{ margin: '20px 0' }}>
            <button
              onClick={() => setFilterActive(!filterActive)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#1e293b',
                color: filterActive ? '#10b981' : '#22d3ee',
                border: `1px solid ${filterActive ? '#10b981' : '#22d3ee'}`,
                cursor: 'pointer',
                fontFamily: 'monospace',
              }}
            >
              {filterActive ? 'ПОКАЗАТИ_ВСІХ' : 'УСПІШНІ_КУРСАНТИ'}
            </button>
          </div>
          
          <StudentList students={studentList} filterActive={filterActive} />
        </>
      )}

      {activeTab === 'stats' && <StatisticsData students={studentList} />}
    </div>
  );
};

export default StudentsPage;

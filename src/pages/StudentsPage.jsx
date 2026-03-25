import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import AddStudentForm from '../components/organisms/AddStudentForm';
import StudentList from '../components/molecules/StudentList';
import StatisticsData from '../components/molecules/StatisticsData';
import Input from '../components/atoms/Input/Input';
import { students as initialStudents } from '../data';
import useLocalStorage from '../hooks/useLocalStorage';

const StudentsPage = () => {
  const [studentList, setStudentList] = useState(initialStudents);
  const [filterActive, setFilterActive] = useState(false);
  const [activeTab, setActiveTab] = useLocalStorage('active_tab', 'list');
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';
  const sort = searchParams.get('sort') || '';

  const handleAddStudent = (newStudent) => {
    setStudentList((prev) => [newStudent, ...prev]);
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    if (val) {
      searchParams.set('query', val);
    } else {
      searchParams.delete('query');
    }
    setSearchParams(searchParams);
  };

  const handleSortChange = (e) => {
    const val = e.target.value;
    if (val) {
      searchParams.set('sort', val);
    } else {
      searchParams.delete('sort');
    }
    setSearchParams(searchParams);
  };

  const processedStudents = useMemo(() => {
    // 1. Фільтрація за пошуком
    let result = studentList.filter((s) =>
      s.name.toLowerCase().includes(query.toLowerCase())
    );

    // 2. Сортування
    if (sort === 'desc') {
      result.sort((a, b) => b.score - a.score);
    } else if (sort === 'asc') {
      result.sort((a, b) => a.score - b.score);
    }

    return result;
  }, [studentList, query, sort]);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ color: '#22d3ee', textTransform: 'uppercase', marginBottom: '30px', textShadow: '0 0 10px #22d3ee' }}>
        УПРАВЛІННЯ_КАДЕТАМИ_СЕКТОРУ
      </h2>

      <nav style={{ display: 'flex', gap: '15px', marginBottom: '40px' }}>
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
          
          <div style={{ 
            width: '100%', 
            maxWidth: '800px', 
            display: 'flex', 
            flexWrap: 'wrap',
            gap: '15px', 
            justifyContent: 'center',
            alignItems: 'flex-end', 
            margin: '30px 0',
            padding: '20px',
            backgroundColor: 'rgba(34, 211, 238, 0.05)',
            border: '1px dashed rgba(34, 211, 238, 0.3)',
            borderRadius: '8px'
          }}>
            <div style={{ flex: '1 1 300px' }}>
              <label style={{ color: '#94a3b8', fontSize: '12px', display: 'block', marginBottom: '8px', fontFamily: 'monospace' }}>
                ПОШУК_ПО_БАЗІ:
              </label>
              <Input 
                placeholder="Введіть ім'я кадета..." 
                value={query} 
                onChange={handleSearchChange}
                style={{ marginBottom: 0 }} // Override margin-bottom if component accepts style
              />
            </div>
            
            <div style={{ flex: '0 1 200px' }}>
              <label style={{ color: '#94a3b8', fontSize: '12px', display: 'block', marginBottom: '8px', fontFamily: 'monospace' }}>
                СОРТУВАННЯ:
              </label>
              <select
                value={sort}
                onChange={handleSortChange}
                style={{
                  width: '100%',
                  backgroundColor: '#0f172a',
                  color: '#22d3ee',
                  border: '1px solid #22d3ee',
                  padding: '10px',
                  fontFamily: 'monospace',
                  outline: 'none',
                  height: '42px',
                  cursor: 'pointer'
                }}
              >
                <option value="">Без сортування</option>
                <option value="desc">Від вищих балів</option>
                <option value="asc">Від нижчих балів</option>
              </select>
            </div>

            <button
              onClick={() => setFilterActive(!filterActive)}
              style={{
                padding: '10px 20px',
                backgroundColor: filterActive ? 'rgba(16, 185, 129, 0.2)' : '#1e293b',
                color: filterActive ? '#10b981' : '#22d3ee',
                border: `1px solid ${filterActive ? '#10b981' : '#22d3ee'}`,
                cursor: 'pointer',
                fontFamily: 'monospace',
                height: '42px',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                minWidth: '150px'
              }}
            >
              {filterActive ? 'УСІ_КАДЕТИ' : 'ТІЛЬКИ_АКТИВНІ'}
            </button>
          </div>
          
          <StudentList students={processedStudents} filterActive={filterActive} />
        </>
      )}

      {activeTab === 'stats' && <StatisticsData students={studentList} />}
    </div>
  );
};

export default StudentsPage;

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/molecules/Post/Post';
import SearchBar from './components/molecules/SearchBar/SearchBar';
import StudentList from './components/molecules/StudentList';
import StatisticsData from './components/molecules/StatisticsData';
import AboutAuthor from './components/molecules/AboutAuthor';
import AddStudentForm from './components/organisms/AddStudentForm';
import { postsData, students as initialStudents } from './data';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');
  
  // Пр 4: Стейт для списку студентів
  const [studentList, setStudentList] = useState(initialStudents);

  // Пр 3: Нові стейти
  const [showHelp, setShowHelp] = useState(false);
  const [filterActive, setFilterActive] = useState(false);
  const [activeTab, setActiveTab] = useState('list'); // 'list', 'stats', 'author'

  const categories = ['ALL', 'SYSTEM', 'UPDATE', 'TECH', 'LOGS'];

  const filteredPosts = postsData.filter((post) => {
    const matchesSearch =
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === 'ALL' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddStudent = (newStudent) => {
    setStudentList((prev) => [newStudent, ...prev]);
  };

  return (
    <>
      <Header />
      <main
        style={{
          padding: '50px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'monospace',
        }}
      >
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <button
            onClick={() => setShowHelp(!showHelp)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#1e293b',
              color: '#22d3ee',
              border: '1px solid #22d3ee',
              cursor: 'pointer',
              fontFamily: 'monospace',
              marginBottom: '10px',
            }}
          >
            {showHelp ? 'Приховати інструкцію' : 'Показати інструкцію'}
          </button>
          
          {showHelp && (
            <div
              style={{
                padding: '15px',
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid #22d3ee',
                color: '#e2e8f0',
                boxShadow: '0 0 10px rgba(34, 211, 238, 0.3)',
                marginTop: '10px',
                borderRadius: '4px',
              }}
            >
              <p>Довідка: Дозволяє керувати списками студентів.</p>
            </div>
          )}
        </div>

        <nav
          style={{
            display: 'flex',
            gap: '15px',
            marginBottom: '40px',
            borderBottom: '1px solid #1e293b',
            paddingBottom: '20px',
          }}
        >
          {['list', 'stats', 'author'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '12px 24px',
                backgroundColor: activeTab === tab ? '#22d3ee' : '#0f172a',
                color: activeTab === tab ? '#0f172a' : '#22d3ee',
                border: '1px solid #22d3ee',
                cursor: 'pointer',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                boxShadow: activeTab === tab ? '0 0 20px #22d3ee' : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              {tab === 'list' ? 'Всі студенти' : tab === 'stats' ? 'Статистика' : 'Про автора'}
            </button>
          ))}
        </nav>

        {activeTab === 'list' && (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AddStudentForm onAddStudent={handleAddStudent} />
            
            <button
              onClick={() => setFilterActive(!filterActive)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#1e293b',
                color: filterActive ? '#10b981' : '#22d3ee',
                border: `1px solid ${filterActive ? '#10b981' : '#22d3ee'}`,
                cursor: 'pointer',
                fontFamily: 'monospace',
                marginBottom: '30px',
              }}
            >
              {filterActive ? 'Показати всіх' : 'Показати тільки успішних'}
            </button>
            <StudentList students={studentList} filterActive={filterActive} />
          </div>
        )}

        {activeTab === 'stats' && <StatisticsData students={studentList} />}
        
        {activeTab === 'author' && <AboutAuthor />}

        <hr style={{ width: '100%', borderColor: '#1e293b', margin: '80px 0' }} />

        <h2 style={{ color: '#22d3ee', textTransform: 'uppercase', textShadow: '0 0 10px rgba(34, 211, 238, 0.5)', marginBottom: '30px' }}>
          Термінал Доступу до Даних
        </h2>

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <div style={{ display: 'flex', gap: '10px', marginBottom: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 16px',
                backgroundColor: activeCategory === cat ? '#22d3ee' : '#0f172a',
                color: activeCategory === cat ? '#0f172a' : '#22d3ee',
                border: `1px solid #22d3ee`,
                fontFamily: 'monospace',
                cursor: 'pointer',
                textTransform: 'uppercase',
                boxShadow: activeCategory === cat ? '0 0 15px #22d3ee' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ width: '100%', maxWidth: '600px' }}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => <Post key={post.id} {...post} />)
          ) : (
            <div style={{ padding: '40px', border: '1px solid #ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', textAlign: 'center', textTransform: 'uppercase', textShadow: '0 0 5px #ef4444' }}>
              Системна помилка: Записів за вашим запитом не знайдено.
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;

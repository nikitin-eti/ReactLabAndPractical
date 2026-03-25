import React from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/molecules/Post/Post';
import { postsData, students } from './data';

function App() {
  // 1. Сортування всіх студентів за спаданням балів
  const sortedStudents = [...students].sort((a, b) => b.score - a.score);

  // 2. Фільтрація елітних оперативників (активні та бал > 60)
  const eliteOperatives = students.filter((s) => s.isActive && s.score > 60);

  // 3. Підрахунок середнього бала активних студентів
  const activeStudents = students.filter((s) => s.isActive);
  const averageScore =
    activeStudents.length > 0
      ? activeStudents.reduce((acc, curr) => acc + curr.score, 0) / activeStudents.length
      : 0;

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
        <section style={{ width: '100%', maxWidth: '800px', marginBottom: '60px' }}>
          <h2
            style={{
              color: '#22d3ee',
              textTransform: 'uppercase',
              textAlign: 'center',
              textShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
              marginBottom: '30px',
            }}
          >
            Список усіх кадетів
          </h2>
          <div style={{ display: 'grid', gap: '15px' }}>
            {sortedStudents.map((student) => (
              <div
                key={student.id}
                style={{
                  padding: '15px',
                  border: '1px solid #334155',
                  backgroundColor: '#1e293b',
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderRadius: '4px',
                  opacity: student.isActive ? 1 : 0.4,
                  textDecoration: student.isActive ? 'none' : 'line-through',
                  color: student.isActive ? '#e2e8f0' : '#ef4444',
                  boxShadow: student.isActive
                    ? 'none'
                    : 'inset 0 0 10px rgba(239, 68, 68, 0.2)',
                }}
              >
                <span>{student.name}</span>
                <span style={{ color: '#22d3ee' }}>Бали: {student.score}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            width: '100%',
            maxWidth: '800px',
            padding: '30px',
            border: '2px solid #10b981',
            boxShadow: '0 0 20px #10b981, inset 0 0 10px #10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.05)',
            marginBottom: '60px',
            borderRadius: '8px',
          }}
        >
          <h2
            style={{
              color: '#10b981',
              textTransform: 'uppercase',
              textAlign: 'center',
              textShadow: '0 0 10px rgba(16, 185, 129, 0.5)',
              marginBottom: '25px',
            }}
          >
            Елітні оперативники
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {eliteOperatives.map((s) => (
              <li
                key={s.id}
                style={{
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(16, 185, 129, 0.2)',
                  color: '#10b981',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>{s.name}</span>
                <span>Ранг: Elite | {s.score} pts</span>
              </li>
            ))}
          </ul>
        </section>

        <section
          style={{
            width: '100%',
            maxWidth: '800px',
            textAlign: 'center',
            padding: '40px',
            borderTop: '1px solid #334155',
          }}
        >
          <h2
            style={{
              color: '#22d3ee',
              textTransform: 'uppercase',
              textShadow: '0 0 15px #22d3ee',
              fontSize: '24px',
            }}
          >
            Загальний системний рейтинг: {averageScore.toFixed(1)}
          </h2>
        </section>

        <div style={{ marginTop: '100px', width: '100%', maxWidth: '600px' }}>
          <h2
            style={{
              color: '#a855f7',
              textAlign: 'center',
              textTransform: 'uppercase',
              marginBottom: '30px',
            }}
          >
            Нейро-стрічка
          </h2>
          {postsData.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;

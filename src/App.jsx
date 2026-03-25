import React from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/molecules/Post/Post';
import { postsData } from './data';

function App() {
  return (
    <>
      <Header />
      <main
        style={{
          padding: '50px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2
          style={{
            color: '#22d3ee',
            fontFamily: 'monospace',
            marginBottom: '40px',
            textTransform: 'uppercase',
            textShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
          }}
        >
          Нейро-стрічка
        </h2>
        <div style={{ maxWidth: '600px', width: '100%' }}>
          {postsData.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              avatar={post.avatar}
              content={post.content}
              date={post.date}
              likes={post.likes}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;

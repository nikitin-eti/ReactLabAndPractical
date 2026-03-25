import React, { useState } from 'react';
import Post from '../components/molecules/Post/Post';
import SearchBar from '../components/molecules/SearchBar/SearchBar';
import { postsData } from '../data';
import { Link } from 'react-router-dom';

const Feed = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');
  const categories = ['ALL', 'SYSTEM', 'UPDATE', 'TECH', 'LOGS'];

  const filteredPosts = postsData.filter((post) => {
    const matchesSearch =
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === 'ALL' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ color: '#22d3ee', textTransform: 'uppercase', marginBottom: '30px', textShadow: '0 0 10px #22d3ee' }}>
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
          filteredPosts.map((post) => (
            <div key={post.id} style={{ position: 'relative' }}>
              <Post {...post} />
              <Link 
                to={`/feed/${post.id}`} 
                style={{ 
                  position: 'absolute', 
                  top: '10px', 
                  right: '10px', 
                  color: '#22d3ee', 
                  fontSize: '10px', 
                  textDecoration: 'none',
                  border: '1px solid #22d3ee',
                  padding: '2px 5px'
                }}
              >
                ДЕТАЛІ {">>"}
              </Link>
            </div>
          ))
        ) : (
          <div style={{ padding: '40px', border: '1px solid #ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', textAlign: 'center' }}>
            Системна помилка: Записів за вашим запитом не знайдено.
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;

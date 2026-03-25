import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { postsData } from '../data';
import Button from '../components/atoms/Button/Button';
import Card from '../components/molecules/Card/Card';

const PostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = postsData.find((p) => p.id === Number(postId));

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2 style={{ color: '#ef4444' }}>ПОМИЛКА_ДОСТУПУ: ЗАПИС НЕ ЗНАЙДЕНО</h2>
        <Button onClick={() => navigate(-1)}>ПОВЕРНУТИСЬ</Button>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', maxWidth: '700px', padding: '20px' }}>
      <Button onClick={() => navigate(-1)} variant="secondary" style={{ marginBottom: '20px', width: 'auto' }}>
        {"<< ПЕРЕРВАТИ_З'ЄДНАННЯ"}
      </Button>
      
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
          <img 
            src={post.avatar} 
            alt={post.author} 
            style={{ width: '80px', height: '80px', borderRadius: '50%', border: '2px solid #22d3ee', boxShadow: '0 0 10px #22d3ee' }} 
          />
          <div>
            <h2 style={{ color: '#22d3ee', margin: 0 }}>{post.author}</h2>
            <p style={{ color: '#94a3b8', fontSize: '12px' }}>ID_ЛОГУ: {post.id} | КАТЕГОРІЯ: {post.category}</p>
          </div>
        </div>
        
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#e2e8f0', backgroundColor: 'rgba(0,0,0,0.3)', padding: '20px', borderLeft: '3px solid #f43f5e' }}>
          {post.content}
        </p>
        
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', color: '#475569', fontSize: '14px' }}>
          <span>ДАТА_ЗАПИСУ: {post.date}</span>
          <span>ВПОДОБАЙКИ: {post.likes}</span>
        </div>
      </Card>
    </div>
  );
};

export default PostPage;

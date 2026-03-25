import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/templates/MainLayout/MainLayout';
import Home from './pages/Home';
import Feed from './pages/Feed';
import PostPage from './pages/PostPage';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="feed" element={<Feed />} />
        <Route path="feed/:postId" element={<PostPage />} />
        <Route path="profile/*" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

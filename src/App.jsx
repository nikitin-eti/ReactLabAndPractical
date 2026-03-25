import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/templates/MainLayout/MainLayout';
import Home from './pages/Home';
import Feed from './pages/Feed';
import PostPage from './pages/PostPage';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFound';
import Login from './pages/Login/Login';
import ProtectedRoute from './components/hoc/ProtectedRoute';
import StudentsPage from './pages/StudentsPage';
import EquipmentPage from './pages/EquipmentPage';
import StudentDetails from './pages/StudentDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="feed" element={<Feed />} />
        <Route path="feed/:postId" element={<PostPage />} />
        <Route path="profile/*" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="students" element={<StudentsPage />} />
        <Route path="student/:studentId" element={<StudentDetails />} />
        <Route path="equipment" element={<EquipmentPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

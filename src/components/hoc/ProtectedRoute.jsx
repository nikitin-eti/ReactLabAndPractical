import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    console.warn('ДОСТУП_ЗАБОРОНЕНО: Перенаправлення на екран авторизації...');
    return <Navigate to="/login" replace={true} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;

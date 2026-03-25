import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email) => {
    setIsAuthenticated(true);
    setUser({ email });
    console.log(`Система: Авторизація успішна для ${email}`);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    console.log('Система: Сеанс завершено.');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

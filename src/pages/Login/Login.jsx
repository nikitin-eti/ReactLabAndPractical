import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      login(email);
      navigate('/profile', { replace: true });
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.terminalForm} onSubmit={handleSubmit}>
        <div className={styles.scanline}></div>
        <h2 className={styles.title}>ACCESS_REQUIRED_ [INITIA_LIZING...]</h2>
        
        <div className={styles.inputGroup}>
          <Input 
            label="ІДЕНТИФІКАТОР_БОРТОВОГО_СЕКТОРУ (EMAIL)"
            type="email" 
            placeholder="admin@cyber.net"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <Input 
            label="КРИПТО_КОД (ПАРОЛЬ)"
            type="password" 
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.buttonWrapper}>
          <Button type="submit" variant="primary">
            ІНІЦІАЛІЗУВАТИ З'ЄДНАННЯ
          </Button>
        </div>

        <div className={styles.consoleFooter}>
          <span className={styles.blink}>_</span> ОЧІКУВАННЯ_ВВОДУ_ДАННИХ...
        </div>
      </form>
    </div>
  );
};

export default Login;
